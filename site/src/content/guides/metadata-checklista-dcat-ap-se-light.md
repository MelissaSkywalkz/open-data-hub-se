---
title: Metadata-checklista
description: Praktisk checklista för att säkerställa grundläggande och korrekt metadata enligt DCAT-AP-SE.
author: Open Data Orbit
publishedAt: 2026-01-28
updatedAt: 2026-01-28
status: stable
level: intro
tags:
  - metadata
  - dcat-ap-se
  - checklista
  - dataportal
---

## Vad är denna checklista?

Den här checklistan hjälper dig att snabbt kontrollera att din datamängd har **tillräcklig och korrekt metadata** enligt DCAT-AP-SE.

Den är avsedd som en *light-version*:
- inget RDF
- inga tekniska detaljer
- fokus på begriplighet och publicerbarhet

---

## Dataset – grundläggande metadata

**Identifierare & titel:** Säkerställ att du har en unik identifierare (t.ex. URL eller intern identifierare) och en tydlig titel som går att förstå utanför organisationen.

**Beskrivning:** Skapa en kort och begriplig beskrivning som förklarar vad datan innehåller och varför datan är relevant.

**Utgivare & kontakt:** Ange organisationens namn och en kontaktpunkt (funktionsbrevlåda eller generell e-post).

---

## Distribution – åtkomst till data

**Licens:** Ange licens (t.ex. CC0 eller CC BY) med länk till licenstext eller tydlig licensreferens.

**Åtkomst:** Säkerställ att accessURL eller downloadURL finns, och att länken fungerar och leder till rätt resurs.

**Format:** Ange filformat (t.ex. CSV, JSON, GeoJSON) och verifiera att det stämmer överens med faktisk fil.

---

## Uppdatering & status

Kontrollera datum för senaste uppdatering, information om hur ofta datan uppdateras (om tillämpligt), och status eller versionsinformation (om relevant).

---

## Vanliga fel

Saknade kontaktpunkt eller licens, titel eller beskrivning som är intern eller otydlig, dataset som saknar Distribution, trasig accessURL/downloadURL, och metadata som inte uppdateras när datan ändras.

---

## Tips

Skriv metadata för människor först, maskiner sen. Testa att någon utanför din organisation förstår vad datan är, hur den kan användas. Kontrollera alltid hur det ser ut på dataportal.se. Fråga i communityt om du är osäker.

Metadata behöver inte vara perfekt – men den måste vara begriplig.