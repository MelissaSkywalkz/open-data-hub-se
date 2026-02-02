export const getLabs = (base: string) => [
  {
    title: "GeoJSON Preview Map",
    description: "Förhandsvisa GeoJSON + CSV på mörk basemap med export och attributpanel.",
    url: `${base}labs/geojson-preview/`,
    badge: "LAB",
  },
  {
    title: "WMS Preview",
    description: "Förhandsvisa WMS-lager via GetCapabilities och rendera dem som overlay.",
    url: `${base}labs/wms-preview/`,
    badge: "LAB",
  }
];
