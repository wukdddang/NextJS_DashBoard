'use client';

import { useSearchParams } from 'next/navigation';

import dynamic from 'next/dynamic';
import useGlobalStore from '@/app/store/GlobalStore';
import EarthquakePointTable from '@/app/components/organisms/EarthquakePointTable';
import { useEffect, useState } from 'react';
import { getUsgsList } from '@/app/_lib/getUsgsList';
import EarthquakesTableContainer, {
  EarthquakesTableType,
} from '@/app/containers/EarthquakesTableContainer';
import EarthquakePointTableContainer from '../containers/EarthquakePointTableContainer';
// import { useRouter } from 'next/navigation';
const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  const searchParams = useSearchParams();
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);
  const setCurrentEqPoints = useGlobalStore((state) => state.setCurrentEqPoints);
  const historyTableData = useGlobalStore((state) => state.historyTableData);
  const setHistoryTableData = useGlobalStore((state) => state.setHistoryTableData);
  const [isReadEarthquakes, setIsReadEarthquakes] = useState<EarthquakesTableType[]>(
    [] as EarthquakesTableType[]
  );

  // const router = useRouter();

  const currentEqPoint = currentEqPoints.find((eqPoint) => {
    if (
      eqPoint.location === searchParams.get('location') &&
      eqPoint.createdAt === searchParams.get('createdAt') &&
      eqPoint.mag === searchParams.get('mag')
    ) {
      return eqPoint;
    }
  });

  // USGS API 호출
  useEffect(() => {
    getUsgsList().then((res) => {
      if (!res) {
        return;
      }

      const newEqPoints = res?.data.map((item) => {
        return {
          id: item.id,
          createdAt: item.properties.createdAt,
          date: item.properties.createdAt,
          isRead: item.is_read,
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0],
          location: item.properties.place,
          mag: String(item.properties.mag),
          status: item.status,
        };
      });

      // history earthquakes용 데이터
      setHistoryTableData(newEqPoints);
      // unconfirmed earthquakes용 데이터
      // setCurrentEqPoints(newEqPoints.filter((point) => !point.isRead));
      setCurrentEqPoints(newEqPoints);
    });
  }, []);

  useEffect(() => {
    // TODO: 리팩토링할 때 타입 단언 수정하기
    const filteredEqPoints: EarthquakesTableType[] = currentEqPoints.map((eqPoint) => {
      if (!eqPoint.isRead) {
        return {
          mag: eqPoint.mag,
          date: eqPoint.createdAt,
          location: eqPoint.location,
          status: eqPoint.status,
        };
      }
    }) as EarthquakesTableType[];

    setIsReadEarthquakes(filteredEqPoints);
  }, [currentEqPoints]);

  return (
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
                      <EarthquakePointTableContainer currentEqPoint={currentEqPoint} />
                    ) : (
                      <EarthquakesTableContainer
                        data={isReadEarthquakes}
                        tableTitle="Unconfirmed Earthquakes"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <EarthquakesTableContainer
                    data={historyTableData}
                    tableTitle="Histories of Last Earthquakes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
