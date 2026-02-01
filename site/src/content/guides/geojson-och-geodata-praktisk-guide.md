---
title: GeoJSON och geodata
description: Hur du arbetar med geografisk data, GeoJSON och kartläggning för öppna data.
author: Open Data Orbit
publishedAt: 2026-02-01
updatedAt: 2026-02-01
status: stable
level: medel
tags:
  - geojson
  - geodata
  - gis
  - kartdata
  - format
---

## Vad är geodata?

**Geodata** är all data som har en **geografisk plats**: allt från adresser och kartgränser till miljömätningar och trafikflöden.

**Exempel:**
- En punkt: "En väderstation vid 57.5°N, 12.3°Ö"
- En linje: "En väg från Stockholm till Göteborg"
- En polygon: "Gränsen för en kommun"
- Attribut: "Denna väderstation mäter temperatur och luftfuktighet"

---

## Varför GeoJSON?

GeoJSON är ett format för att lagra geodata på ett strukturerat, standardiserat sätt. Det är standardiserat och alla system förstår det, plus lättläst eftersom JSON är enkelt att tolka. Det har väl stöd (alla GIS-verktyg kan läsa det) och är webb-vänligt (lätt att dela via API:er). Nackdelen är att det kan bli stort för stora datamängder (använd komprimering) och är inte optimal för mycket komplexa geometrier, men det fungerar.

---

## GeoJSON-struktur: enkelt exempel

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "namn": "Växjö",
        "befolkning": 85000,
        "kommun": "Växjö kommun"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [15.2711, 56.8770]
      }
    }
  ]
}
```

**Vad betyder vad:** `FeatureCollection` är en samling geografiska objekt, `Feature` är ett enskilt objekt (punkt, linje, område), `properties` är attribut (data om objektet), `geometry` är var objektet ligger (koordinater), och `type: "Point"` säger att detta är en punkt (kan vara LineString, Polygon, etc). `coordinates` är längdgrad, breddgrad (notera ordningen!).

---

## Vanliga geometrityper

### **Point (Punkt)**
En enskild plats.

```json
"geometry": {
  "type": "Point",
  "coordinates": [15.2711, 56.8770]
}
```

**Exempel:** Väderstation, restaurang, byggnad.

### **LineString (Linje)**
En väg mellan punkter.

```json
"geometry": {
  "type": "LineString",
  "coordinates": [
    [15.2711, 56.8770],
    [15.2900, 56.8800],
    [15.3100, 56.8750]
  ]
}
```

**Exempel:** Väg, cykelväg, flod.

### **Polygon (Område)**
En sluten area.

```json
"geometry": {
  "type": "Polygon",
  "coordinates": [
    [
      [15.2, 56.8],
      [15.3, 56.8],
      [15.3, 56.9],
      [15.2, 56.9],
      [15.2, 56.8]  // Samma punkt som första för att stänga området
    ]
  ]
}
```

**Exempel:** Kommune, stadsdel, skog, sjö.

---

## Koordinatsystem: viktigt!

### **WGS84 (lat/lon)**

GeoJSON **måste** använda **WGS84** (världens standardkoordinatsystem).

**Format:** `[longitud, latitud]` (längdgrad först, sedan breddgrad!)

**Exempel:**
```
Stockholm: [18.0686, 59.3293]
```

**Vanlig förvirring**: Många är vana vid [latitud, longitud], men GeoJSON använder [longitud, latitud]!

### **Andra koordinatsystem**

Om din data är i ett annat system (t.ex. SWEREF99 eller Gauss-Krüger för Sverige) måste du konvertera den till WGS84 innan du publicerar. Dokumentera vad ursprungssystemet var. Använd ett GIS-verktyg eller Python-bibliotek för konvertering.

**Python-exempel (pseudo-kod):**
```python
from pyproj import Transformer

transformer = Transformer.from_crs("EPSG:3006", "EPSG:4326")  # SWEREF99 -> WGS84
lat, lon = transformer.transform(x, y)
```

---

## Så här publicerar du GeoJSON

### **Steg 1: Förbered dina data**

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "namn": "Lediga tomter nr 1",
        "storlek_m2": 5000,
        "kategori": "bostäder",
        "ansvarig": "Växjö kommun"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [...]
      }
    }
  ]
}
```

**Checklista:**
- [ ] Alla geometrier är rätt typ (Point/LineString/Polygon)?
- [ ] Koordinater är i WGS84 [lon, lat]?
- [ ] Alla polygoner är stängda (sista punkt = första)?
- [ ] Ingen null-värden eller strukturfel?

### **Steg 2: Validera innan publicering**

Använd Open Data Orbit Labs:
- Kolla in din GeoJSON i Labs-validatorn
- Säkerställ att den är grammatiskt korrekt
- Test med en kartvisare (t.ex. geojson.io)

**Tips:**
- https://geojson.io: visualisera din GeoJSON direkt
- Online validators finns många. Sök "GeoJSON validator"

### **Steg 3: Lagra och länka**

