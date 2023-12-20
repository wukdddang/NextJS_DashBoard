'use client';

import { useSearchParams } from 'next/navigation';

import dynamic from 'next/dynamic';
import useGlobalStore from '@/app/store/GlobalStore';
import EarthquakesTable from '@/app/components/organisms/EarthquakesTable';
import EarthquakePointTable from '../components/organisms/EarthquakePointTable';
const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  const searchParams = useSearchParams();
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);

  const currentEqPoint = currentEqPoints.find((eqPoint) => {
    if (eqPoint.location === searchParams.get('location')) {
      return eqPoint;
    }
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <MapContainer />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      {currentEqPoint ? (
                        <EarthquakePointTable currentEqPoint={currentEqPoint} />
                      ) : (
                        <EarthquakesTable tableTitle="Unconfirmed Earthquakes" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <EarthquakesTable tableTitle="Histories of Last Earthquakes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
