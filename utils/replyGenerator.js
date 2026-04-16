function generateBotReply(message) {
  const text = message.toLowerCase().trim();

  // ===== GREETING =====
  if (text === "hello" || text === "hi" || text === "hallo" || text === "start") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

We provide professional quality inspection, rework and industrial support services for manufacturing companies.

Wir bieten professionelle Qualitätsprüfungen, Nacharbeiten und industrielle Unterstützung für Fertigungsunternehmen.

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

We have practical experience in:

✔️ Automotive Industry  
✔️ Metal & Plastic Components  
✔️ Manufacturing & Production  
✔️ Supplier Quality Assurance  
✔️ On-site Quality Support

Wir verfügen über praktische Erfahrung in:

✔️ Automobilindustrie  
✔️ Metall- und Kunststoffteilen  
✔️ Produktion & Fertigung  
✔️ Lieferantenqualität  
✔️ Qualitätsunterstützung vor Ort

We support companies with reliable, flexible and customer-focused quality solutions.

Wir unterstützen Unternehmen mit zuverlässigen, flexiblen und kundenorientierten Qualitätslösungen.

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
  if (text === "menu" || text === "menü") {
    return `Main Menu / Hauptmenü:

1️⃣ Services / Dienstleistungen  
2️⃣ Experience / Erfahrung  
3️⃣ Quote / Angebot  
4️⃣ Contact / Kontakt  
5️⃣ Expert / Mitarbeiter`;
  }

  // ===== TRUST / BUSINESS ANSWERS =====

  if (
    text.includes("wie schnell") ||
    text.includes("how fast") ||
    text.includes("kurzfristig") ||
    text.includes("urgent")
  ) {
    return `We understand urgent quality issues and aim to support companies as quickly as possible, depending on project scope and location.

Wir wissen, dass Qualitätsprobleme oft kurzfristig gelöst werden müssen, und unterstützen Unternehmen je nach Projektumfang und Einsatzort schnellstmöglich.

Type *3* to send your request directly.`;
  }

  if (
    text.includes("deutschlandweit") ||
    text.includes("germany") ||
    text.includes("deutschland") ||
    text.includes("on-site")
  ) {
    return `We support industrial clients on-site and can work flexibly depending on location and project requirements.

Wir unterstützen Industriekunden vor Ort und arbeiten flexibel je nach Einsatzort und Projektanforderung.

Type *3* to request support.`;
  }

  if (
    text.includes("100%") ||
    text.includes("100 %") ||
    text.includes("sichtprüfung") ||
    text.includes("visual")
  ) {
    return `We provide quality inspection according to customer requirements, including visual inspection, dimensional checks and 100% control when required.

Wir führen Qualitätsprüfungen nach Kundenvorgaben durch, einschließlich Sichtprüfung, Maßkontrolle und bei Bedarf 100%-Kontrolle.

Type *3* for a quotation.`;
  }

  if (
    text.includes("kundenvorgaben") ||
    text.includes("customer specification") ||
    text.includes("customer requirements")
  ) {
    return `Yes, we work according to customer specifications, inspection instructions and documented quality requirements.

Ja, wir arbeiten nach Kundenvorgaben, Prüfanweisungen und dokumentierten Qualitätsanforderungen.

Type *3* to discuss your project.`;
  }

  if (
    text.includes("nacharbeit") ||
    text.includes("sortierung") ||
    text.includes("rework") ||
    text.includes("sorting")
  ) {
    return `We provide reliable rework and sorting services for components, assemblies and production-related quality issues.

Wir übernehmen zuverlässige Nacharbeit und Sortierarbeiten für Bauteile, Baugruppen und produktionsbezogene Qualitätsprobleme.

Type *3* to request support.`;
  }

  if (
    text.includes("wareneingang") ||
    text.includes("incoming goods") ||
    text.includes("goods inspection")
  ) {
    return `We also support incoming goods inspection to identify deviations early and secure your production process.

Wir unterstützen auch bei der Wareneingangsprüfung, um Abweichungen frühzeitig zu erkennen und Ihre Produktion abzusichern.

Type *3* for an inquiry.`;
  }

  if (
    text.includes("automotive") ||
    text.includes("autoteile") ||
    text.includes("supplier quality") ||
    text.includes("lieferant")
  ) {
    return `We have strong experience in automotive-related quality control, supplier support and component inspection.

Wir verfügen über umfangreiche Erfahrung in der Qualitätsprüfung im Automotive-Bereich, in der Lieferantenunterstützung und bei der Bauteilprüfung.

Type *3* to request a quote.`;
  }

  if (
    text.includes("messtechnik") ||
    text.includes("measurement") ||
    text.includes("kmg") ||
    text.includes("3d")
  ) {
    return `We support quality inspection tasks including measurement-related checks and structured documentation according to project requirements.

Wir unterstützen Qualitätsprüfungen auch im Bereich messtechnischer Kontrollen und strukturierter Dokumentation je nach Projektanforderung.

Type *3* to discuss your inspection requirements.`;
  }

  if (
    text.includes("reklamation") ||
    text.includes("complaint") ||
    text.includes("fehleranalyse") ||
    text.includes("root cause")
  ) {
    return `We support quality-related problem cases with structured inspection, documentation and issue-oriented quality support.

Wir unterstützen qualitätsrelevante Problemfälle mit strukturierter Prüfung, Dokumentation und lösungsorientierter Qualitätsunterstützung.

Type *3* if you need immediate support.`;
  }

  if (
    text.includes("kapazität") ||
    text.includes("personal") ||
    text.includes("team") ||
    text.includes("engpass")
  ) {
    return `We support companies flexibly in case of workload peaks, quality bottlenecks and temporary support requirements.

Wir unterstützen Unternehmen flexibel bei Auftragsspitzen, Qualitätsengpässen und vorübergehendem Unterstützungsbedarf.

Type *3* to send your request.`;
  }

  if (
    text.includes("prüfung") ||
    text.includes("kontrolle") ||
    text.includes("inspection")
  ) {
    return `We offer professional quality inspection including visual checks, measurement and documentation.

Wir bieten professionelle Qualitätsprüfungen inkl. Sichtprüfung, Messung und Dokumentation.

Type *3* to request a quotation / Angebot anfragen.`;
  }

  // ===== DEFAULT =====
  return `❓ I didn’t fully understand your request.

Bitte beschreiben Sie Ihr Anliegen genauer oder wählen Sie eine Option.

Please select an option from the menu.

Type *menu* to continue.`;
}

module.exports = { generateBotReply };