- Spara filen som `.geojson` (eller `.json`)
- Lägg upp på en webbserver
- Länka via dataportal.se-metadata (accessURL eller downloadURL)
- Ange format: "GeoJSON"

### **Steg 4: Dokumentera**

I metadatan, förklara:
- Vilka koordinater är inkluderade (WGS84)?
- Vad varje property betyder?
- Hur ofta uppdateras datan?
- Vilken licens?

**Exempel (förenklat DCAT-AP-SE):**
```
Titel: "Lediga tomter i Växjö"
Beskrivning: "Lediga kommunala tomter tillgängliga för etablering. 
GeoJSON-format, WGS84-koordinater. Uppdateras veckovis."
Format: "GeoJSON"
Licens: "CC0"
```

---

## Vanliga fallgropar med GeoJSON

### **Koordinatordning: [lon, lat] inte [lat, lon]**

❌ **Fel:**
```json
"coordinates": [56.8770, 15.2711]  // Breddgrad först!
```

✅ **Rätt:**
```json
"coordinates": [15.2711, 56.8770]  // Längdgrad först!
```

**Hukommelsehör:** GeoJSON följer matematisk konvention: x först (longitud), sedan y (latitud).

### **Ogiltiga polygoner (inte stängda)**

❌ **Fel:**
```json
"coordinates": [
  [15.0, 56.0],
  [15.1, 56.0],
  [15.1, 56.1]  // Inte samma som första punkt!
]
```

✅ **Rätt:**
```json
"coordinates": [
  [15.0, 56.0],
  [15.1, 56.0],
  [15.1, 56.1],
  [15.0, 56.1],
  [15.0, 56.0]  // Samma som första – stängd polygon
]
```

### **Koordinater i fel system**

Du konverterade från SWEREF99 men glömde ändra till WGS84. Resultatet: Data visas på helt fel ställe på världskartan.

**Lösning:** Verifiera koordinater med t.ex. geojson.io.

### **För stora filer**

GeoJSON kan bli många MB för stora områden. Lösning:
- Splitta på regioner eller kommuner
- Komprimera med GZIP (.geojson.gz)
- Erbjud också ett API-endpoints för filtrering

### **Saknade eller felaktiga properties**

- Some features har `"namn": null`, andra har den inte alls
- Användare kan inte förlita sig på data

**Lösning:** Använd en schema-validator (t.ex. JSON Schema) för att kräva att alla properties fyller in korrekt.

---

## Verktyg för geodata

### **Visualization & Testing**
- **geojson.io**: visualisera och redigera GeoJSON direkt i webbläsaren
- **Leaflet** – visualisering i webbar
- **Mapbox** – professionell kartleverantör

### **Konvertering**
- **GDAL/OGR** – universellt verktyg för geodata-konvertering
- **ogr2ogr** – kommandoradverktyg
- **QGIS** – gratis desktop-GIS (kan exportera till GeoJSON)

### **Validering**
- **Open Data Orbit Labs** – validera GeoJSON lokalt
- **JSON Schema validators** – kolla struktur

### **Python-bibliotek**
- **GeoPandas** – läs och bearbeta geografisk data
- **Folium** – gör kartor från GeoJSON
- **Shapely** – geometri-operationer

---

## Praktisk workflow – från Shapefile till GeoJSON

Många organisationer har data i Shapefiles (klassisk GIS-format). Här är hur du omvandlar:

**Med QGIS (GUI):**
1. Öppna Shapefile i QGIS
2. Högerklicka på lager → "Export As"
3. Välj GeoJSON format
4. Verifiera att koordinatsystem är rätt (bör vara WGS84)
5. Spara

**Med GDAL (kommandorad):**
```bash
ogr2ogr -f GeoJSON output.geojson input.shp
```

**Med Python + GeoPandas:**
```python
import geopandas as gpd

# Läs Shapefile
gdf = gpd.read_file('data/tomter.shp')

# Säkerställ WGS84
gdf = gdf.to_crs('EPSG:4326')

# Spara som GeoJSON
gdf.to_file('tomter.geojson', driver='GeoJSON')
```

---

## Nästa steg

**Vill du förstå hur du publicerar denna data?**  
Se [Att publicera data – steg för steg](./att-publicera-data-steg-for-steg/).

**Vill du lära mer om API:er för geodata?**  
Se [API:er för öppna data i Sverige](./apier-for-oppna-data-i-sverige/).

**Vill du höja datakvaliteten?**  
Se [Datakvalitet & MQA](./datakvalitet-och-mqa/).

**Sitter du fast med din GeoJSON?**  
Ställ frågor i communityt – GIS-arbete kan vara tricky:  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions

---

## Resurser

- **GeoJSON spec:** https://geojson.org/
- **Leaflet (kartvisning):** https://leafletjs.com/
- **QGIS (gratis GIS-verktyg):** https://www.qgis.org/
- **GeoPandas (Python):** https://geopandas.org/
- **geojson.io (testning):** https://geojson.io/

---

**Har du publicerat bra GeoJSON-data? Dela gärna tips och fallgropar för att hjälpa andra!**  
👉 https://github.com/MelissaSkywalkz/open-data-orbit/discussions
