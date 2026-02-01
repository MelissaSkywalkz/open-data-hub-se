---
title: DCAT-AP-SE obligatoriska fält
description: Praktisk och mänsklig checklista för obligatoriska metadatafält i DCAT-AP-SE.
author: Open Data Orbit
publishedAt: 2026-01-28
updatedAt: 2026-01-28
status: stable
level: intro
tags:
  - dcat-ap-se
  - metadata
  - öppna data
  - dataportal
---

## Vad är DCAT-AP-SE?

DCAT-AP-SE är den svenska profilen av DCAT och används för att beskriva metadata om öppna data i Sverige.  
Den ligger till grund för hur data publiceras på **Dataportal.se**.

Den här guiden fokuserar på **minsta uppsättning fält som krävs för att publicera data korrekt**, utan att gå in i RDF eller tekniska detaljer.

---

## Viktigt först: Dataset vs Distribution

I DCAT-AP-SE skiljer man på:

- **Dataset**: *Vad* är det för data?
- **Distribution**: *Hur* får man tillgång till datan?

Båda nivåerna har obligatoriska fält.

---

## Minsta obligatoriska fält – Dataset

Ett **Dataset** beskriver själva datamängden.

### Obligatoriskt

- **Titel (`dct:title`)**  
  Vad heter datamängden?

- **Beskrivning (`dct:description`)**  
  Vad innehåller datan och vad kan den användas till?

- **Utgivare / Publisher (`dct:publisher`)**  
  Vilken organisation ansvarar för datan?

- **Kontaktpunkt (`dcat:contactPoint`)**  
  Vem kontaktar man vid frågor? (ofta e-post eller funktionsbrevlåda)

---

## Minsta obligatoriska fälten: Distribution

En **Distribution** beskriver hur datan nås.

### Obligatoriskt (minst ett av följande)

- **Tillgänglighets-URL (`dcat:accessURL`)**  
  En sida eller endpoint där datan kan nås

**eller**

- **Nedladdnings-URL (`dcat:downloadURL`)**  
  Direktlänk till filen

### Rekommenderat (men i praktiken alltid med)

- **Licens (`dct:license`)**  
  T.ex. CC0 eller CC BY

- **Format (`dct:format`)**  
  T.ex. CSV, JSON, GeoJSON

---

## Sammanfattning: absolut minimum

För att publicera öppna data korrekt enligt DCAT-AP-SE behöver du minst:

### Dataset
- Titel  
- Beskrivning  
- Utgivare  
- Kontaktpunkt  

### Distribution
- accessURL eller downloadURL  

(Allt annat förbättrar kvaliteten men är inte absolut krav.)

---

## Exempel (förenklad, mänsklig)

```yaml
Dataset:
  Titel: "Befolkningsstatistik per kommun 2025"
  Beskrivning: "Statistik över folkbokförd befolkning per kommun."
  Utgivare: "Statistiska centralbyrån"
  Kontaktpunkt: "data@scb.se"

Distribution:
  Licens: "CC BY 4.0"
  Format: "CSV"
  Nedladdnings-URL: "https://www.scb.se/data/befolkning-2025.csv"
  ```

## Vanliga misstag

Beskrivningen säger vad men inte varför, kontaktpunkt saknas eller pekar på privatperson, licens saknas eller är oklar, trasig accessURL/downloadURL, och dataset och distribution blandas ihop.

## Nästa steg

- Kontrollera din metadata mot DCAT-AP-SE
- Testa publicering i Dataportal.se
- Läs DIGG:s vägledningar för metadata
- Ställ frågor i communityt

Metadata behöver inte vara perfekt – men den måste vara begriplig.

