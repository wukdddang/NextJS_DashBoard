'use client';

import dynamic from 'next/dynamic';
import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';

import Info from '@/app/(dashboard)/@info/page';
import LastInfo from '@/app/(dashboard)/@lastInfo/page';

const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  const pathName = usePathname();

  return (
    <>
      <Breadcrumb pathName={pathName} />
      <div className="row">
        <div className="col-lg-6">
          <MapContainer />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">{<Info />}</div>
            <div className="col-lg-12">{<LastInfo />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
