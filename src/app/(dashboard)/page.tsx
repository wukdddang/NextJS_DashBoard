'use client';

// import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname, useSearchParams } from 'next/navigation';

import dynamic from 'next/dynamic';
import useGlobalStore from '@/app/store/GlobalStore';
import EarthquakesTable from '@/app/components/organisms/EarthquakeDashboard';
const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentEqPoints = useGlobalStore((state) => state.currentEqPoints);

  const currentEqPoint = currentEqPoints.find((eqPoint) => {
    if (eqPoint.location === searchParams.get('location')) {
      return eqPoint;
    }
  });

  return (
    <>
      {/* <Breadcrumb pathname={pathname} /> */}
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
                        <>
                          <div className="tw-flex tw-w-full tw-items-center tw-pb-4">
                            <h4 className="tw-mr-4 tw-text-[54px] tw-font-light tw-tracking-[-1px]">
                              {currentEqPoint?.mag}
                            </h4>
                            <p className="tw-flex tw-flex-col">
                              <span className="tw-text-[32px] tw-font-[300] tw-tracking-[-1px]">
                                {currentEqPoint?.location}
                              </span>
                              <span className="tw-text-[18px] tw-tracking-[-1px] tw-opacity-50">
                                {currentEqPoint?.createdAt}
                              </span>
                              {currentEqPoint && (
                                <span className="tw-text-[18px] tw-tracking-[-1px] tw-opacity-50">
                                  latitude: {currentEqPoint?.lat}, longitude: {currentEqPoint?.lng}
                                </span>
                              )}
                            </p>
                          </div>
                          <table className="table mb-0 table-hover align-middle text-nowrap">
                            <thead className="tw-border-t-2">
                              <tr>
                                <th rowSpan={2} colSpan={1} className="border-top-0">
                                  Status
                                </th>
                                <th rowSpan={2} colSpan={1} className="border-top-0">
                                  Phase
                                </th>

                                <th rowSpan={2} colSpan={1} className="border-top-0">
                                  Data Acquisition / Expecting Date
                                </th>
                                <th rowSpan={2} colSpan={1} className="border-top-0">
                                  Processing Algorithms
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="tw-mr-2">
                                      <a
                                        href="#"
                                        className="btn btn-success btn-circle d-flex align-items-center"
                                      >
                                        <i className="mdi mdi-check text-white fs-4"></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>Pre-Earthquake</td>
                                <td>
                                  <span className="badge tw-bg-INFO">2024-01-01T01:23:19</span>
                                </td>
                                <td>
                                  {/* <div className="d-flex justify-content-between">
                                  <span className="badge bg-danger">Failed</span>
                                </div> */}
                                  -
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="tw-mr-2">
                                      <a
                                        href="#"
                                        className="btn btn-circle d-flex align-items-center tw-bg-INFO"
                                      >
                                        <i className="mdi mdi-exclamation text-white fs-4"></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>Post-Earthquake</td>
                                <td>
                                  <span className="badge tw-bg-INFO">2024-01-13T01:23:19</span>
                                </td>
                                <td>
                                  {/* <div className="d-flex justify-content-between">
                                  <span className="badge bg-danger">Failed</span>
                                </div> */}
                                  -
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="tw-mr-2">
                                      <a
                                        href="#"
                                        className="btn btn-circle d-flex align-items-center tw-bg-ICON"
                                      >
                                        <i className="mdi mdi-exclamation text-white fs-4"></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>SAR Image Process</td>
                                <td>
                                  {/* <span className="badge tw-bg-ICON">2024-01-01T01:23:19</span> */}
                                  -
                                </td>
                                <td>
                                  {/* <div className="d-flex justify-content-between">
                                  <span className="badge bg-danger">Failed</span>
                                </div> */}
                                  <div className="tw-flex tw-gap-1">
                                    <span className="badge tw-bg-SUCCESS">D-InSAR</span>
                                    <span className="badge tw-bg-SUCCESS">PS-InSAR</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="tw-mr-2">
                                      <a
                                        href="#"
                                        className="btn btn-circle d-flex align-items-center tw-bg-ICON"
                                      >
                                        <i className="mdi mdi-flag-outline text-white fs-4"></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>SARDIP Event Driven Process</td>
                                <td>-</td>
                                <td>
                                  {/* <div className="d-flex justify-content-between">
                                  <span className="badge bg-danger">Failed</span>
                                </div> */}
                                  -
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </>
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
