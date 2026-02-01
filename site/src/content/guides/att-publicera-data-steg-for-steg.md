---
title: Att publicera data
description: Praktisk guide för hur du publicerar öppna data från tanke till publicering på dataportal.se.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: medel
tags:
  - publicera
  - entryscape
  - metadata
  - dataportal
  - dcat-ap-se
---

## Innan du börjar

Att publicera öppna data är en process, inte bara ett teknikproblem. Före du öppnar Entryscape bör du förstå:

1. **Vilken data äger du?**  
   Bara data du äger eller har rätt att publicera.

2. **Är datan mogen?**  
   Data som är slumpmässig eller ännu under utveckling kan skada förtroende för öppna data. Vänta till den är stabil.

3. **Har du en licens?**  
   Oftast CC0 (ingen villkor) eller CC BY (nämn källan). Decide innan du börjar.

4. **Vem behöver veta om denna data?**  
   Planera för dina faktiska användare, inte en imaginär publik.

---

## Steg 1: Planera dina datamängder

En "datamängd" (dataset) är inte samma som "en fil". Det kan innehålla flera filer, formats och uppdateringsfrekvenser.

**Exempel:**  
En kommun har data om:
- Lediga tomter (CSV, uppdaterad varje vecka)
- En karta (GeoJSON, uppdaterad dagligen)
- Dokumentation (PDF)

Det är *en* datamängd med flera "distributioner" (formats).

**Viktigt:**  
Planera små, fokuserade datamängder. En "allt"-datamängd blir svår att underhålla och förstå.

### Checklista före publicering

Tänk på dina slutanvändare (kommunala IT-chefer? dataentusiaster? forskare?), användningsfallet (transparens? innovation? compliance?), vilka format du behöver (CSV för analys? GeoJSON för kartor? API?), hur ofta datan uppdateras (varje timme? varje månad? aldrig igen?) och vilken licens som passar (CC0 = fri användning, CC BY = kräv att man nämner dig).

---

## Steg 2: Förbered din data

Innan du publicerar är det dags att säkerställa att datan är i ordning.

### Datatvätt (grundläggande)

Töm kolumner och feltyper. Om du har "dödsdag" eller personnummer kan det inte publiceras, så radera eller anonymisera. Säkerställ att svenska tecken (å, ä, ö) är rätt kodade (UTF-8, inte latin1). Bestäm hur du representerar saknade värden (tomt fält, "NULL" eller "-") och var konsekvent. Datum och tid ska vara ISO 8601-format: `2026-02-01` eller `2026-02-01T14:30:00Z`, inte "2 feb 2026" eller "02/02/26".

### Dokumentation skapa

Skapa en kort README eller dokumentationsfil (TXT eller PDF) som innehåller:
- Vad innehåller datan?
- Vilka kolumner/fält finns och vad betyder de?
- Några exempel på hur datan kan användas.
- Bekräftelse på dataägarskap och licens.

---

## Steg 3: Sätt upp metadata

Metadata är *informationen om datan*, och det är nästan viktigare än datan själv.

Du kommer att fylla i denna information i **Entryscape** eller ett annat metadatahanteringssystem som din organisation använder.

### De viktigaste fälten: Dataset-nivå

| Fält | Exempel | Varför? |
|------|---------|--------|
| **Titel** | "Lediga kommunala tomter i Växjö" | Måste förstås även av outsiders |
| **Beskrivning** | "Lista över lediga tomter i Växjö kommun tillgängliga för etablering av nya företag. Uppdateras veckovis." | Säger *vad*, *varför*, och *hur ofta* |
| **Utgivare** | "Växjö kommun" | Vem ansvarar för datan? |
| **Kontaktpunkt** | "oppen-data@vaxjo.se" | Vem ringer man om något är fel? |
| **Tema/kategori** | "Regioner och städer" | Gör den sökbar efter ämne |
| **Nyckelord** | "tomter, etablering, företag, bostäder" | Fler sökvägar till datan |

### De viktigaste fälten: Distribution-nivå

(För varje fil/format du erbjuder)

| Fält | Exempel | Varför? |
|------|---------|--------|
| **Namn** | "Lediga tomter som CSV" | Gör den sökbar |
| **Format** | "CSV" | Säger vad det är |
| **Licens** | "CC0" | Säger vad man får göra med det |
| **Åtkomst-URL** | "https://vaxjo.se/data/tomter.csv" | Länk till själva filen |
| **Uppdateringsdatum** | "2026-02-01" | När publicerades denna version? |

**Golden Rule:**  
Skriv metadata för *människor*, inte maskiner. Om en utvecklare utanför din organisation inte förstår vad datan är, betyder det att metadata behöver förbättras.

---

## Steg 4: Publicera i Entryscape

