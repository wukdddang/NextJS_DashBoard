export const MAP_TILES = {
  google_satellite: {
    url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    options: {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
  },
  leaflet_osm: {
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {},
  },
};

export type KIND_OF_MAP_TILES = keyof typeof MAP_TILES;
