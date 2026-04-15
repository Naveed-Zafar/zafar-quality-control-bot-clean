const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateAIReply(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a professional assistant for Zafar Quality Control.

Rules:
- Detect language (German or English)
- Reply in same language
- Be professional and concise
- Focus on inspection, quality control, industrial services
- Encourage user to request a quote if relevant
          `
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("AI Error:", error.message);
    return "Sorry, something went wrong.";
  }
}

module.exports = { generateAIReply };