Entryscape är det verktyg som många svenska organisationer använder för att hantera och publicera metadata till dataportal.se.

### Inloggning

Din organisation bör ge dig en Entryscape-instans. Om du inte har en, kontakta din IT-avdelning.

Adressen ser ut ungefär så här:  
`https://din-organisering.entryscape.com`

### Skapa ett Dataset

1. **Gå till "Datasets"** och klicka "+ New"
2. **Fyll i grundläggande information:**
   - Titel (obligatoriskt)
   - Beskrivning (obligatoriskt)
   - Utgivare (obligatoriskt): välj din organisation
   - Kontaktpunkt (obligatoriskt): din avdelnings e-post eller funktionsbreivlåda

3. **Lägg till tema/kategorier:**
   - Välj från lista (t.ex. "Regioner och städer")
   - Detta gör datan sökbar

4. **Lägg till nyckelord:**
   - 3–5 termer som beskriver datan
   - Tänk på vad användare söker efter

5. **Spara och gå vidare.**

### Skapa Distributioner

En distribution är ett konkret sätt att få tillgång till datan.

1. **Gå till "+ Add Distribution"**
2. **För varje fil/format:**
   - **Namn:** t.ex. "Lediga tomter som CSV"
   - **Format:** Välj från lista (CSV, JSON, GeoJSON, etc.)
   - **Licens**: Välj från lista (CC0, CC BY, etc.) - detta är obligatoriskt
   - **accessURL:** Länk till där filen ligger (kan vara samma för CSV och JSON, men på olika sökvägar)
   - **Uppdateringsdatum:** Idag eller senast datan uppdaterades

3. **Spara.**

### Publicera

När allt är fyllt:
1. Klicka **"Publish"** (eller motsvarande knapp i din Entryscape)
2. Verifiera att allt är rätt
3. **Bekräfta publicering**

---

## Steg 5: Verifiera på dataportal.se

Det kan ta några minuter till några timmar innan metadata dyker upp på dataportal.se (det finns en cache).

### Kontrollista för verifiering

- [ ] Datamängden visas på https://dataportal.se/datasets/
- [ ] Titel och beskrivning läses rätt
- [ ] Alla distributioner finns
- [ ] Länkarna (accessURL) fungerar
- [ ] Licensen är korrekt
- [ ] Kontaktuppgifterna är synliga

### Om något är fel

1. Gå tillbaka till Entryscape
2. Redigera det som behövs
3. Spara och publicera igen
4. Vänta några minuter och uppdatera sidan på dataportal.se

---

## Vanliga misstag när du publicerar

**Fält som saknas:** Obligatoriska fält fylls inte i. *Lösning:* Använd checklistan tidigare i denna guide.

**Bruten accessURL:** Länken pekar på fel plats eller servern är nere. *Lösning:* Testa länken själv innan du publicerar.

**Licens på DataSet istället för Distribution:** License är en Distribution-egenskap. *Lösning:* Dubbelkolla att den är på rätt nivå.

**Otydlig titel/beskrivning:** "Data_v2.csv" eller "Viktig info". *Lösning:* Skriv som om en outsider ska förstå det.

**Ingen updåteringsinformation**: Användare vet inte om datan är ny eller från 2015. *Lösning*: Lägg alltid till publiceringsdatum och, om tillämpligt, updäteringsfrekvens.

**Glömde att testa länkarna:** Filerna existerar lokalt men inte på webbservern. *Lösning:* Verifiera att accessURL fungerar innan du publicerar.

---

## Efter publicering

### Underhålls-routine

- Uppdatera datan enligt schemat (veckovis? dagligen?)
- **Updätera metadata när datan ändras**: gamla beskrivningar leder till misstro
- Svara på frågor eller feedback från användare
- Övervaka om datan faktiskt används (genom loggar eller feedback)

### Nästa steg

- Läs guiden [Datakvalitet & MQA](./datakvalitet-och-mqa/) för att förbättra metadata över tid
- Kolla [Entryscape och dataportal.se: mental modell](./entryscape-dataportal-mental-modell/) för att förstå de vanligaste fallgroparna
- Gå med i communityt och dela dina erfarenheter eller fråga om något är oklart

---

## Resurser

- **Entryscape dokumentation:** Din organisation har troligen lokal dokumentation
- **Dataportal.se vägledning:** https://dataportal.se/dela-data
- **DIGG vägledning om öppna data:** https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/
- **Datakvalitets-verktygstips:** Open Data Orbit Labs (DCAT-checker)

---

**Den här guiden täcker grunderna för att publicera data i Sverige. Har du arbetat med detta praktiskt och vill bidra med tips eller fallgropar? Hjälp oss bygga vidare!**  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions
