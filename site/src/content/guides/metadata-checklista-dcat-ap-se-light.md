---
title: Metadata-checklista (DCAT-AP-SE light)
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

### Identifierare & titel
- [ ] **Unik identifierare** (t.ex. URL eller intern identifierare)
- [ ] **Tydlig titel** som går att förstå utanför organisationen

---

### Beskrivning
- [ ] **Kort och begriplig beskrivning**
- [ ] Förklarar *vad* datan innehåller
- [ ] Förklarar *varför* datan är relevant

---

### Utgivare & kontakt
- [ ] **Utgivare (organisationens namn)**
- [ ] **Kontaktpunkt** (funktionsbrevlåda eller generell e-post)

---

## Distribution – åtkomst till data

### Licens
- [ ] **Licens angiven** (t.ex. CC0 eller CC BY)
- [ ] Länk till licenstext eller tydlig licensreferens

---

### Åtkomst
- [ ] **accessURL eller downloadURL finns**
- [ ] Länken fungerar och leder till rätt resurs

---

### Format
- [ ] Filformat angivet (t.ex. CSV, JSON, GeoJSON)
- [ ] Formatet stämmer överens med faktisk fil

---

## Uppdatering & status

- [ ] Datum för senaste uppdatering
- [ ] Information om hur ofta datan uppdateras (om tillämpligt)
- [ ] Status eller versionsinformation (om relevant)

---

## Vanliga fel

- Saknar kontaktpunkt eller licens
- Titel eller beskrivning är intern eller otydlig
- Dataset saknar Distribution
- Trasig accessURL / downloadURL
- Metadata uppdateras inte när datan ändras

---

## Tips

- Skriv metadata för **människor först**, maskiner sen
- Testa att någon utanför din organisation förstår:
  - vad datan är
  - hur den kan användas
- Kontrollera alltid hur det ser ut på dataportal.se
- Fråga i communityt om du är osäker

Metadata behöver inte vara perfekt – men den måste vara begriplig.