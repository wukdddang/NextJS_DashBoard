'use client';

import * as L from 'leaflet';
import { MutableRefObject, useEffect, useRef } from 'react';
import Map from '@/app/components/organisms/Map';
import { MAP_TILES } from '@/app/constants/MapTiles';
import { isCurrentMapExist, isTileLayerExist } from '@/app/types/TypePredicate';
import useGlobalStore from '@/app/store/GlobalStore';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="pulse"></div>',
  iconSize: [100, 100], // 최대 크기로 설정
});

export default function MapContainer() {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef: MutableRefObject<L.TileLayer | null> = useRef(null);
  const currentMap = useGlobalStore((state) => state.currentMap);
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);
  const setCurrentMap = useGlobalStore((state) => state.setCurrentMap);
  const setCurrentEqPoints = useGlobalStore((state) => state.setCurrentEqPoints);

  const currentTileLayer = 'google_satellite';

  const mapParams: L.MapOptions = {
    center: [36, 110.5],
    zoom: 2,
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
      // currentEqPoints 배열에 있는 각 지점에 대한 마커를 생성하고 맵에 추가합니다.
      currentEqPoints.forEach((point) => {
        const marker = L.marker([point.lat, point.lng], { icon: customIcon }).addTo(mapRef.current);

        marker.on('click', () => {
          mapRef.current?.setView(marker.getLatLng(), 10); // 10은 새로운 줌 레벨입니다.
        });
      });
    }
  }, [currentEqPoints]);

  useEffect(() => {
    setCurrentMap(mapRef.current);
    setCurrentEqPoints([
      { lat: 36.3504, lng: 127.3845, createdAt: '2023-12-04T05:24:34' },
      { lat: 69.0648, lng: 18.5151, createdAt: '2024-01-01T11:49:32' },
      { lat: 8.0883, lng: 77.5385, createdAt: '2024-01-04T01:23:19' },
    ]);
  }, []);

  return <Map currentMap={mapRef.current} />;
}
