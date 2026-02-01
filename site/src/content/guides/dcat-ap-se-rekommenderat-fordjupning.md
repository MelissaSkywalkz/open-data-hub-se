---
title: DCAT-AP-SE rekommenderat
description: Guide till rekommenderade metadatafält i DCAT-AP-SE för bättre kvalitet, sökarhet och interoperabilitet.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: avancerad
tags:
  - dcat-ap-se
  - metadata
  - fördjupning
  - dataportal
  - interoperabilitet
---

## Introduktion

Du har redan fyllt i de **obligatoriska fälten** (se [DCAT-AP-SE obligatoriska fält](./dcat-ap-se-obligatoriska-falt/)). Men om du vill att din data:
- ska hittas bättre
- ska kunna kombineras med annan data
- ska uppfattas som högkvalitativ
- ska följa Europas standarder

...då behöver du också fylla i **rekommenderade fält**.

**Skillnad:**
- **Obligatoriskt** = måste fylla för att publicera
- **Rekommenderat** = bör fylla för bättre sökarhet och interoperabilitet
- **Valfritt** = kan fylla om det passar din situation

---

## Varför rekommenderade fält spelar roll

Rekommenderade fält ökar:
1. **Sökarhet**: Fler kan hitta din data
2. **Förståelse**: Användare förstår data bättre
3. **Interoperabilitet**: Data kan kombineras med andra dataset
4. **Datakvalitet**: MQA-klassificering ökar
5. **Förtroende**: Fullständig metadata betyder pålitlig datakälla

---

## Rekommenderade fälten: Dataset-nivå

Utöver obligatoriska titel, beskrivning, utgivare och kontaktpunkt:

### **Utgivare (dct:publisher): fördjupning**

**Obligatoriskt:** Ja, men ofta bare organisationsnamn.  
**Rekommenderat:** Länka till en URI eller officiell organisationskod.

**Exempel – svagt:**
```
Utgivare: "Växjö kommun"
```

**Exempel: starkt (rekommenderat):**
```
Utgivare: "http://dataportal.se/organisation/SE2280000176" (URI)
```

**Varför:** URI:er gör det möjligt för automatiserade system att veta *exakt* vilken organisation det är, undviker stavningsfel och möjliggör länkning.

---

### **Tema/Kategori (dcat:theme)**

**Obligatoriskt:** Nej.  
**Rekommenderat**: Ja, mycket viktigt för sökarhet!

**Vad det är:** Klassificering enligt EU:s 15 datateman.

**Exempel:**
```
Tema: 
  - "Regioner och städer"
  - "Transport"
  - "Miljö"
```

**De 15 temana:**
- Jordbruk, fiske, skogsbruk och livsmedel
- Ekonomi och finans
- Energi
- Miljö
- Folkhälsa
- Befolkning och samhälle
- Utbildning, kultur och sport
- Regeringen och den offentliga sektorn
- Internationella frågor
- Rättvisa, rättsliga system och allmän säkerhet
- Regioner och städer
- Teknik, vetenskap
- Transport
- Hälsa
- Väder, klimat, vatten

**Varför:** Användare söker ofta efter tema först. Utan tema blir din data inte hittad.

---

### **Nyckelord (dcat:keyword)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja.

**Vad det är:** Fritt valda sökord som beskriver datamängden.

**Exempel – svagt:**
```
Nyckelord: "data, information"
```

**Exempel: starkt:**
```
Nyckelord: "lediga tomter, fastighet, etablering, kommun, markanvändning"
```

**Tips:**
- Tänk på vad *användare* söker efter, inte vad *du* kallar det internt
- 3–8 nyckelord är ofta rätt
- Använd singular eller plural konsekvent

---

### **Utgåva/Version (dcat:issued)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja.

**Vad det är:** När datamängden **först publicerades** (inte senaste uppdatering).

**Exempel:**
```
Utgåva: "2020-01-15"
```

**Varför:** Användare vill veta hur länge denna dataset har funnits och utvecklats.

---

### **Senaste uppdatering (dcat:modified)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja.

**Vad det är:** När datan **senast uppdaterades**.

**Exempel:**
```
Senaste uppdatering: "2026-02-01"
```

**Varför:** Visar att data är levande och inte föråldrad.

---

### **Uppdateringsfrekvens (dcat:accrualPeriodicity)**

**Obligatoriskt:** Nej.  
**Rekommenderat**: Ja, mycket viktigt!

**Vad det är:** Hur ofta uppdateras datan? Dagligen? Veckovis? Aldrig?

**Exempel:**
```
Uppdateringsfrekvens: "veckovis"
```

**Standard-värden:**
- Dagligen
- Veckovis
- Månatligen
- Kvartalsvis
- År ligen
- Aldrig
- Okänd

**Varför:** Användare behöver veta när de kan förvänta uppdaterad data.

---

### **Geografisk täckning (dct:spatial)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om relevant).

**Vad det är:** Vilken geografisk område täcker datan?

**Exempel:**
```
Geografisk täckning: 
  - "Sverige"
  - "Växjö kommun"
  - "Europa"
```

**Varför:** Lokala datakällor är ofta bara relevanta för vissa regioner.

---

### **Tidsmässig täckning (dct:temporal)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om relevant).

**Vad det är:** Vilken tidsperiod täcker datan?

**Exempel:**
```
Tidsperiod: 2015-01-01 till idag
```

**Varför:** Tidshistoriska data kräver denna information.

---

### **Språk (dct:language)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (särskilt om inte svenska).

**Vad det är:** Vilka språk är datan dokumenterad i?

**Exempel:**
```
Språk: svenska, engelska
```

---

## Rekommenderade fälten: Distribution-nivå

