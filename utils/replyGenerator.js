function generateBotReply(message) {
  const text = message.toLowerCase();

  if (text === "hello" || text === "hi" || text === "hallo") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

Please choose / Bitte wählen:

1️⃣ Our Services / Unsere Dienstleistungen  
2️⃣ Experience / Erfahrung  
3️⃣ Request a Quote / Angebot anfragen  
4️⃣ Contact / Kontakt  
5️⃣ Human / Mitarbeiter`;
  }

  if (text === "1") {
    return `🔧 Our Services:

✔️ Pre-shipment Inspection  
✔️ In-line Production Inspection  
✔️ Final Random Inspection  
✔️ Factory Audit  
✔️ Container Loading Check  

Reply *menu* to go back.`;
  }

  if (text === "2") {
    return `🏭 Experience & Industries:

We have experience in:

✔️ Automotive  
✔️ Textile & Garments  
✔️ Leather Products  
✔️ Machinery & Tools  

Reply *menu* to go back.`;
  }

  if (text === "3") {
    return `📩 Request a Quote:

Please send:

- Your Name  
- Company Name  
- Product Type  
- Inspection Location  

Our team will contact you shortly.`;
  }

  if (text === "4") {
    return `📞 Contact Details:

Zafar Quality Control  
📧 Email: info@zafarqc.com  
📱 WhatsApp: +491234567890  

We respond within 24 hours.`;
  }

  if (text === "5") {
    return `👨‍💼 A human agent will contact you soon.

Please describe your requirement briefly.`;
  }

  if (text === "menu" || text === "menü") {
    return `Main Menu:

1️⃣ Our Services  
2️⃣ Experience  
3️⃣ Request Quote  
4️⃣ Contact  
5️⃣ Human`;
  }

  return `❓ I didn't understand that.

Type *menu* to see options.`;
}

module.exports = { generateBotReply };