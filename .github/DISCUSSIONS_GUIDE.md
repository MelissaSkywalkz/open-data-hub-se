# GitHub Discussions – Implementeringsguide

Denna dokumentation beskriver den kompletta GitHub Discussions-strukturen för Open Data Orbit.

## 📁 Struktur

```
.github/
├── DISCUSSION_CATEGORIES.md           # Kategoriförslag
├── DISCUSSION_TEMPLATE/               # Mallar för diskussioner
│   ├── fraga-hjalp.md                # Mall för frågor
│   ├── bug-report.md                 # Mall för buggrapporter
│   ├── feature-request.md            # Mall för feature requests
│   └── projekt-showcase.md           # Mall för projekt showcase
└── discussions/                       # Pinned discussions
    ├── starta-har.md                 # Välkomstguide
    ├── roadmap.md                    # Roadmap & prioriteringar
    ├── labs-buggar-features.md       # Labs buggar & features
    └── badges-achievements.md        # Badge-system
```

## 🚀 Implementering i GitHub

### Steg 1: Aktivera GitHub Discussions
1. Gå till repository settings
2. Under "Features", aktivera "Discussions"

### Steg 2: Skapa kategorier
Använd beskrivningarna i `DISCUSSION_CATEGORIES.md` för att skapa följande kategorier:

| Kategori | Emoji | Beskrivning | Format |
|----------|-------|-------------|--------|
| Starta här | 🚀 | Välkommen till Open Data Orbit! Här hittar du introduktioner, onboarding och allt du behöver för att komma igång med öppna data i Sverige. | Announcement |
| Frågor & Hjälp | ❓ | Ställ frågor om öppna data, DCAT-AP-SE, metadata, dataportal.se, GIS-format eller verktyg. Community:t hjälper dig vidare! | Q&A |
| Guider & Metadata | 📚 | Diskussioner om metadata-standarder, DCAT-AP-SE, JSON, CSV, GeoJSON och hur man arbetar med öppna datakällor. | Open-ended |
| Labs & Verktyg | 🧪 | Tekniska diskussioner om verktyg, bibliotek, API:er och experiment. Perfekt för utvecklare som bygger med öppna data. | Open-ended |
| Projekt & Showcase | ✨ | Visa upp dina projekt, visualiseringar och lösningar byggda med öppna data. Inspirera andra och få feedback! | Show and tell |
| Feedback & Roadmap | 🗺️ | Dela feedback på Open Data Orbit, rösta på features och diskutera projektets riktning. Din röst räknas! | Open-ended |
| Meddelanden | 📡 | Officiella uppdateringar, nya guider, events och viktiga meddelanden från Open Data Orbit-teamet. | Announcement |

### Steg 3: Skapa pinned discussions
Kopiera innehållet från filerna i `discussions/` och skapa pinnade diskussioner:

1. **Starta här – läs detta först** → Kategori: Starta här
2. **Roadmap & prioriteringar** → Kategori: Feedback & Roadmap
3. **Labs: buggar & feature requests** → Kategori: Labs & Verktyg
4. **Badges & achievements** → Kategori: Starta här

### Steg 4: Aktivera discussion templates
GitHub läser automatiskt templates från `.github/DISCUSSION_TEMPLATE/`. Användare kan välja template när de skapar ny diskussion.

## 🎯 Användningsguide

### För community-medlemmar

**Ställ en fråga:**
1. Gå till Discussions
2. Välj "Frågor & Hjälp"
3. Använd template "Fråga / Hjälp"

**Rapportera en bugg:**
1. Gå till Discussions
2. Välj "Labs & Verktyg"
3. Använd template "Buggrapport (Labs)"

**Föreslå feature:**
1. Gå till Discussions
2. Välj "Feedback & Roadmap"
3. Använd template "Feature request"

**Visa projekt:**
1. Gå till Discussions
2. Välj "Projekt & Showcase"
3. Använd template "Projekt / Showcase"

### För moderatorer

- **Pin viktiga diskussioner** från `.github/discussions/`
- **Använd labels** för att kategorisera (bug, feature-request, question, etc.)
- **Uppmuntra deltagande** genom badge-systemet
- **Uppdatera roadmap** regelbundet baserat på community-feedback

## 🏷️ Rekommenderade labels

Skapa dessa labels för bättre organisering:

- `question` - Frågor från communityt
- `answered` - Fråga besvarad
- `bug` - Buggrapporter
- `feature-request` - Feature förslag
- `enhancement` - Förbättringar
- `help-wanted` - Behöver hjälp från community
- `good-first-issue` - Bra för nya bidragsgivare
- `priority-high` - Hög prioritet
- `priority-medium` - Medium prioritet
- `priority-low` - Låg prioritet
- `showcase` - Projekt showcase
- `labs` - Relaterat till Labs-verktyg
- `documentation` - Dokumentation

## 📊 Best practices

1. **Svara snabbt** på nya diskussioner (mål: inom 24h)
2. **Uppmuntra deltagande** genom att rösta och kommentera
3. **Lyfta fram bra innehåll** genom att pinna diskussioner
4. **Fira bidrag** genom badge-systemet
5. **Håll diskussioner on-topic** och hänvisa till rätt kategori
6. **Uppdatera roadmap** månadsvis
7. **Var vänlig och inkluderande** enligt Code of Conduct

## 🔗 Relaterade filer

- [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md) - Community guidelines
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Bidragsguide
- [BADGES.md](../BADGES.md) - Badge tracking
- [MODERATION.md](../MODERATION.md) - Moderation guidelines

---

**Skapad:** 2026-01-29  
**Version:** 1.0  
**Språk:** Svenska
