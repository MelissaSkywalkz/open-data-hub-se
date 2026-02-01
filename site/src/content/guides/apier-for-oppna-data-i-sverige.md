---
title: API:er för öppna data i Sverige
description: Guide till att hitta och använda API:er från svenska myndigheter och datakällor.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: medel
tags:
  - api
  - utvecklare
  - data
  - integration
  - scb
  - smhi
---

## Vad är ett API?

Ett **API** (Application Programming Interface) är ett sätt för ett datasystem att tala med ett annat system, oftast en dator som pratar med en server.

**I enkla termer:**  
Istället för att ladda ned en stor CSV-fil en gång, kan du via ett API ställa en **fråga** till servern och få precis det du behöver: automatiskt, regelbundet, och i strukturerad form.

**Exempel:**  
- Du vill veta dagens temperatur i Malmö
- Du skickar ett API-anrop till SMHI
- SMHI svarar direkt med dagens värdena
- Du behöver inte ladda ned miljoner värden manuellt

---

## Varför är API:er viktiga för öppna data?

API:er möjliggör **automatisering**: dina system hämtar nya data när de uppdateras utan manuell nedladdning. Data är ofta mer aktuell än en nedladdningsbar fil, och du kan **filtrera** för att bara få det du behöver ("temperatur i Malmö" istället för all data). För organisationer i större skala blir integration enklare och billigare, eftersom användarnas servrar gör mindre arbete när endast relevant data hämtas.

---

## Stora API:er för öppna data i Sverige

### **SCB (Statistiska centralbyrån)**

**Data:** Officiell statistik om befolkning, ekonomi, arbetsmarknad, miljö, etc.

SCB erbjuder flera API:er: **PxWeb API** (statistik), **Geodata API** (geografisk information) och **School Unit Register API** (skolor). Starta på https://www.scb.se/en/services/open-data-api/ där dokumentationen finns. Licensen är CC0 för fri användning utan källhänvisning.

**Praktiskt exempel:**
```
https://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy
```

Svarar med befolkningsstatistik i JSON.

**Begränsningar:**
- Max 10 anrop per 10 sekunder (från samma IP)
- Max 100,000 värden per tabell
- Se dokumentationen för hur du formulerar frågor

---

### **SMHI (Sveriges meteorologiska och hydrologiska institut)**

**Data:** Väder, väderhistorik, vattenkvalitet, luftkvalitet, klimat.

SMHI tillhandahåller **Väder-API** (prognoser), **Havs- och sjödata API** (oceanografisk data) och **Luftkvalitets-API**. Börja på https://www.smhi.se/data/ med dokumentation och en webbutforskare för att testa data. Licensen varierar (CC0 eller CC BY).

**Praktisk exempel:**
```
https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/
```

Svarar med väderanalysdata i NetCDF eller GeoJSON.

**Begränsningar:**
- Begränsningar varierar beroende på API
- Check "villkor för användning" på SMHI:s webbplats

---

### **Dataportal.se: Data & API:er katalog**

**Data:** Metadata och länkar till tusentals datamängder från svenska organisationer.

Dataportal.se är en **sökportal** för att hitta API:er och datakällor från svenska organisationer, inte själv en data-leverantör. Gå till https://dataportal.se/data-apier, sök efter din datakälla, och kolla sedan organisationens egen API-dokumentation.

---

### **Lokala och regionala initiativ**

Många kommuner, regioner och städer publicerar sina egna API:er:

| Källa | Data | URL |
|-------|------|-----|
| **Stockholm Open Data** | Trafik, miljö, geodata | https://opendata.stockholm.se |
| **Trafikverket** | Trafikinformation | https://www.trafikverket.se/tjanster/oppna-data/ |
| **Lantmäteriet** | Kartdata, geodata | https://www.lantmateriet.se/sv/Kartor-och-geodata/oppna-data/ |

---

## Hur du börjar: praktisk guide

### Steg 1: Identifiera din datakälla

Fråga dig: Vilken data behöver jag? Vilken myndighet äger den? Publicerar de en API? Börja på dataportal.se för att söka, och kolla sedan organisationens egna webbplats för API-dokumentation.

### Steg 2: Läs dokumentationen

