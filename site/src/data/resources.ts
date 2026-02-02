export const getResourceSections = (base: string) => [
  {
    title: "Börja här",
    subtitle: "Staten ger vägledning. Du behöver veta var du börjar.",
    variant: "orbit",
    icon: "orbit",
    items: [
      {
        name: "DIGG: Öppna och delade data",
        url: "https://www.digg.se/kunskap-och-stod/oppna-och-delade-data",
        note: "Statens guide: begrepp, ansvar och varför detta spelar roll för din organisation."
      },
      {
        name: "DIGG: Vägledning för att tillgängliggöra information",
        url: "https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/vagledning-for-att-tillgangliggora-information",
        note: "Praktisk checklista från staten för att gå från 'vi har data' till 'data är publicerad'."
      },
      {
        name: "Sveriges dataportal",
        url: "https://www.dataportal.se",
        note: "Den nationella katalogen. Här söker människor efter data. Här publicerar du datan."
      },
      {
        name: "Open Data Orbit: Guider",
        url: `${base}guides/`,
        note: "Våra guider fyller gapen mellan teori och praktik. Börja här för konkreta exempel."
      }
    ]
  },
  {
    title: "Metadata & katalogisering",
    subtitle: "Vad är metadata egentligen? Och vad är minimun?",
    variant: "orbit",
    icon: "orbit",
    items: [
      {
        name: "DCAT 3.0.0 (sv): Sveriges dataportal docs",
        url: "https://docs.dataportal.se/dcat/3.0.0/sv/",
        note: "För dig som vill förstå DCAT som standard. Djupdykning: dataset, distributioner, vokabulärer."
      },
      {
        name: "Specs: Dataportal.se (specifications)",
        url: "https://docs.dataportal.se/specifications/",
        note: "Den officiella specifikationen. Här hittar du tekniska detaljer och hur allt förbinds."
      },
      {
        name: "Open Data Orbit: Metadata-check (light)",
        url: `${base}guides/metadata-checklista-dcat-ap-se-light/`,
        note: "Snabb självtest innan du publicerar: Har jag de viktigaste metadatafälten?"
      },
      {
        name: "EntryScape Guide",
        url: "https://docs.entryscape.com/guide/",
        note: "Om din organisation använder EntryScape för publicering. Här finns hjälp."
      }
    ]
  },
  {
    title: "Samverkan & interoperabilitet",
    subtitle: "Hur gör vi data användbar tillsammans?",
    variant: "terminal",
    icon: "terminal",
    items: [
      {
        name: "DIGG: Svenskt ramverk för digital samverkan",
        url: "https://www.digg.se/kunskap-och-stod/svenskt-ramverk-for-digital-samverkan",
        note: "Riktning från staten för hur offentlig sektor bör arbeta med data tillsammans."
      },
      {
        name: "DIGG Play (webbinarier & filmer)",
        url: "https://www.digg.se/kunskap-och-stod/digg-play",
        note: "Korta filmer från staten om öppna data. Bra när du behöver snabb översikt."
      }
    ]
  },
  {
    title: "Format & API:er",
    subtitle: "Hur gör du data direkt användbara för andra utvecklare?",
    variant: "terminal",
    icon: "terminal",
    items: [
      {
        name: "Open Data Orbit: Labs",
        url: `${base}labs/`,
        note: "Våra verktyg: validera JSON, testa GeoJSON, checka metadata snabbt."
      },
      {
        name: "OpenAPI / Swagger",
        url: "https://swagger.io/",
        note: "Standard för att dokumentera och testa REST-API:er. Gör ditt API användbart."
      },
      {
        name: "W3C: SPARQL 1.1 overview",
        url: "https://www.w3.org/TR/sparql11-overview/",
        note: "Fragesprak för länkade data. Avancerat, men kraftfullt för stora datamängder."
      }
    ]
  },
  {
    title: "Juridik & licenser",
    subtitle: "Vilken licens passar dina data? Och vad säger lagen?",
    variant: "orbit",
    icon: "orbit",
    items: [
      {
        name: "Creative Commons-licenser",
        url: "https://creativecommons.org/licenses/",
        note: "De mest använda licenserna för öppna data. Vi rekommenderar CC0 eller CC BY."
      },
      {
        name: "SKR: Öppna data, datalagen och stöd",
        url: "https://skr.se/digitaliseringivalfarden/datadrivenutveckling/oppnadatadatalagenochstod.8407.html",
        note: "Kommunernas perspektiv på öppna data-lagen. Juridisk vägledning för organisationer."
      }
    ]
  },
  {
    title: "Community & support",
    subtitle: "Du är inte ensam. Här hittar du varandra.",
    variant: "comms",
    icon: "antenna",
    items: [
      {
        name: "Open Data Orbit: GitHub Discussions",
        url: "https://github.com/MelissaSkywalkz/open-data-orbit/discussions",
        note: "Här frågar utvecklare, kommuner och entusiaster. Vi hjälper varandra."
      },
      {
        name: "Open Data Orbit: Community-sidan",
        url: `${base}community/`,
        note: "Guide till community: vad är ok att fråga, tonfall, regler och kultur."
      },
      {
        name: "Nyhet: Communityt på Sveriges dataportal stängs ner",
        url: "https://www.dataportal.se/nyheter/communityt-pa-sveriges-dataportal-stangs-ner",
        note: "Sveriges dataportal stänger sitt forum. Så flytta vi dialogen hit till GitHub."
      }
    ]
  }
];
