'use client';

import dynamic from 'next/dynamic';
const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  return <MapContainer />;
}
