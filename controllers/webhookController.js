const express = require('express');
const { sendWhatsAppTextMessage } = require('../services/whatsappService');
const { generateBotReply } = require('../utils/replyGenerator');

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
  // The WhatsApp webhook payload usually includes the business phone number
  // in metadata.display_phone_number. If the incoming message "from" value
  // matches that, it is likely a message sent by the business account.
  return metadata?.display_phone_number && message.from === metadata.display_phone_number;
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
        // Skip delivery/read status updates.
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

        const incomingText = message.text.body;
        const replyText = generateBotReply(incomingText);
        await sendWhatsAppTextMessage(message.from, replyText);
      }
    }
  }

  return res.status(200).send('EVENT_RECEIVED');
});

module.exports = { webhookRouter };
