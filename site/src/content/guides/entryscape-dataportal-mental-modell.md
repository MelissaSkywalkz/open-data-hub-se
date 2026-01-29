---
title: Entryscape och dataportal.se – mental modell och vanliga fallgropar
description: Praktisk guide till hur Entryscape och dataportal.se hänger ihop, och vanliga misstag vid publicering av öppna data.
author: Open Data Orbit
publishedAt: 2026-01-28
updatedAt: 2026-01-28
status: stable
level: intro
tags:
  - entryscape
  - dataportal
  - metadata
  - dcat-ap-se
---

## Översikt

Entryscape och dataportal.se används ofta tillsammans, men fyller **helt olika roller**.  
Många problem med öppna data i Sverige beror på att man inte riktigt förstår *var* något sker – och *varför*.

Den här guiden förklarar den mentala modellen bakom flödet, samt vanliga fallgropar.

---

## Roller och ansvar

### Entryscape
Entryscape är ett **verktyg för metadatahantering**.

Det används av organisationer för att:
- Skapa och redigera dataset och distributioner
- Strukturera metadata enligt DCAT-AP-SE
- Publicera metadata till externa konsumenter (t.ex. dataportal.se)

Entryscape är **inte** en publik dataportal i sig, utan ett publiceringsverktyg.

---

### Dataportal.se
Dataportal.se är Sveriges **nationella sök- och upptäcktsportal** för öppna data.

Den:
- Samlar in metadata från Entryscape och andra källor
- Visar metadata – inte själva datan
- Validerar metadata mot DCAT-AP-SE i varierande grad

Dataportal.se **skapar eller rättar inte metadata åt dig**.

---

## Hur hänger det ihop? (mental modell)

```text
Organisation
   ↓
Entryscape (metadata skapas & publiceras)
   ↓
Dataportal.se (metadata indexeras & visas)
   ↓
Användare hittar datan och går vidare till källan
```

### Viktigt att förstå

- Dataportal.se äger inte metadata
- Dataportal.se pekar vidare till data hos utgivaren
- Kvaliteten på det som visas beror helt på vad som publicerats

---

## Vanligt arbetsflöde

1. Skapa ett Dataset i Entryscape
2. Fyll i metadata enligt DCAT-AP-SE
3. Lägg till minst en Distribution
4. Säkerställ att obligatoriska fält är ifyllda
5. Publicera metadata
6. Vänta på att dataportal.se ska hämta och indexera

> **Obs:**  
> Det kan finnas fördröjning (cache) innan ändringar syns på dataportal.se.

---

## Vanliga fallgropar

### Metadata syns inte på dataportal.se

**Vanliga orsaker:**
- Obligatoriska fält saknas
- Dataset saknar Distribution
- Dataset är inte publicerat
- Metadata är tekniskt korrekt men semantiskt bristfällig

---

### “Dataportal.se borde fixa detta”

Dataportal.se:
- ändrar inte din metadata
- gissar inte värden
- kompletterar inte saknade fält

**Ansvar ligger alltid hos utgivaren.**

---

### Dataset och Distribution blandas ihop

**Vanligt misstag:**
- Lägger licens eller format på Dataset istället för Distribution
- Tror att URL räcker utan Distribution

Det leder ofta till att metadata inte validerar korrekt.

---

## Vanliga misstag i praktiken

- Otydliga eller interna titlar
- Beskrivningar som saknar kontext
- Kontaktpunkt som pekar på privatperson
- Trasiga accessURL eller downloadURL
- Metadata uppdateras inte när datan ändras

---

## Tips för smidigare publicering

- Tänk på metadata som en produkt, inte ett formulär
- Skriv för människor, inte bara maskiner
- Kontrollera alltid hur det faktiskt ser ut på dataportal.se
- Testa ändringar i liten skala först

---

## Nästa steg

- Läs guiden om DCAT-AP-SE obligatoriska fält
- Fördjupa dig i rekommenderade metadatafält
- Utforska Entryscapes dokumentation och demo
- Ställ frågor i communityt när något är oklart

Att förstå flödet sparar tid, frustration och supportärenden.