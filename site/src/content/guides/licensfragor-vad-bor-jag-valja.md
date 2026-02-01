---
title: Licenser – hur väljer du rätt?
description: Guide till att förstå och välja rätt licens för öppna data.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: nybörjare
tags:
  - licens
  - rättigheter
  - cc0
  - cc-by
  - immaterialrätt
---

## Varför licens spelar roll

En **licens** säger vad man får göra med data.

**Utan licens** är det oklart om man får använda datan, vilket skapar juridisk osäkerhet för användarna och leder till mindre återanvändning.

**Med licens** blir reglerna klara ("Du får göra X, Y men inte Z"), användare vågar använda datan och mer innovation blir möjlig.

**Juridisk faktum:** All innehål – inklusive data – är automatiskt upphovsrättsskyddat. Utan licens har bara skaparen rätt att använda det.

---

## Två huvudkategorier

**Öppna licenser** tillåter data att användas fritt för nästan vilket syfte som helst (exempel: CC0, CC BY, ODbL). De passar för offentlig sektor, forskning, innovation och transparens.

**Restriktiva licenser** förbjuder vissa användningar eller kräver tillstånd (exempel: Proprietary licenses, GDPR-skyddad data). De passar för privat affärsdata, personlig data och känslig data.

**Denna guide fokuserar på öppna licenser**, det vill säga vad "öppna data" vanligen betyder.

---

## Licensöversikt (snabbguide)

| Licens | Erkännande | Modifiering | Kommersiell | Delning-krav | Lämplig för |
|--------|-----------|------------|-----------|-------------|-----------|
| **CC0** | Nej | Ja | Ja | Nej | Offentlig sektor |
| **CC BY** | Ja | Ja | Ja | Nej | Forskningsinstitutioner |
| **CC BY-SA** | Ja | Ja | Ja | Ja | Community-projekt |
| **ODbL** | Ja | Ja | Ja | Ja | Collaborative databases |

---

## De vanligaste licenserna för öppna data

### **CC0 (Creative Commons Zero)**

**Betyder:** "Jag frånhäver mig alla rättigheter – använd datan hur du vill."

Du får använd datan för vilket syfte som helst (kommersiellt, privat, forskning), ändra datan, skapa derivater och distribuera vidare. Du behöver inte nämna källan (men det är nice-to-have).

**Juridisk effekt:** Data blir praktiskt taget "ägarlös" – långt utanför immaterialrätten.

**Lämplig för:**
- Offentlig sektors grundläggande data (befolkning, miljö, ekonomi)
- Data som ska användas maximalt
- När du inte behöver erkännande

**Exempel:** SCB, SMHI, många svenska myndigheter

**SVT: CC0 är ofta det bästa valet för offentlig data.**

---

### **CC BY (Creative Commons Attribution)**

**Betyder:** "Du får använda datan, men måste nämna källan."

Du får använd datan för vilket syfte som helst, ändra datan, skapa derivater och distribuera vidare. Du måste nämna skaparen/källan.

**Hur man nämner:**
```
Källa: Växjö kommun, licensierad under CC BY
```

eller

```
Data från [Organisation], CC BY [År]
```

**Juridisk effekt:** Creator får erkännande, men behöver inte ge tillstånd för användning.

**Lämplig för:**
- Data där källan är viktig
- Data som andra kan bygga vidare på men bör nämna originalskälla
- Når du vill uppmärksamhet för ditt arbete

**Exempel:** Många lokala opendata-initativ, forsk ningsdata

---

### **ODbL (Open Data Commons Open Database License)**

**Betyder:** "Du får använda datan, men måste nämna källan och publicera dina ändringar under samma licens."

Du får använd, ändra och distribuera, samt använd kommersiellt. Du måste nämna källan och publicera ändringar under ODbL.

**Juridisk effekt:** "Copyleft för data" – ändringar måste delas vidare.

**Lämplig för:**
- Samarbetsprojekt (t.ex. OpenStreetMap)
- Data där du vill säkerställa att förbättringar delas tillbaka
- Community-driven projekt

**Exempel:** OpenStreetMap-data

---

## Andra licenserar du kan möta

### **CC BY-SA (Creative Commons Attribution-ShareAlike)**

Som CC BY, men ändringar måste publiceras under samma licens.

**Lämplig för:** Community-data där du vill att bidrag delas vidare.

### **CC BY-NC (Creative Commons Attribution-NonCommercial)**

Du får använda men INTE kommersiellt.

**Varning:** "Kommersiell" är ofta oklart och kan skapa juridiska problem. **Rekommenderas inte för öppna data.**

---

## Väljande process – praktisk guide

