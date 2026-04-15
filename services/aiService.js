const OpenAI = require('openai');

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable.');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateAIReply(message) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: [
            'You are a professional assistant for Zafar Quality Control.',
            'Rules:',
            '- Detect language (German or English)',
            '- Reply in the same language as the user',
            '- Be professional and concise',
            '- Focus on inspection, quality control, and industrial services',
            '- Encourage the user to request a quote when relevant',
          ].join('\n'),
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const aiText = response?.choices?.[0]?.message?.content;
    if (typeof aiText !== 'string' || !aiText.trim()) {
      console.warn('OpenAI returned an empty response:', response);
      return 'Sorry, I could not generate a response right now. Please try again later.';
    }

    return aiText.trim();
  } catch (error) {
    console.error('AI Error:', error.response?.data || error.message || error);
    return 'Sorry, something went wrong. Please try again later.';
  }
}

module.exports = { generateAIReply };