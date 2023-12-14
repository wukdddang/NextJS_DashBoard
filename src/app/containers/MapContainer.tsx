'use client';

import * as L from 'leaflet';
import { MutableRefObject, useEffect, useRef } from 'react';
import Map from '@/app/components/organisms/Map';
import { MAP_TILES } from '@/app/constants/MapTiles';
import { isCurrentMapExist, isTileLayerExist } from '@/app/types/TypePredicate';
import useGlobalStore from '@/app/store/GlobalStore';
import RippleRing from '@/app/components/organisms/RippleRing';
// import useMapEventHandler from '@/app/hooks/useMapEventHandler';
import { useRouter } from 'next/navigation';

export default function MapContainer() {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef: MutableRefObject<L.TileLayer | null> = useRef(null);
  const currentMap = useGlobalStore((state) => state.currentMap);
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);
  const setCurrentMap = useGlobalStore((state) => state.setCurrentMap);
  const setCurrentEqPoints = useGlobalStore((state) => state.setCurrentEqPoints);
  // const { handleRouteDetail } = useMapEventHandler();
  const router = useRouter();

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
      const currentMap = mapRef.current;

      currentEqPoints.map((point) => {
        return RippleRing({
          currentMap,
          mag: point.mag,
          location: point.location,
          lat: point.lat,
          lng: point.lng,
          createdAt: point.createdAt,
          isRead: point.isRead,
          imageStatus: point.imageStatus,
          // handleRouteDetail,
          router,
        });
        // return (
        //   <RippleRing
        //     currentMap={currentMap}
        //     mag={point.mag}
        //     location={point.location}
        //     lat={point.lat}
        //     lng={point.lng}
        //     createdAt={point.createdAt}
        //     isRead={point.isRead}
        //     imageStatus={point.imageStatus}
        //   />
        // );
      });
    }
  }, [currentEqPoints]);

  useEffect(() => {
    setCurrentMap(mapRef.current);

    // 데이터 추가 로직
    setCurrentEqPoints([
      {
        mag: '6.6',
        location: 'Daejeon, Korea',
        lat: 36.3504,
        lng: 127.3845,
        createdAt: '2023-12-04T05:24:34',
        isRead: false,
        imageStatus: 'Collecting1',
      },
      {
        mag: '6.5',
        location: 'Bardufoss, Norway',
        lat: 69.0648,
        lng: 18.5151,
        createdAt: '2024-01-01T11:49:32',
        isRead: false,
        imageStatus: 'Collecting',
      },
      {
        mag: '6.5',
        location: 'Kanyakumari, India',
        lat: 8.0883,
        lng: 77.5385,
        createdAt: '2024-01-04T01:23:19',
        isRead: false,
        imageStatus: 'Waiting',
      },
    ]);
  }, []);

  return <Map currentMap={mapRef.current} />;
}