### **Fråga 1: Är datan upphovsrättsskyddad?**

**JA** → Du måste välja en licens

**NEJ** (t.ex. rent faktisk data) → Du kan fortfarande välja CC0 för klarhet

### **Fråga 2: Är det offentlig sektor-data?**

**JA** (myndighet, kommun, region)

→ **Rekommendation: CC0**

Anledningar:
- Offentlig data är redan finansierad av skattepengar
- CC0 maximerar innovation
- DIGG rekommenderar CC0

**NEJ** (privat företag, forskningsinstitution)

→ Gå till Fråga 3

### **Fråga 3: Vill du få erkännande?**

**JA**: Du vill bli krediterad för ditt arbete

→ **Välj CC BY**

**NEJ**: Du bryr dig inte om att bli nämnd

→ **Välj CC0**

### **Fråga 4: Vill du att ändringar delas vidare?**

**JA**: Om någon förbättrar datan vill du att de delar förberingarna

→ **Välj ODbL eller CC BY-SA**

**NEJ**: Folk får göra vad de vill med datan

→ **Redan valt CC0 eller CC BY**

---

## Praktiska exempel

### **Exempel 1: Kommun publicerar befolkningsstatistik**

Data är officiell och redan finansierad av skattepengar. Syftet är att maximera användning för innovation. Erkännande är inte kritiskt. Val: CC0 ✅

---

### **Exempel 2: Forskningsinstitution publicerar klimatdata**

Data är resultat från egen forskning. Syftet är att data ska användas, men forskningen bör citeras. Erkännande för arbetet önskas. Val: CC BY ✅

---

### **Exempel 3: OpenStreetMap-projekt**

Data är gemensam och byggd av många. Syftet är att hålla data öppen för alla. Bidrag bör delas tillbaka. Val: ODbL ✅

---

### **Exempel 4: Privat företag delar innovativ data**

Data är proprietär, men företaget vill dela för PR. Syftet är marknadsföring och erkännande av företaget önskas. Val: CC BY ✅

---

## Vanliga missförstånd

### **"CC BY betyder att källan måste nämnas varje gång"**

**Falskt.** Det är upp till användaren hur noggrant de nämner källan. En länk räcker ofta.

### **"CC licenser är bara för creativt innehål"**

**Falskt.** CC-licenser fungerar lika bra för data, databaser och verktyg.

### **"CC0 betyder datan är gratis att ladda ned"**

**Något förvirrat.** CC0 är om rättigheter, inte pris. Både CC0 och CC BY-data kan vara gratis eller betald – licensen handlar bara om vad du får göra när du har den.

### **"Om jag väljer CC BY kan jag stämma människor som inte nämner källan"**

**Teoretiskt möjligt, men opraktiskt.** CC BY är en *uppmaning*, inte ett lagkrav (i de flesta länder).

---

## Ändra licens senare

### **Kan jag ändra från CC0 till CC BY senare?**

**Ja, framifrån.** Ny data kan ha en annan licens. **Men:** Data du redan publicerat som CC0 förblir CC0 för all tidigare users.

**God praxis:** Tänk igenom licensen innan du publicerar.

---

## Vad säger DIGG och Sverige?

**DIGG:s rekommendation för offentlig sektor:**

> "Offentliga organisationer rekommenderas att publicera data under **CC0**. Om särskilda skäl föreligger (t.ex. forskningsprojekt) kan **CC BY** användas."

**Länk:** https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/rekommendation-om-oppna-licenser-och-immaterialratt

**Laglig grund (Öppna datalagen):**

Sverige har inte en tvingande licenskrav, men rekommenderar CC0/CC BY för offentlig sektor.

---

## Nästa steg

**Vill du publicera data?**
Se [Att publicera data – steg för steg](./att-publicera-data-steg-for-steg/).

**Vill du förstå metadata bättre?**
Se [DCAT-AP-SE obligatoriska fält](./dcat-ap-se-obligatoriska-falt/).

**Osäker på din situation?**
Kontakta din organisation juridiska avdelning eller ställ frågor i communityt:
https://github.com/MelissaSkywalkz/open-data-orbit/discussions

---

## Resurser

- **Creative Commons hemsida:** https://creativecommons.org/
- **CC-licens helt enkelt:** https://creativecommons.org/about/cclicenses/
- **DIGG:s rekommendation:** https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/
- **Open Data Commons:** https://opendatacommons.org/
- **Juridiska termer:** Konsultera din organisations juridiska avdelning vid osäkerhet

---

**Har du frågor om licenser för din data? Ställ frågor i communityt – många har samma funderingar!**
https://github.com/MelissaSkywalkz/open-data-orbit/discussions
