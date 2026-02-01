---
title: Datakvalitet och MQA
description: Guide till att förstå och förbättra datakvalitet enligt maturity och MQA-principerna.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: medel
tags:
  - datakvalitet
  - mqa
  - metadata
---

## Vad är datakvalitet?

Datakvalitet är inte svart eller vitt. Det finns många dimensioner: **Riktighet** (stämmer värdena?), **Fullständighet** (saknas kolumner, rader eller uppdateringar?), **Aktualitet** (hur ny är datan?), **Konsistens** (är formatet och strukturen stabil över tid?) och **Tillgänglighet** (kan användare faktiskt nå och förstå datan?).

Mycket högt fokus på datakvalitet kan bli kontraproduktiv och slösa resurser. **Bättre att publicera "80%-datamängd" som faktiskt är brukbar än en "perfekt" som aldrig publiceras.**

---

## MQA: Maturity of Data Catalogues

**MQA (Maturity of Data Catalogues)** är en ramverk från European Data Portal för att bedöma och förbättra kvaliteten på datakatalogernas metadata, inte själva datan.

MQA fokuserar på fyra områden: **Findability** (kan man hitta datan?), **Accessibility** (kan man nå och förstå datan?), **Interoperability** (kan datan kombineras med annan data?) och **Reusability** (kan man faktiskt använda datan för sitt syfte?).

---

## Praktisk tillämpning: fyra nivåer

MQA rangordnar datakatalogner (som dataportal.se) i fyra mognadsnivåer. Även enskilda datamängder kan bedömas på samma sätt:

### Nivå 1: **Börjar**

- Datamängder finns, men metadata är minimal
- Oftast bara titel, ingen beskrivning
- Ingen licens eller kontaktuppgift
- **Exempel:** "data_v2.csv" med tom beskrivning

**Riskfaktorer:** Användare förstår inte vad datan är eller får inte svara på frågor.

**Steg för att förbättra:**
- Lägg till beskrivning (vad? varför? hur ofta?)
- Lägg till licens
- Lägg till kontaktuppgift

---

### Nivå 2: **Välanvänd**

- Metadata är fylld enligt standard (DCAT-AP-SE obligatoriska fält)
- Titel, beskrivning, licens, kontaktuppgift finns
- Format är angett
- **Exempel:** CSV-fil med titel "Lediga tomter" + beskrivning

**Vad detta möjliggör:**
- Användare kan hitta och förstå datan
- Data kan sökas på dataportal.se
- Licensvillkoren är klara

**Steg för att förbättra:**
- Lägg till nyckelord och tema
- Dokumentera kolumner/fält
- Lägg till exempel på användning

---

### Nivå 3: **Interoperabel**

- Metadata inkluderar rekommenderade DCAT-AP-SE-fält
- Data följer gemensamma vokabulärer (begrepp)
- Format är maskinläsbart (CSV, JSON, XML)
- Uppdateringsfrekvens är tydlig
- **Exempel:** Samma "tomt" definieras likadant som i andra datamängder

**Vad detta möjliggör:**
- Data kan kombineras med annan data från andra organisationer
- Automatiserade processer kan använda datan
- Återanvänding ökar dramatiskt

**Steg för att förbättra:**
- Definiera och publicera egna vokabulärer (begrepp)
- Använd URI:er för identifiering (inte bara textnamn)
- Mappa dina fält till gemensamma standarder

---

### Nivå 4: **Mogen**

- Alla rekommenderade DCAT-AP-SE-fält är ifyllda
- Data är RDF/linked data-formaterad
- Versionshistorik är tydlig
- Validering sker automatiskt
- **Exempel:** Dataset kan sökas, länkas och kombineras helt automatiskt med andra europeiska datakatalogner

**Vad detta möjliggör:**
- Fullt interoperabel med EU:s datakatalog
- Högsta grad av återanvänding
- Automatiserade dataflöden över organisationsgränser

**Krav:** Mer resurser, specialistkompetens, långsiktig investering.

---

## Praktisk framstegsvägledning för din organisation

### Steg 1: Identifiera nuläge

Kolla några av dina datamängder på dataportal.se:

- Kan någon utanför organisationen förstå vad datan är?
- Är licensen tydlig?
- Fungerar länkarna?

**Om ja:** Du är på nivå 1–2.  
**Om nej:** Du är på nivå 1.

