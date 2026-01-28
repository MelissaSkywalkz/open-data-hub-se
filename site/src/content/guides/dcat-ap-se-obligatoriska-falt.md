---
title: DCAT-AP-SE – minsta obligatoriska fält (för människor)
description: Praktisk checklista för metadatafält i DCAT-AP-SE.
author: Open Data Hub
publishedAt: 2026-01-28
tags: [dcat-ap-se, metadata, öppna data]
---

# DCAT-AP-SE – minsta obligatoriska fält (för människor)

DCAT-AP-SE är standarden för metadata om öppna data i Sverige. Här är en praktisk checklista för dig som vill publicera data korrekt.

## Minsta obligatoriska fält
- **Titel** – Vad heter datamängden?
- **Beskrivning** – Vad innehåller datan?
- **Kontakt** – Vem kan svara på frågor?
- **Licens** – Hur får datan användas?
- **Format** – Vilka filtyper finns?
- **Organisation** – Vem publicerar?
- **Tillgänglighets-URL** – Var kan man ladda ner?

> **Tips!**
> Skriv beskrivningen så att en nybörjare förstår vad datan innehåller och varför den är intressant.

## Exempel
```yaml
Titel: "Befolkningsstatistik 2025"
Beskrivning: "Statistik över Sveriges befolkning per kommun."
Kontakt: "data@myndighet.se"
Licens: "CC0"
Format: "CSV, JSON"
Organisation: "Statistiska Centralbyrån"
Tillgänglighets-URL: "https://scb.se/data/befolkning-2025.csv"
```

## Vanliga misstag
- Otydlig beskrivning
- Saknar kontakt eller licens
- Fel format eller trasig URL

## Nästa steg
- Testa att fylla i metadata för en egen datamängd
- Läs mer om DCAT-AP-SE på [dataportal.se](https://www.dataportal.se/dcat-ap-se)
- Fråga om metadata i [forumet](https://github.com/MelissaSkywalkz/open-data-hub-se/discussions)
