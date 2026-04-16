function generateBotReply(message) {
  const text = message.toLowerCase().trim();

  // ===== GREETING =====
  if (text === "hello" || text === "hi" || text === "hallo" || text === "start") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

We provide professional quality inspection and rework services for industrial clients.

Wir bieten professionelle Qualitätskontrollen und Nacharbeiten für Industrieunternehmen.

Please choose / Bitte wählen:

1️⃣ Inspection & Rework Services / Dienstleistungen  
2️⃣ Industries & Experience / Erfahrung  
3️⃣ Request a Quote / Angebot anfragen  
4️⃣ Contact / Kontakt  
5️⃣ Speak to Expert / Mitarbeiter`;
  }

  // ===== SERVICES =====
  if (text === "1") {
    return `🔧 Our Services / Unsere Dienstleistungen:

✔️ Visual Inspection (100% inspection, KMG / manual)  
✔️ Rework & Sorting Services  
✔️ Incoming Goods Inspection  
✔️ Final Quality Inspection  
✔️ Technical Cleaning  
✔️ Assembly of Components  
✔️ Electrical Testing (E-Mobility)

We ensure reliable quality control according to customer specifications.

Reply *menu* to go back.`;
  }

  // ===== EXPERIENCE =====
  if (text === "2") {
    return `🏭 Industries & Experience / Erfahrung:

We have extensive experience in:

✔️ Automotive Industry  
✔️ Metal & Plastic Components  
✔️ Manufacturing & Production  
✔️ Supplier Quality Management  

With years of hands-on experience in quality assurance, project coordination and on-site inspections, we support companies across Germany.

Mit langjähriger Erfahrung in der Qualitätsprüfung unterstützen wir Unternehmen deutschlandweit.

Reply *menu* to go back.`;
  }

  // ===== QUOTE =====
  if (text === "3") {
    return `📩 Request a Quote / Angebot:

Please provide the following information:

- Full Name  
- Company Name  
- Product / Service required  
- Location  

Bitte senden Sie:

- Ihren Namen  
- Firmenname  
- Produkt / Dienstleistung  
- Einsatzort  

Our team will contact you shortly.`;
  }

  // ===== CONTACT =====
  if (text === "4") {
    return `📞 Contact / Kontakt:

Zafar Quality Control  
📍 Germany (Lüdenscheid region)  

📧 Email: info@zafarqc.com  
📱 WhatsApp: +49XXXXXXXXX  

We respond quickly and professionally.

Wir antworten schnell und zuverlässig.`;
  }

  // ===== HUMAN =====
  if (text === "5") {
    return `👨‍💼 Expert Support:

A quality specialist will contact you shortly.

Please describe your request briefly.

Ein Mitarbeiter wird sich zeitnah bei Ihnen melden.`;
  }

  // ===== MENU =====
  if (text === "menu") {
    return `Main Menu / Hauptmenü:

1️⃣ Services  
2️⃣ Experience  
3️⃣ Quote  
4️⃣ Contact  
5️⃣ Expert`;
  }

  // ===== KEYWORD SMART RESPONSES =====

  if (text.includes("inspection") || text.includes("prüfung") || text.includes("kontrolle")) {
    return `We offer professional inspection services including visual inspection, measurement and documentation.

Wir bieten professionelle Prüfungen inkl. Dokumentation und Fehleranalyse.

Type *3* to request a quotation.`;
  }

  if (text.includes("rework") || text.includes("nacharbeit") || text.includes("sortierung")) {
    return `Our team provides fast and reliable rework and sorting services on-site or at your facility.

Unsere Fachkräfte übernehmen Nacharbeiten und Sortierarbeiten effizient und flexibel.

Type *3* for a quotation.`;
  }

  if (text.includes("automotive")) {
    return `We have strong experience in the automotive sector including supplier quality and component inspection.

Wir verfügen über umfangreiche Erfahrung im Automotive-Bereich.

Type *3* to request a quote.`;
  }

  // ===== DEFAULT =====
  return `❓ I didn’t fully understand your request.

Please select an option from the menu or describe your request.

Bitte wählen Sie eine Option oder beschreiben Sie Ihr Anliegen.

Type *menu* to continue.`;
}

module.exports = { generateBotReply };