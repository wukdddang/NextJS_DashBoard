'use client';

import React from 'react';
// import Breadcrumb from '@/app/components/organisms/Breadcrumb';
// import { usePathname } from 'next/navigation';
import MainWrapper from '@/app/components/organisms/MainWrapper';

export default function HistoryPage() {
  // const pathName = usePathname();

  return (
    <>
      <MainWrapper>
        <div className="page-wrapper">
          {/* <Breadcrumb pathname={pathName} /> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-md-flex">
                      <div>
                        <h4 className="card-title">Histories of Last Earthquakes</h4>
                      </div>
                      <div className="ms-auto">
                        <div className="dl">
                          <select className="form-select shadow-none">
                            <option defaultValue="0">Monthly</option>
                            <option value="1">Daily</option>
                            <option value="2">Weekly</option>
                            <option value="3">Yearly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table mb-0 table-hover align-middle text-nowrap">
                        <thead>
                          <tr className="">
                            <th rowSpan={2} colSpan={1} className="border-top-0">
                              Magnitude
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Date
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Location
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Lat.
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Lng.
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Processing Status
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Algorithms
                            </th>
                            <th rowSpan={2} className="border-top-0">
                              Platform
                            </th>
                            <th
                              colSpan={2}
                              rowSpan={1}
                              className="border-top-0  border-bottom-0 tw-text-center"
                            >
                              Processed Data
                            </th>
                          </tr>
                          <tr>
                            <th className="border-top-0">Pre-Data</th>
                            <th className="border-top-0">Post-Data</th>
                            <th className="border-top-0">Downloads</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-circle d-flex btn-info text-white">
                                  6.5
                                </a>
                              </div>
                            </td>
                            <td>2024-01-04T01:23:19</td>
                            <td>Kanyakumari, India</td>
                            <td>8.0844°N</td>
                            <td>77.5495°E</td>
                            <td>
                              <label className="badge tw-bg-WARN">Waiting</label>
                            </td>
                            <td>D-InSAR</td>
                            <td>
                              <label className="badge bg-danger">Angular</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="tw-mb-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-circle d-flex btn-orange text-white">
                                  6.5
                                </a>
                              </div>
                            </td>
                            <td>2024-01-01T11:49:32</td>
                            <td>Bardufoss, Norway</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>
                              <label className="badge bg-info">Vue Js</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="tw-mb-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="tw-mr-10">
                                  <a
                                    href="#"
                                    className="btn btn-circle d-flex btn-success text-white"
                                  >
                                    6.6
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>2023-12-04T05:24:34</td>
                            <td>Daejeon, Korea</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>
                              <label className="badge bg-success">Bootstrap</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="tw-mb-0">$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="tw-mr-10">
                                  <a
                                    href="#"
                                    className="btn btn-circle d-flex btn-purple text-white"
                                  >
                                    6.5
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>2023-12-01T02:41:31</td>
                            <td>Aira, Japan</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>Kanyakumari, India</td>
                            <td>
                              <label className="badge bg-purple">React</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 className="tw-mb-0">$2850.06</h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
