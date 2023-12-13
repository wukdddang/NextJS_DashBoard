import * as L from "leaflet";

export const isCurrentMapExist = (
  currentMap: L.Map | null
): currentMap is L.Map => {
  return currentMap !== null;
};

export const isTileLayerExist = (
  currentTileLayer: L.TileLayer | null
): currentTileLayer is L.TileLayer => {
  return currentTileLayer !== null;
};