### Steg 2: Sätt små, realistiska mål

*Välj en datamängd*, gärna din mest använd eller viktigaste, och förbättra den.

**Målsättning för denna datamängd:**
- Obligatoriska fält (nivå 2): 1–2 veckor
- Nyckelord + tema (nivå 2): 1 vecka
- Dokumentation (nivå 3): 1–2 veckor

**Totalförbrukad tid:** 3–5 veckor per datamängd. Gör detta för 2–3 datamängder per år.

### Steg 3: Lär från andras goda exempel

Dataportal.se visar "Goda exempel". Se hur andra organisationer beskriver sin data:

👉 https://dataportal.se/goda-exempel

**Vad ska du leta efter?**
- Hur är titel och beskrivning skrivna?
- Vilka nyckelord använder de?
- Vilka fält fylls i?
- Hur beskriver de uppdateringsfrekvens?

### Steg 4: Etablera routine

Datakvalitet är inte en engångsuppgift. **Gör det till rutinen:**

- **Varje gång du uppdaterar data:** Uppdatera även metadata
- **Varje kvartal:** Gå igenom ett par datamängder och förbättra
- **Varje år:** Övergripande granskning

---

## Specifika mått för datakvalitet

Du kan mäta och spåra dessa dimensioner över tid:

### Metadata-täckning (%)

Hur stor andel av dina datamängder har:
- Titel? (bör vara 100%)
- Beskrivning? (bör sträva mot 100%)
- Licens? (bör sträva mot 100%)
- Kontaktuppgift? (bör sträva mot 100%)
- Nyckelord? (bör sträva mot 80%+)

**Target:** Inte att alla är perfekta, utan att andelen förbättras över tid.

### Länkfunktionalitet

- Hur många accessURL:er fungerar? (bör vara 100%)
- Hur många downloadURL:er fungerar? (bör vara 100%)

**Mätning**: Automatiserad crawl varje vecka. Några brutna länkar är normalt, men alla bör återställas inom dagen.

### Aktualitet

- Vilken % av datamängderna är uppdaterade enligt schema?
- Hur många är äldre än sitt angivet uppdateringsschema?

**Target:** 95%+ följer sitt schema. Några kan ha fördröjningar.

---

## Vanliga fallgropar

**"Vi måste göra allt perfekt före publicering"**  
Resultatet: Inget publiceras. Börja med nivå 2, förbättra senare.

**"Datakvalitet är IT:s ansvar"**  
Datakvalitet är en *organisatorisk* fråga. Kräver resurser, beslut och prioritering.

**"Vi publicerar data för att det är lag, inte för att någon använder det"**  
Om ingen använder datan: varför publicera? Fokusera på datamängder med faktisk användning.

**"Metadata är inte viktig, bara datan spelar roll"**  
Utan metadata är datan ofta värdelös. En användare spenderar 80% av tiden på att förstå vad datan är, 20% på att använda den.

---

## De viktigaste åtgärderna för att förbättra datakvalitet

Om du har begränsade resurser, fokusera på detta, i ordning:

1. **Lägg till beskrivningar**: har störst påverkan på sökarhet och förståelse.
2. **Lägg till licens**: ger juridisk klarhet, och krävs för publicering.
3. **Lägg till kontaktuppgift**: användare kan få hjälp när något är oklart.
4. **Lägg till nyckelord**: gör datan lättare att söka på dataportal.se.
5. **Testa länkarna**: två minuter per vecka sparar frustrationer senare.

Dessa fem åtgärder tar ~10 timmar per datamängd och dubblerar dess användbarhet.

---

## Nästa steg

**Vill du förstå DCAT-AP-SE bättre?**  
Se [DCAT-AP-SE obligatoriska fält](./dcat-ap-se-obligatoriska-falt/) och [Metadata-checklista](./metadata-checklista-dcat-ap-se-light/).

**Vill du publicera data?**  
Läs [Att publicera data: steg för steg](./att-publicera-data-steg-for-steg/).

**Vill du lära mer om MQA?**  
Kolla European Data Portal: https://data.europa.eu/sv/dashboard  
DIGG:s vägledning: https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/

**Sitter du fast med din organisations datakvalitet?**  
Ställ frågor i communityt. Detta är en utmaning för många:  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions

---

**Datakvalitet är en process, inte ett tillstånd. Små steg över tid slår stora engångssatsningar varje gång.**
