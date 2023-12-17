'use client';

import { CSSProperties } from 'react';
import * as L from 'leaflet';
import TileLayerButtonsContainer from '@/app/containers/TileLayerButtonsContainer';

const mapStyles: CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  borderRadius: '20px',
  transition: '0.3s ease',
  top: 0,
  zIndex: 0,
  height: '800px',
};

type Props = {
  currentMap: L.Map | null;
  onResetMap: () => void;
  // isSideBarOpened: boolean;
  // isROIEnabled: boolean;
  // setROIEnable: (currentROI: boolean) => void;
};

export default function Map({ currentMap, onResetMap }: Props) {
  return (
    <div className="position-relative">
      <div id="map" style={{ ...mapStyles }} />
      <button
        className="btn btn-primary tw-absolute tw-bottom-[5%] tw-left-[3%] tw-text-white"
        onClick={onResetMap}
      >
        Reset View
      </button>
      <TileLayerButtonsContainer layers={['google_satellite', 'leaflet_dark', 'leaflet_osm']} />
    </div>
  );
}
