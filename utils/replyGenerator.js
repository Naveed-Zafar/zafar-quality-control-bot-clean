function generateBotReply(message) {
  const text = message.toLowerCase().trim();

  // ===== GREETING =====
  if (text === "hello" || text === "hi" || text === "hallo" || text === "start") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

We support industrial companies with professional quality inspection, rework and on-site quality services.

Wir unterstützen Industrieunternehmen mit professioneller Qualitätsprüfung, Nacharbeit und Vor-Ort-Qualitätsdienstleistungen.

✔️ Fast response  
✔️ Flexible deployment  
✔️ Reliable quality support  

✔️ Schnelle Reaktion  
✔️ Flexible Einsätze  
✔️ Zuverlässige Qualitätsunterstützung  

Please choose / Bitte wählen:

1️⃣ Services / Dienstleistungen  
2️⃣ Experience & Industries / Erfahrung & Branchen  
3️⃣ Request a Quote / Angebot  
4️⃣ Contact / Kontakt  
5️⃣ Speak to Expert / Mitarbeiter`;
  }

  // ===== SERVICES =====
  if (text === "1") {
    return `🔧 Services / Dienstleistungen:

✔️ Quality Inspection / Qualitätsprüfung  
✔️ 100% Visual Inspection / 100% Sichtprüfung  
✔️ Dimensional Inspection / Maßprüfung  
✔️ Rework & Sorting / Nacharbeit & Sortierung  
✔️ Incoming Goods Inspection / Wareneingang  
✔️ Final Inspection / Endkontrolle  
✔️ Technical Cleaning / Technisches Reinigen  
✔️ Assembly Support / Montageunterstützung  

We work strictly according to customer specifications and quality requirements.

Wir arbeiten strikt nach Kundenvorgaben und Qualitätsanforderungen.

👉 Type *3* to request a quotation.`;
  }

  // ===== EXPERIENCE =====
  if (text === "2") {
    return `🏭 Experience & Industries / Erfahrung & Branchen:

✔️ Automotive Industry  
✔️ Metal & Plastic Components  
✔️ Manufacturing & Production  
✔️ Supplier Quality Support  
✔️ On-site Quality Services  

✔️ Automobilindustrie  
✔️ Metall- und Kunststoffteile  
✔️ Produktion & Fertigung  
✔️ Lieferantenqualität  
✔️ Qualitätsunterstützung vor Ort  

We focus on precision, flexibility and fast problem-solving.

Unser Fokus liegt auf Präzision, Flexibilität und schneller Problemlösung.

👉 Type *3* to request support.`;
  }

  // ===== QUOTE =====
  if (text === "3") {
    return `📩 Request a Quote / Angebot:

Please provide:

- Full Name  
- Company Name  
- Product / Service  
- Location  

Bitte senden Sie:

- Ihren Namen  
- Firmenname  
- Produkt / Dienstleistung  
- Einsatzort  

We will review your request and contact you as soon as possible.

Wir prüfen Ihre Anfrage und melden uns schnellstmöglich bei Ihnen.`;
  }

  // ===== CONTACT =====
  if (text === "4") {
    return `📞 Contact / Kontakt:

Zafar Quality Control  
📍 Lüdenscheid / NRW / Germany  

📧 Email: rananaveedz@hotmail.com  
📱 WhatsApp: +4917634278880  

We respond quickly and professionally.

Wir antworten schnell und professionell.

👉 You can also request a callback.`;
  }

  // ===== HUMAN =====
  if (text === "5") {
    return `👨‍💼 Expert Support / Mitarbeiter:

A quality specialist will contact you shortly.

Ein Qualitätsspezialist wird sich zeitnah bei Ihnen melden.

Please describe your request briefly.

Bitte beschreiben Sie Ihr Anliegen kurz.`;
  }

  // ===== MENU =====
  if (text === "menu" || text === "menü") {
    return `Main Menu / Hauptmenü:

1️⃣ Services  
2️⃣ Experience  
3️⃣ Quote  
4️⃣ Contact  
5️⃣ Expert`;
  }

  // ===== CALLBACK =====
  if (
    text.includes("rückruf") ||
    text.includes("call me") ||
    text.includes("rufen sie mich an")
  ) {
    return `📞 Callback Service:

Please send:

- Your Name  
- Company  
- Phone Number  

Bitte senden Sie:

- Ihren Namen  
- Firma  
- Telefonnummer  

We will contact you as soon as possible.

Wir melden uns schnellstmöglich bei Ihnen.`;
  }

  // ===== SPEED / URGENT =====
  if (
    text.includes("wie schnell") ||
    text.includes("how fast") ||
    text.includes("urgent") ||
    text.includes("kurzfristig")
  ) {
    return `We understand urgent quality issues and aim to respond quickly depending on location and project scope.

Wir wissen, dass Qualitätsprobleme oft kurzfristig sind und reagieren schnell je nach Einsatzort und Projektumfang.

👉 Type *3* to send your request immediately.`;
  }

  // ===== LOCATION =====
  if (
    text.includes("lüdenscheid") ||
    text.includes("nrw") ||
    text.includes("germany") ||
    text.includes("deutschland")
  ) {
    return `We support clients in Lüdenscheid, NRW and across Germany depending on project requirements.

Wir unterstützen Kunden in Lüdenscheid, NRW und deutschlandweit je nach Projektanforderung.

👉 Type *3* to request service.`;
  }

  // ===== AUTOMOTIVE =====
  if (
    text.includes("automotive") ||
    text.includes("autoteile")
  ) {
    return `We have strong experience in automotive quality inspection and supplier support.

Wir verfügen über umfangreiche Erfahrung in der Qualitätsprüfung im Automotive-Bereich.

👉 Type *3* to request a quotation.`;
  }

  // ===== REWORK =====
  if (
    text.includes("nacharbeit") ||
    text.includes("sortierung") ||
    text.includes("rework")
  ) {
    return `We provide fast and reliable rework and sorting services directly at your site.

Wir bieten schnelle und zuverlässige Nacharbeit und Sortierung direkt bei Ihnen vor Ort.

👉 Type *3* to request support.`;
  }

  // ===== INSPECTION =====
  if (
    text.includes("prüfung") ||
    text.includes("kontrolle") ||
    text.includes("inspection")
  ) {
    return `We provide professional inspection services including visual inspection, measurement and documentation.

Wir bieten professionelle Qualitätsprüfungen inklusive Sichtprüfung, Messung und Dokumentation.

👉 Type *3* to request a quotation.`;
  }

  // ===== DEFAULT =====
  return `❓ Please describe your request or choose an option from the menu.

Bitte beschreiben Sie Ihr Anliegen oder wählen Sie eine Option aus dem Menü.

👉 Type *menu* to continue.`;
}

module.exports = { generateBotReply };