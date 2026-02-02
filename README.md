# Open Data Orbit

🪐 **Open Data Orbit** är ett öppet, community-drivet projekt om öppna data i Sverige.  
Här samlas guider, verktyg, resurser och exempel som hjälper dig att förstå, använda och publicera öppna data i praktiken.

Det här är ingen officiell myndighetsdokumentation och ingen standardspecifikation.  
Det är en gemensam plats för praktisk kunskap, byggd för och av personer som arbetar med öppna data.

🔗 Webbplats:  
https://melissaskywalkz.github.io/open-data-orbit/

---

## Varför Open Data Orbit?

Öppna data är något många känner till, men som ofta är svårt att få grepp om i vardagen.  
Specifikationer, format och portaler finns, men kunskapen är utspridd, teknisk och ibland svår att omsätta i praktiskt arbete.

Open Data Orbit finns för att göra det enklare att:
- förstå hur öppna data faktiskt hänger ihop
- använda öppna data i riktiga projekt
- publicera och förvalta data på ett genomtänkt sätt
- lära genom exempel, inte bara teori

---

## Vad finns här?

Projektet består av flera delar som är tänkta att användas tillsammans.

### 🪐 Guides  
https://melissaskywalkz.github.io/open-data-orbit/guides/  

Praktiska steg-för-steg-guider som täcker både grunder och fördjupning.  
Guiderna är skrivna med fokus på verkliga arbetsflöden och svensk kontext.

Guides är organiserade i nivåer:
- konsoliderade guider som bygger stabil grund
- prioriterade guider för tidiga och viktiga moment
- fördjupningsguider för dig som vill gå vidare

---

### 🪐 Resources  
https://melissaskywalkz.github.io/open-data-orbit/resources/  

En kurerad samling av vägledningar, specifikationer, exempel och verktyg.  
Resurserna är grupperade efter användningsområde och kompletterar guiderna.

Här hittar du bland annat:
- officiella rekommendationer och standarder
- dokumentation från myndigheter och dataplattformar
- verktyg som stödjer publicering, validering och analys

---

### 🪐 Labs  
https://melissaskywalkz.github.io/open-data-orbit/labs/  

Labs är projektets experimentyta.  
Här finns små verktyg och tester som gör det möjligt att arbeta direkt med data.

Labs kan till exempel användas för att:
- validera JSON och metadata
- testa format och strukturer
- visualisera och förstå dataflöden
- förhandsvisa GeoJSON + CSV på mörk basemap med export (GeoJSON Preview Map)
- förhandsvisa WMS-lager via GetCapabilities med lagerlista (WMS Preview)

Labs är inte färdiga produkter. De är till för att utforska, prova och lära.

---

### 🔎 Sök

Sökindexet byggs vid build genom att samla guider (content collection), resurser (kuraterade listor) och labs till ett lokalt JSON-index (`/search.json`). Sidan `/search` lazy‑loadar indexet client‑side och har en enkel fallback‑lista utan JavaScript.

---

### 🪐 Community  
https://github.com/MelissaSkywalkz/open-data-orbit/discussions  

Communityt är platsen där projektet lever vidare.  
Här kan du ställa frågor, dela erfarenheter, diskutera guider och föreslå förbättringar.

Community används för:
- frågor och svar
- diskussioner om innehåll och arbetssätt
- idéer till nya guider, resurser eller Labs

---

## Hur använder du materialet?

Vill du lära dig grunderna börjar du med Guides.  
Vill du testa något praktiskt går du vidare till Labs.  
Behöver du officiella definitioner och bakgrund använder du Resources.  
Har du frågor, synpunkter eller idéer tar du dem i Community.

Allt material är öppet att läsa och använda. Feedback och bidrag uppmuntras.

---

## Bidra

Open Data Orbit utvecklas öppet och iterativt.  
Du kan bidra genom att:
- förbättra eller korrigera guider
- föreslå eller lägga till resurser
- bidra med nya Labs-idéer
- ställa frågor som synliggör otydligheter

Se `CONTRIBUTING.md` för hur du går tillväga.

---

## Teknik

Webbplatsen är byggd med Astro och publiceras via GitHub Pages.

Lokal utveckling:

    cd site
    npm install
    npm run dev

---

## Licens

MIT. Använd, ändra och dela fritt.

---

STATUS: IN ORBIT  
MISSION: OPEN DATA  
CREW: CONNECTED
