const express = require('express');
const dotenv = require('dotenv');
const { webhookRouter } = require('./controllers/webhookController');

dotenv.config();

if (!process.env.VERIFY_TOKEN || !process.env.WHATSAPP_TOKEN || !process.env.PHONE_NUMBER_ID) {
  console.error('Missing required environment variables. Please check .env file.');
  process.exit(1);
}

const app = express();
app.use(express.json());

app.use('/', webhookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`WhatsApp chatbot server is running on port ${PORT}`);
});