Varje API har dokumentation som förklarar: vad data innehåller, hur man formulerar frågor, vilket format du får tillbaka, begränsningar och licens. Kontrollera särskilt: dataformat (JSON/XML/GeoJSON), om du behöver API-nyckel, vilka filter-parametrar som finns, och uppdateringsfrekvens.

### Steg 3: Testa med ett enkelt anrop

I browserens adressfält eller med ett verktyg som `curl`:

**Exempel: SCB befolkning:**
```bash
curl "https://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy"
```

Eller använd Open Data Orbit Labs för att testa JSON-respons.

### Steg 4: Integrera i ditt system

När du vet att API:n fungerar, integrerar du den i din applikation (de flesta programmeringsspråk har HTTP-bibliotek). Sätt upp en schedule för regelbundna uppdateringar och ha en fallback-plan för när servern är nere.

**Exempel: Python (pseudo-kod):**
```python
import requests

# Hämta data från API
response = requests.get('https://api.scb.se/...')
data = response.json()

# Processera eller lagra
for row in data:
    print(row)
```

---

## Vanliga fallgropar när du använder API:er

**"Jag får inte svar. Är API:n nere?"**  
Kolla först:
- Är webbadressen (URL) rätt stavad?
- Skickade jag rätt parametrar?
- Rate limits: har jag gjort för många anrop för snabbt?
- Se dokumentationen för felmeddelanden

**"API:n returnerar data jag inte förväntar mig"**  
Ofta för att du filtrerade fel eller ställde fel fråga. Test med dokumentationens exempel först.

**"Jag hämtar for mycket data"**  
Många API:er låter dig filtrera eller pagina (dela upp i småbitar). Check dokumentationen.

**"Jag vill använda data men licensen är oklar"**  
De flesta svenska myndighets-API:er är CC0 (fri användning) eller CC BY (nämn källan). Check alltid innan du använder.

**"Data uppdateras, men jag hämtar samma gamla data"**  
Caching. Din webbläsare eller server kan "minnas" gamla svar. Se documentation för cachingkontroll.

---

## Verktyg för att arbeta med API:er

### **Testning & utforskning**
- **Postman** (desktop/web): testa API:er visuellt
- **curl** (kommandoraden): enkelt att testa
- **Open Data Orbit Labs**: validera JSON/GeoJSON direkt

### **Kodning**
- **Python**: `requests` biblioteket är standard
- **JavaScript/Node.js**: `fetch` eller `axios`
- **Any language**: kan göra HTTP-anrop
- Läs dokumentationen för ditt språk

### **Monitering**
- Sätt upp aviseringar om API:n blir långsam
- Log all begäranden för felsökning

---

## Att bygga en egen API

Om du är **datapublicerare** och vill erbjuda en API:

**Steg:**
1. Läs **API Playbook** från Sveriges dataportal
2. Följ den **nationella REST API-profilen**
3. Validera med **RAP-LP-verktyget** (REST API-Profil Lint Processor)
4. Dokumentera den väl (använd OpenAPI/Swagger)
5. Publicera på dataportal.se

**Länk:** 👉 https://dataportal.se/utvecklarplattform-for-apier

---

## Nästa steg

**Vill du förstå datakällor bättre?**  
Se guiden [Datakällor i Sverige](./data-sources/).

**Vill du publicera egen data med API?**  
Läs [Att publicera data: steg för steg](./att-publicera-data-steg-for-steg/).

**Vill du förstå datakvalitet i API:er?**  
Se [Datakvalitet & MQA](./datakvalitet-och-mqa/).

**Sitter du fast med ett specifikt API?**  
Ställ frågor i communityt. Många utvecklare använder samma API:er:  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions

---

## Resurser

- **SCB API:** https://www.scb.se/en/services/open-data-api/
- **SMHI API:** https://www.smhi.se/data/
- **Dataportal.se API-katalog:** https://dataportal.se/data-apier
- **Utvecklarplattformen:** https://dataportal.se/utvecklarplattform-for-apier
- **API Playbook:** https://dataportal.se/api-playbook
- **REST API-profil:** https://dataportal.se/rest-api-profil

---

**Har du använt ett API från en svensk myndighet och vill dela tips eller en fallgrop? Hjälp oss bygga denna guide bättre!**  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions
