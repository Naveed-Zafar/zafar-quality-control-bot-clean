function generateBotReply(message) {
  const text = message.toLowerCase().trim();

  // ===== GREETING =====
  if (text === "hello" || text === "hi" || text === "hallo" || text === "start") {
    return `Welcome to Zafar Quality Control 👋
Willkommen bei Zafar Quality Control 👋

We support companies with professional quality inspection, rework and on-site industrial services.

Wir unterstützen Unternehmen mit professioneller Qualitätsprüfung, Nacharbeit und industriellen Vor-Ort-Dienstleistungen.

✔️ Fast response
✔️ Flexible deployment
✔️ Customer-focused solutions

✔️ Schnelle Reaktion
✔️ Flexible Einsätze
✔️ Kundenorientierte Lösungen

Please choose / Bitte wählen:

1️⃣ Services / Dienstleistungen
2️⃣ Experience / Erfahrung
3️⃣ Request a Quote / Angebot
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

✔️ Qualitätsprüfung (Sichtprüfung, Messung, 100%-Kontrolle)
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

✔️ Automotive Industry
✔️ Metal & Plastic Components
✔️ Manufacturing & Production
✔️ Supplier Quality Assurance
✔️ On-site Quality Support

✔️ Automobilindustrie
✔️ Metall- und Kunststoffteile
✔️ Produktion & Fertigung
✔️ Lieferantenqualität
✔️ Qualitätsunterstützung vor Ort

We focus on reliability, precision and fast response times.

Unser Fokus liegt auf Zuverlässigkeit, Präzision und schneller Reaktionszeit.

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
📍 NRW / Germany

📧 Email: your@email.com
📱 WhatsApp: +49XXXXXXXXX

We respond quickly and professionally.

Wir antworten schnell, professionell und zuverlässig.

Type *menu* to return.`;
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

1️⃣ Services / Dienstleistungen
2️⃣ Experience / Erfahrung
3️⃣ Quote / Angebot
4️⃣ Contact / Kontakt
5️⃣ Expert / Mitarbeiter`;
  }

  // ===== WHY US / TRUST =====
  if (
    text.includes("warum sie") ||
    text.includes("why you") ||
    text.includes("why us") ||
    text.includes("warum euch")
  ) {
    return `We support companies with practical quality experience, flexible deployment and reliable on-site support.

Wir unterstützen Unternehmen mit praktischer Qualitätserfahrung, flexiblen Einsätzen und zuverlässiger Vor-Ort-Unterstützung.

Our goal is to solve quality issues quickly and professionally.

Unser Ziel ist es, Qualitätsprobleme schnell und professionell zu lösen.`;
  }

  // ===== LOCATION / ON-SITE =====
  if (
    text.includes("lüdenscheid") ||
    text.includes("nrw") ||
    text.includes("deutschland") ||
    text.includes("germany") ||
    text.includes("vor ort") ||
    text.includes("on-site")
  ) {
    return `We support clients in NRW and other regions depending on project scope and location.

Wir unterstützen Kunden in NRW und je nach Projektumfang auch in anderen Regionen.

Type *3* to send your project request directly.`;
  }

  // ===== SPEED / URGENT =====
  if (
    text.includes("wie schnell") ||
    text.includes("how fast") ||
    text.includes("kurzfristig") ||
    text.includes("urgent") ||
    text.includes("schnell")
  ) {
    return `We understand urgent quality issues and aim to support companies as quickly as possible depending on project scope and location.

Wir wissen, dass Qualitätsprobleme oft kurzfristig gelöst werden müssen und unterstützen Unternehmen je nach Projektumfang und Einsatzort schnellstmöglich.

Type *3* to request support directly.`;
  }

  // ===== CUSTOMER SPEC =====
  if (
    text.includes("kundenvorgaben") ||
    text.includes("customer specification") ||
    text.includes("customer requirements")
  ) {
    return `Yes, we work according to customer specifications, inspection instructions and documented quality requirements.

Ja, wir arbeiten nach Kundenvorgaben, Prüfanweisungen und dokumentierten Qualitätsanforderungen.

Type *3* to discuss your project.`;
  }

  // ===== 100% CONTROL =====
  if (
    text.includes("100%") ||
    text.includes("100 %") ||
    text.includes("100 prozent") ||
    text.includes("100 percent") ||
    text.includes("sichtprüfung") ||
    text.includes("visual")
  ) {
    return `We provide quality inspection according to customer requirements, including visual inspection, dimensional checks and 100% control when required.

Wir führen Qualitätsprüfungen nach Kundenvorgaben durch, einschließlich Sichtprüfung, Maßkontrolle und bei Bedarf 100%-Kontrolle.

Type *3* for a quotation.`;
  }

  // ===== REWORK / SORTING =====
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

  // ===== INCOMING GOODS =====
  if (
    text.includes("wareneingang") ||
    text.includes("incoming goods") ||
    text.includes("goods inspection")
  ) {
    return `We also support incoming goods inspection to identify deviations early and secure your production process.

Wir unterstützen auch bei der Wareneingangsprüfung, um Abweichungen frühzeitig zu erkennen und Ihre Produktion abzusichern.

Type *3* for an inquiry.`;
  }

  // ===== AUTOMOTIVE =====
  if (
    text.includes("automotive") ||
    text.includes("autoteile") ||
    text.includes("lieferant") ||
    text.includes("supplier quality")
  ) {
    return `We have strong experience in automotive-related quality control, supplier support and component inspection.

Wir verfügen über umfangreiche Erfahrung in der Qualitätsprüfung im Automotive-Bereich, in der Lieferantenunterstützung und bei der Bauteilprüfung.

Type *3* to request a quote.`;
  }

  // ===== MEASUREMENT =====
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

  // ===== COMPLAINT / ROOT CAUSE =====
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

  // ===== CAPACITY / SUPPORT =====
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

  // ===== INSPECTION GENERAL =====
  if (
    text.includes("prüfung") ||
    text.includes("kontrolle") ||
    text.includes("inspection")
  ) {
    return `We offer professional quality inspection including visual checks, measurement and documentation.

Wir bieten professionelle Qualitätsprüfungen inklusive Sichtprüfung, Messung und Dokumentation.

Type *3* to request a quotation / Angebot anfragen.`;
  }

  // ===== CALLBACK / CONTACT REQUEST =====
  if (
    text.includes("rückruf") ||
    text.includes("call me") ||
    text.includes("rufen sie mich an") ||
    text.includes("contact me")
  ) {
    return `Please send your name, company and phone number. We will get back to you as soon as possible.

Bitte senden Sie Ihren Namen, Firmennamen und Ihre Telefonnummer. Wir melden uns schnellstmöglich bei Ihnen.`;
  }

  // ===== DEFAULT =====
  return `❓ I didn’t fully understand your request.

Bitte beschreiben Sie Ihr Anliegen genauer oder wählen Sie eine Option.

Please select an option from the menu.

Type *menu* to continue.`;
}

module.exports = { generateBotReply };