# 🌍 Open Data Orbit

**Open Data Orbit** är en community-driven plattform för att utforska, förstå och bygga med **öppna data i Sverige**.

Guides · Labs · Community · Rewards  
Allt du behöver för öppna data – **i omlopp** 🛰️

🔗 **Live site**  
https://melissaskywalkz.github.io/open-data-orbit/

---

## ✨ Vad är Open Data Orbit?

Open Data Orbit är en kunskaps- och samarbetsplattform för:

- utvecklare
- datakonsulter
- GIS-specialister
- journalister
- studenter
- nyfikna medborgare

Målet är att göra öppna data **lättare att hitta, förstå och använda** –  
från första kontakt → till fungerande analyser, kartor och projekt.

Fokus ligger på **praktisk användning**, inte bara teori.

---

## 🧭 Struktur

| Sektion | Beskrivning |
|------|------------|
| **Guides** | Steg-för-steg-guider om öppna data, metadata & dataportaler |
| **Labs / Access Terminal** | Interaktiva verktyg för data-bearbetning |
| **Community (Comms)** | Frågor, diskussioner & erfarenhetsutbyte |
| **Rewards** | Badges & erkännande för contributions |
| **About / Crew** | Mission, vision & hur du deltar |

---

## 🧪 Labs: Access Terminal

**Access Terminal** är hjärtat i Labs – byggd för *paste → run → export*.

Den kör helt i webbläsaren och kräver **ingen backend**.

### Stödda verktyg & lägen

#### 🧾 JSON
- Validering & pretty print
- Minify
- Sortering av keys
- Key-lista (deep)
- Path-lookup (`a.b[0].c`)

#### 🔄 CSV ⇄ JSON
- Automatisk delimiter-detektion
- CSV → JSON
- JSON (array of objects) → CSV
- Export direkt från output

#### 🗺️ GeoJSON
- Grundvalidering
- Feature- & geometri-sammanfattning
- Geometry-stats
- Automatisk **bbox-beräkning**

#### 🧩 DCAT (hardcore-ish)
- Dataset- & distribution-checks
- Identifierar vanliga fel:
  - titel saknas
  - beskrivning säger *vad* men inte *varför*
  - kontaktpunkt saknas
  - licens på fel nivå
  - trasig accessURL / downloadURL
- Ger **mänskliga hints** (ej full SHACL/RDF)

> DCAT-checken är avsiktligt praktisk – inte akademiskt perfekt.

#### 🧪 Schema (light)
- Generera “light schema” från data
- Validera array-of-objects
- Identifiera saknade fält & felaktiga typer
- Täcker ~80 % av verkliga datafel

---

## 🛰️ Tech stack

- **Astro**
- **GitHub Pages**
- Vanilla CSS (glass / orbit theme)
- Vanilla JavaScript
- **No backend** – allt körs klient-side

---

## 🚀 Deployment (GitHub Pages)

Sajten deployas till **GitHub Pages**.

### Aktivera Pages
1. Gå till **Settings → Pages**
2. Source: `gh-pages`
3. Root: `/`
4. Spara

Sajten blir tillgänglig på:  
`https://<username>.github.io/open-data-orbit/`

### Deploy
- Build & deploy sker automatiskt vid push till `main`
- Manuell deploy kan köras via  
  **Actions → Deploy Astro site to GitHub Pages**

---

## 🧑‍🚀 Contributing

Open Data Orbit är **community-driven** ❤️

Bidrag kan vara:
- guider & tutorials
- förbättringsförslag
- buggar & idéer
- verktyg till Labs
- exempelprojekt

👉 Läs [`CONTRIBUTING.md`](./CONTRIBUTING.md)  
👉 Använd **GitHub Discussions** för frågor & idéer  
👉 Badges delas ut manuellt i MVP-fasen

---

## 📜 License

MIT – använd, bygg vidare, dela.

---

**STATUS:** `IN ORBIT`  
**MISSION:** `OPEN DATA`  
**OBJECTIVE:** `TRANSPARENCY & USABILITY`