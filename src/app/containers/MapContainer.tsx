'use client';

import * as L from 'leaflet';
import { MutableRefObject, useEffect, useRef } from 'react';
import Map from '@/app/components/organisms/Map';
import { MAP_TILES } from '@/app/common/constants/MapTiles';
import { isCurrentMapExist, isTileLayerExist } from '@/app/types/TypePredicate';
import useGlobalStore from '@/app/store/GlobalStore';
import generateRippleRing from '@/app/utils/generateRippleRing';
import { useRouter } from 'next/navigation';

export const MAP_CENTER: L.LatLngExpression = [36, 105.5];
export const MAP_ZOOM = 3;
export const MAP_FLY_TO_SPEED = {
  duration: 1,
  // easeLinearity: 0.1,
  animate: true,
};

export default function MapContainer() {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef: MutableRefObject<L.TileLayer | null> = useRef(null);
  const currentTileLayer = useGlobalStore((state) => state.currentTileLayer);
  const currentMap = useGlobalStore((state) => state.currentMap);
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);
  const setCurrentMap = useGlobalStore((state) => state.setCurrentMap);
  // const setCurrentEqPoints = useGlobalStore((state) => state.setCurrentEqPoints);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const router = useRouter();

  const mapParams: L.MapOptions = {
    center: MAP_CENTER,
    zoom: MAP_ZOOM,
    zoomControl: false,
    maxBounds: L.latLngBounds(
      L.latLng(-90, -180), // 남서쪽 경계
      L.latLng(90, 180) // 북동쪽 경계
    ),
    maxBoundsViscosity: 0.9, // 경계를 벗어날 때의 "탄성" 설정 (0에서 1 사이의 값)
  };

  useEffect(() => {
    mapRef.current = L.map('map', mapParams);

    tileLayerRef.current = L.tileLayer(
      MAP_TILES[currentTileLayer].url,
      MAP_TILES[currentTileLayer].options
    ).addTo(mapRef.current);

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
  }, [currentTileLayer, currentMap]);

  useEffect(() => {
    if (isCurrentMapExist(mapRef.current)) {
      const currentMap = mapRef.current;

      currentEqPoints.map((point) => {
        return generateRippleRing({
          id: point.id,
          currentMap,
          markersRef,
          mag: point.mag,
          location: point.location,
          lat: point.lat,
          lng: point.lng,
          createdAt: point.createdAt,
          isRead: point.isRead,
          status: point.status,
          router,
        });
      });
    }
  }, [currentEqPoints, router]);

  useEffect(() => {
    setCurrentMap(mapRef.current);
  }, []);

  return <Map currentMap={mapRef.current} />;
}
