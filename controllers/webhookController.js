const express = require('express');
const axios = require('axios');
const { generateAIReply } = require('../services/aiService');
const { sendWhatsAppTextMessage } = require('../services/whatsappService');
const { generateBotReply } = require('../utils/replyGenerator');

const leadSessions = new Map();
const webhookRouter = express.Router();

// Keep track of message IDs to avoid sending duplicate replies.
const processedMessageIds = new Set();
const MAX_CACHE_SIZE = 5000;

function addProcessedMessageId(id) {
  processedMessageIds.add(id);
  if (processedMessageIds.size > MAX_CACHE_SIZE) {
    const oldestId = processedMessageIds.values().next().value;
    processedMessageIds.delete(oldestId);
  }
}

function isTextMessage(message) {
  return message.type === 'text' && typeof message.text?.body === 'string';
}

function isFromBusiness(message, metadata) {
  return metadata?.display_phone_number && message.from === metadata.display_phone_number;
}

function startLeadSession(phone, type = 'quote') {
  leadSessions.set(phone, {
    type,
    step: 'name',
    data: {},
  });
}

function clearLeadSession(phone) {
  leadSessions.delete(phone);
}

function getLeadSession(phone) {
  return leadSessions.get(phone);
}

webhookRouter.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('Webhook verification succeeded.');
    return res.status(200).send(challenge);
  }

  console.warn('Webhook verification failed.');
  return res.sendStatus(403);
});

webhookRouter.post('/webhook', async (req, res) => {
  const body = req.body;

  if (!body.entry || !Array.isArray(body.entry)) {
    return res.status(400).send('Invalid webhook payload');
  }

  for (const entry of body.entry) {
    const metadata = entry.changes?.[0]?.value?.metadata;

    for (const change of entry.changes || []) {
      const value = change.value;
      if (!value) {
        continue;
      }

      if (value.statuses && value.statuses.length > 0) {
        continue;
      }

      const messages = value.messages;
      if (!Array.isArray(messages)) {
        continue;
      }

      for (const message of messages) {
        console.log('Incoming message:', {
          id: message.id,
          from: message.from,
          type: message.type,
          text: message.text?.body,
        });

        if (!message.id || !message.from) {
          continue;
        }

        if (processedMessageIds.has(message.id)) {
          console.log('Duplicate event ignored:', message.id);
          continue;
        }

        if (!isTextMessage(message)) {
          console.log('Non-text message ignored:', message.id);
          addProcessedMessageId(message.id);
          continue;
        }

        if (isFromBusiness(message, metadata)) {
          console.log('Business-sent message ignored:', message.id);
          addProcessedMessageId(message.id);
          continue;
        }

        addProcessedMessageId(message.id);

        const incomingText = message.text.body.trim();
        const from = message.from;
        const currentSession = getLeadSession(from);

        // Existing active flow (quote or callback)
        if (currentSession) {
          const sessionType = currentSession.type;

          if (currentSession.step === 'name') {
            currentSession.data.name = incomingText;
            currentSession.step = 'company';
            await sendWhatsAppTextMessage(from, 'Please enter your company name.');
            continue;
          }

          if (currentSession.step === 'company') {
            currentSession.data.company = incomingText;

            if (sessionType === 'callback') {
              currentSession.step = 'phone';
              await sendWhatsAppTextMessage(from, 'Please enter your phone number.');
            } else {
              currentSession.step = 'product';
              await sendWhatsAppTextMessage(from, 'Please describe the product or service you need.');
            }
            continue;
          }

          if (currentSession.step === 'phone') {
            currentSession.data.phone = incomingText;

            const summary = `Callback request received.

Name: ${currentSession.data.name}
Company: ${currentSession.data.company}
Phone: ${currentSession.data.phone}

We will contact you shortly.`;

            console.log('New callback captured:', {
              whatsappNumber: from,
              ...currentSession.data,
            });

            await sendWhatsAppTextMessage(from, summary);

            clearLeadSession(from);
            continue;
          }

          if (currentSession.step === 'product') {
            currentSession.data.product = incomingText;
            currentSession.step = 'location';
            await sendWhatsAppTextMessage(from, 'Please enter the inspection or project location.');
            continue;
          }

          if (currentSession.step === 'location') {
            currentSession.data.location = incomingText;

            const summary = `Thank you. Your quotation request has been recorded.

Name: ${currentSession.data.name}
Company: ${currentSession.data.company}
Product/Service: ${currentSession.data.product}
Location: ${currentSession.data.location}

Our team will contact you soon.`;

            await axios.post(
              'https://script.google.com/macros/s/AKfycbyv5aHdfDDvNFLOGCpsu2_Wvwd9D5xV5pw-bx_hgFa-1X5qI2tsIEEi5mo29EZi3vJOMw/exec',
              {
                phone: from,
                name: currentSession.data.name,
                company: currentSession.data.company,
                product: currentSession.data.product,
                location: currentSession.data.location,
              }
            );

            await sendWhatsAppTextMessage(from, summary);

            console.log('New lead captured:', {
              phone: from,
              ...currentSession.data,
            });

            clearLeadSession(from);
            continue;
          }
        }

        // Start quote flow
        if (incomingText === '3') {
          startLeadSession(from, 'quote');
          await sendWhatsAppTextMessage(from, 'Quotation request started. Please enter your full name.');
          continue;
        }

        // Start callback flow
        if (
          incomingText.toLowerCase().includes('rückruf') ||
          incomingText.toLowerCase().includes('call me') ||
          incomingText.toLowerCase().includes('rufen sie mich an')
        ) {
          startLeadSession(from, 'callback');
          await sendWhatsAppTextMessage(from, 'Callback request started. Please enter your full name.');
          continue;
        }

        // Standard menu / keyword reply
        let replyText = generateBotReply(incomingText);

        // Only route truly unmatched requests to AI
        if (
          replyText.includes('Type *menu* to continue.') ||
          replyText.includes('Please select an option from the menu.') ||
          replyText.includes('Bitte beschreiben Sie Ihr Anliegen genauer') ||
          replyText.includes('I didn’t fully understand') ||
          replyText.includes("I didn't fully understand")
        ) {
          replyText = await generateAIReply(incomingText);
        }

        await sendWhatsAppTextMessage(from, replyText);
      }
    }
  }

  return res.status(200).send('EVENT_RECEIVED');
});

module.exports = { webhookRouter };