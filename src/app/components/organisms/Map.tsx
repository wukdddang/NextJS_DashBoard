'use client';

import { CSSProperties } from 'react';
import * as L from 'leaflet';
import TileLayerButtonsContainer from '@/app/containers/TileLayerButtonsContainer';
import { KIND_OF_MAP_TILES, MAP_TILES } from '@/app/common/constants/MapTiles';

const mapStyles: CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
  borderRadius: '20px',
  transition: '0.3s ease',
  top: 0,
  zIndex: 0,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
};

const ALL_MAP_TILES: KIND_OF_MAP_TILES[] = Object.keys(MAP_TILES) as KIND_OF_MAP_TILES[];

type Props = {
  currentMap: L.Map | null;
};

export default function Map({ currentMap }: Props) {
  return (
    <div className="position-relative">
      <div id="map" style={{ ...mapStyles }} />
      <TileLayerButtonsContainer layers={ALL_MAP_TILES} />
    </div>
  );
}