Utöver obligatoriska accessURL/downloadURL, licens och format:

### **Byte-storlek (dcat:byteSize)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om fil).

**Vad det är:** Filens storlek i bytes.

**Exempel:**
```
Storlek: 5242880 (5 MB)
```

**Varför:** Utvecklare behöver veta om de kan ladda ned filen på mobilnätverket.

---

### **Checksum (spdx:checksum)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (för stora kritiska datamängder).

**Vad det är:** En hashkod för att verifiera att filen inte är korrumperad.

**Exempel:**
```
Checksum: SHA256:abc123def456...
```

**Varför:** Säkerhet och dataintegritet.

---

### **Kompression (dcat:compressFormat)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om filen är komprimerad).

**Vad det är:** Kompressionsformat (ZIP, GZIP, RAR, etc.).

**Exempel:**
```
Kompression: "application/gzip"
```

---

### **Mediatyp (dcat:mediaType)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om inte redan i "Format").

**Vad det är:** MIME-typ för filen.

**Exempel:**
```
Mediatyp: "text/csv"
```

---

## Rekommenderade fälten: Dataomfattning

Inom DCAT-AP-SE kan du också publicera metadataom **vad** datan innehåller:

### **Kolumner och fältbeskrivningar (dcat:DataService eller dsds:Struktur)**

**Obligatoriskt:** Nej.  
**Rekommenderat**: Ja, mycket värdefull!

**Vad det är:** En beskrivning av vad varje kolumn/fält innehåller.

**Exempel:**
```
Fält: "personid"  
Beskrivning: "Unik identifierare för person (anonym)"  
Datatyp: "string"  

Fält: "ålder"  
Beskrivning: "Ålder i år"  
Datatyp: "integer"  
```

**Varför:** Utan detta måste användare gissa sig fram.

---

### **Antal rader/poster (dcat:landingPage eller custom)**

**Obligatoriskt:** Nej.  
**Rekommenderat:** Ja (om relevant).

**Vad det är:** Ungefär hur många poster innehåller datan?

**Exempel:**
```
"Ungefär 500,000 poster"
```

---

## Praktisk strategi för att lägga till rekommenderade fält

Du behöver inte göra allt på en gång. Här är en realistisk tidsplan:

### **Vecka 1: Snabbvins (30 min per dataset)**
- [ ] Lägg till Tema/Kategori
- [ ] Lägg till 5–7 nyckelord
- [ ] Lägg till Uppdateringsfrekvens

**Effekt:** Sökarhet dubbleras.

### **Vecka 2: Nästa steg (1 timme per dataset)**
- [ ] Lägg till Utgåva (first published)
- [ ] Lägg till Geografisk täckning (om relevant)
- [ ] Lägg till Tidsmässig täckning (om relevant)

**Effekt:** Användare förstår omfånget bättre.

### **Vecka 3+ : Djupare (2–4 timmar per dataset)**
- [ ] Dokumentera kolumner och fältbeskrivningar
- [ ] Lägg till Byte-storlek
- [ ] Organisera som URI (inte bara namn)

**Effekt:** Professionell datakälla; möjliggör AI och automatisering.

---

## Hur du fyller i rekommenderade fält i praktiken

**I Entryscape:**
1. Gå till ditt Dataset
2. Under "Rekommenderade fält" (eller "Recommended fields")
3. Fyll i vad som passar
4. Spara och publicera

**Tänk på:**
- Inte alla fält är relevanta för alla dataset
- Börja med de som faktiskt behövs
- Lämna andra tomma. Det är OK.

---

## Vanliga misstag

**"Jag måste fylla allt"**  
Nej. Fylla i relevanta rekommenderade fält, inte alla.

**"Tema är för begränsande"**  
Det finns 15 teman och du kan välja flera. Oftast finns det ett som passar.

**"Nyckelord är bara spam"**  
Dåliga nyckelord är spam. Bra nyckelord är ofta värdifullare än titeln.

**"Uppdateringsfrekvens är för vag"**  
Även "okänd" eller "aldrig" är bättre än att utelämna det helt.

---

## Koppling till MQA: varför detta spelar roll

Enligt **MQA (Maturity of Data Catalogues)** ökar din klassificering när du fyller i rekommenderade fält:

- **Nivå 1 (Börjar):** Bara obligatoriska fält
- **Nivå 2 (Välanvänd):** Obligatoriska + några rekommenderade (tema, nyckelord)
- **Nivå 3 (Interoperabel):** Obligatoriska + de flesta rekommenderade
- **Nivå 4 (Mogen):** Allt rekommenderat + strukturerade kolumner + versioner + RDF

**Målsättning:** De flesta organisationer bör sträva mot Nivå 2–3.

---

## Nästa steg

**Vill du höja din datakvalitet overallt?**  
Se guiden [Datakvalitet & MQA](./datakvalitet-och-mqa/).

**Vill du förstå obligatoriska fält först?**  
Gå tillbaka till [DCAT-AP-SE obligatoriska fält](./dcat-ap-se-obligatoriska-falt/).

**Vill du se goda exempel?**  
Kolla dataportal.se "Goda exempel" och inspektera deras metadata:  
👉 https://dataportal.se/goda-exempel

**Sitter du fast?**  
Ställ frågor i communityt. Många kämpar med samma frågor:  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions

---

## Resurser

- **DCAT-AP-SE specifikation:** https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/ (se "Specifikationer")
- **European Data Portal MQA:** https://data.europa.eu/sv/
- **Entryscape dokumentation:** Din organisation bör ha lokal dokumentation

---

**Har du förbättrat metadata för ditt dataset? Dela din historia eller tips för att motivera andra!**  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions
