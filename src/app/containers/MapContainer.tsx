'use client';

import * as L from 'leaflet';
import { MutableRefObject, useEffect, useRef } from 'react';
import Map from '@/app/components/organisms/Map';
import { MAP_TILES } from '@/constants/MapTiles';
import { isCurrentMapExist, isTileLayerExist } from '@/types/TypePredicate';

export default function MapContainer() {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef: MutableRefObject<L.TileLayer | null> = useRef(null);

  const currentTileLayer = 'google_satellite';

  const mapParams: L.MapOptions = {
    center: [36, 127.5],
    zoom: 8,
    zoomControl: false,
  };

  useEffect(() => {
    mapRef.current = L.map('map', mapParams);

    tileLayerRef.current = L.tileLayer(
      MAP_TILES[currentTileLayer].url,
      MAP_TILES[currentTileLayer].options
    ).addTo(mapRef.current);

    // setCurrentMap(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
    // eslint-disable-next-line
  }, [mapRef]);

  useEffect(() => {
    if (isTileLayerExist(tileLayerRef.current)) {
      tileLayerRef.current.remove();
    }

    if (isCurrentMapExist(mapRef.current)) {
      tileLayerRef.current = L.tileLayer(
        MAP_TILES[currentTileLayer].url,
        MAP_TILES[currentTileLayer].options
      ).addTo(mapRef.current);
    }
  }, [currentTileLayer]);

  // useEffect(() => {
  //   setCurrentMap(mapRef.current);
  // }, []);

  return <Map currentMap={mapRef.current} />;
}
