function generateBotReply(message) {
  const text = message.toLowerCase().trim();

  // ===== GREETING =====
  if (text === "hello" || text === "hi" || text === "hallo" || text === "start") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

We provide professional quality inspection, rework and industrial support services.

Wir bieten professionelle Qualitätsprüfungen, Nacharbeiten und industrielle Unterstützung.

Please choose / Bitte wählen:

1️⃣ Services / Dienstleistungen  
2️⃣ Experience / Erfahrung  
3️⃣ Request a Quote / Angebot anfragen  
4️⃣ Contact / Kontakt  
5️⃣ Speak to Expert / Mitarbeiter`;
  }

  // ===== SERVICES =====
  if (text === "1") {
    return `🔧 Services / Dienstleistungen:

✔️ Quality Inspection (visual, dimensional, 100% control)  
✔️ Rework & Sorting Services  
✔️ Incoming Goods Inspection  
✔️ Final Inspection  
✔️ Technical Cleaning  
✔️ Assembly of Components  
✔️ Electrical Testing (E-Mobility)

✔️ Qualitätsprüfung (Sichtprüfung, Messung, 100% Kontrolle)  
✔️ Nacharbeit & Sortierarbeiten  
✔️ Wareneingangsprüfung  
✔️ Endkontrolle  
✔️ Technisches Reinigen  
✔️ Montage von Baugruppen  
✔️ Elektrische Prüfungen (E-Mobilität)

We work according to customer specifications and quality standards.

Wir arbeiten nach Kundenvorgaben und Qualitätsstandards.

Type *menu* to return / *menu* für Hauptmenü.`;
  }

  // ===== EXPERIENCE =====
  if (text === "2") {
    return `🏭 Experience / Erfahrung:

We have strong experience in:

✔️ Automotive Industry  
✔️ Metal & Plastic Components  
✔️ Manufacturing & Production  
✔️ Supplier Quality Assurance  

Mit umfangreicher Erfahrung in:

✔️ Automobilindustrie  
✔️ Metall- und Kunststoffteile  
✔️ Produktion & Fertigung  
✔️ Lieferantenqualität  

We support companies on-site with flexible and reliable quality solutions.

Wir unterstützen Unternehmen flexibel vor Ort mit zuverlässigen Qualitätslösungen.

Type *menu* to return.`;
  }

  // ===== QUOTE =====
  if (text === "3") {
    return `📩 Request a Quote / Angebot anfragen:

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

Our team will contact you shortly.

Unser Team wird sich schnellstmöglich bei Ihnen melden.`;
  }

  // ===== CONTACT =====
  if (text === "4") {
    return `📞 Contact / Kontakt:

Zafar Quality Control  
📍 Germany (NRW Region)

📧 Email: your@email.com  
📱 WhatsApp: +49XXXXXXXXX  

We respond quickly and professionally.

Wir antworten schnell und zuverlässig.

Type *menu* to return.`;
  }

  // ===== HUMAN =====
  if (text === "5") {
    return `👨‍💼 Expert Support / Mitarbeiter:

A quality specialist will contact you shortly.

Ein Mitarbeiter wird sich zeitnah bei Ihnen melden.

Please describe your request briefly.

Bitte beschreiben Sie Ihr Anliegen kurz.`;
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

  // ===== SMART KEYWORD RESPONSES =====

  if (
    text.includes("prüfung") ||
    text.includes("kontrolle") ||
    text.includes("inspection")
  ) {
    return `We offer professional quality inspection including visual checks, measurement and documentation.

Wir bieten professionelle Qualitätsprüfungen inkl. Sichtprüfung, Messung und Dokumentation.

Type *3* to request a quotation / Angebot anfragen.`;
  }

  if (
    text.includes("nacharbeit") ||
    text.includes("sortierung") ||
    text.includes("rework")
  ) {
    return `We provide flexible rework and sorting services directly at your site.

Wir bieten flexible Nacharbeit und Sortierarbeiten direkt bei Ihnen vor Ort.

Type *3* for quotation.`;
  }

  if (text.includes("automotive") || text.includes("autoteile")) {
    return `We have strong experience in automotive quality control and supplier support.

Wir verfügen über umfangreiche Erfahrung in der Qualitätsprüfung im Automotive-Bereich.

Type *3* to request a quote.`;
  }

  // ===== DEFAULT =====
  return `❓ I didn’t fully understand your request.

Bitte beschreiben Sie Ihr Anliegen genauer oder wählen Sie eine Option.

Please select an option from the menu.

Type *menu* to continue.`;
}

module.exports = { generateBotReply };