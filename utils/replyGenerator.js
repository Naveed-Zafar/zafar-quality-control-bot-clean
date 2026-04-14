function generateBotReply(text) {
  const message = text.trim().toLowerCase();

  if (
    message === "hi" ||
    message === "hello" ||
    message === "hallo" ||
    message === "start" ||
    message === "menu"
  ) {
    return `Welcome to Zafar Quality Control.

We support companies with professional quality inspection and measurement services.

Please reply with a number:

1 - Services
2 - Experience
3 - Request a quotation
4 - Contact
5 - Deutsch

You can also type menu anytime.`;
  }

  if (message === "1") {
    return `Our services:

- Surface inspection
- Dimensional inspection
- Measuring and gauging
- 3D / CMM measurement support
- Sorting and rework support
- Supplier quality support
- On-site quality control services

Reply with menu to go back.`;
  }

  if (message === "2") {
    return `Zafar Quality Control has practical experience in quality assurance and inspection work, including:

- Surface control
- Measuring and gauging
- CMM and 3D measurement support
- Quality inspection processes
- Industrial and production support

Reply with menu to go back.`;
  }

  if (message === "3") {
    return `Quotation request:

Please send the following details:
- Company name
- Contact person
- City / country
- Required service
- Quantity or project scope
- Preferred callback number or email

We will review your request and contact you.

Reply with menu to go back.`;
  }

  if (message === "4") {
    return `Contact Zafar Quality Control:

Please send your inquiry here on WhatsApp and include:
- Your name
- Company
- Service needed
- Location

We will reply as soon as possible.

Reply with menu to go back.`;
  }

  if (message === "5" || message === "deutsch") {
    return `Willkommen bei Zafar Quality Control.

Bitte antworten Sie mit einer Zahl:

1 - Leistungen
2 - Erfahrung
3 - Angebot anfragen
4 - Kontakt
5 - Deutsch

Sie können jederzeit menu schreiben.`;
  }

  return `Thank you for your message.

Please type:
1 for Services
2 for Experience
3 for Request a quotation
4 for Contact
5 for Deutsch

You can also type menu.`;
}

module.exports = { generateBotReply };