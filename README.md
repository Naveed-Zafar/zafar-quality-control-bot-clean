# WhatsApp Cloud API Chatbot

A minimal Node.js + Express chatbot that handles WhatsApp Cloud API webhook events and automatically replies to incoming messages.

## Project structure

- `server.js` - Main Express app and route registration
- `controllers/webhookController.js` - Webhook verification and incoming message handling
- `services/whatsappService.js` - WhatsApp Cloud API send message logic
- `utils/replyGenerator.js` - Bot reply generation logic
- `package.json` - Package manifest and start script
- `.env.example` - Example environment variables

## Final file tree

```
./
├── .env.example
├── controllers/
│   └── webhookController.js
├── package.json
├── README.md
├── server.js
├── services/
│   └── whatsappService.js
└── utils/
    └── replyGenerator.js
```

## Features

- Webhook verification via `GET /webhook`
- Incoming message handling via `POST /webhook`
- Replies only for text messages
- Skips messages sent by the business itself
- Ignores status updates and duplicate message events
- Logs incoming messages for easier debugging
- Sends replies using the WhatsApp Cloud API and `axios`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example`:

```bash
copy .env.example .env
```

3. Edit `.env` and add your values:

```env
PORT=3000
VERIFY_TOKEN=your_verify_token_here
WHATSAPP_TOKEN=your_whatsapp_cloud_api_token_here
PHONE_NUMBER_ID=your_phone_number_id_here
```

## Run locally

```bash
npm start
```

The app starts on `http://localhost:3000` by default.

## Run tests

Install dependencies first:

```bash
npm install
```

Then run:

```bash
npm test
```

This runs the Jest test suite for `generateBotReply`.

## Webhook endpoints

### Verify webhook

Meta will validate your webhook with a `GET /webhook` request containing:

- `hub.mode`
- `hub.verify_token`
- `hub.challenge`

If `hub.verify_token` matches `VERIFY_TOKEN`, the server returns the challenge.

### Incoming messages

The server receives `POST /webhook` payloads from WhatsApp Cloud API and sends replies automatically.

## Reply logic

- If the message contains `hello` or `hi`: replies `Hello! How can I help you?`
- If the message contains `price`: replies `Please tell me which product you want pricing for.`
- Otherwise: replies `Thanks for your message. We will help you soon.`

## Example webhook payload

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "+1234567890",
              "phone_number_id": "PHONE_NUMBER_ID"
            },
            "messages": [
              {
                "from": "447700900123",
                "id": "wamid.HBgM...",
                "timestamp": "1677598890",
                "text": {
                  "body": "Hello"
                },
                "type": "text"
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

## Connect your webhook URL in Meta WhatsApp Cloud API

1. Open the Meta Developers dashboard and select your WhatsApp app.
2. Go to the WhatsApp product settings and find the Webhooks section.
3. Set your webhook callback URL to:

```
https://<your-public-domain>/webhook
```

4. Set the Verify Token to the same value as `VERIFY_TOKEN` in your `.env` file.
5. Subscribe to the `messages` field.

> If you run locally, expose your server to the internet with a tunneling tool such as `ngrok` or `localtunnel`:
>
> ```bash
> npx ngrok http 3000
> ```
>
> Then use the generated public URL as your webhook callback.

## Notes

- This sample stores processed message IDs in memory. For production, use a persistent cache or database.
- The webhook only processes real incoming messages and ignores delivery/read status updates.
- Update `https://graph.facebook.com/v17.0` to a newer WhatsApp API version if required.
