'use client';

import React from 'react';
import Breadcrumb from '../components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HistoryPage() {
  const pathName = usePathname();

  return (
    <>
      <Breadcrumb pathName={pathName} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-md-flex">
                  <div>
                    <h4 className="card-title">Top Selling Products</h4>
                    <h5 className="card-subtitle">Overview of Top Selling Items</h5>
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
                      <tr>
                        <th className="border-top-0">Products</th>
                        <th className="border-top-0">License</th>
                        <th className="border-top-0">Support Agent</th>
                        <th className="border-top-0">Technology</th>
                        <th className="border-top-0">Tickets</th>
                        <th className="border-top-0">Sales</th>
                        <th className="border-top-0">Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="tw-mr-10">
                              <Link href="#" className="btn btn-circle d-flex btn-info text-white">
                                EA
                              </Link>
                            </div>
                            <div className="">
                              <h4 className="font-16 tw-mb-0">Elite Admin</h4>
                            </div>
                          </div>
                        </td>
                        <td>Single Use</td>
                        <td>John Doe</td>
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
                            <div className="tw-mr-10">
                              <Link
                                href="#"
                                className="btn btn-circle d-flex btn-orange text-white"
                              >
                                MA
                              </Link>
                            </div>
                            <div className="">
                              <h4 className="font-16 tw-mb-0">Monster Admin</h4>
                            </div>
                          </div>
                        </td>
                        <td>Single Use</td>
                        <td>Venessa Fern</td>
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
                              <Link
                                href="#"
                                className="btn btn-circle d-flex btn-success text-white"
                              >
                                MP
                              </Link>
                            </div>
                            <div className="">
                              <h4 className="font-16 tw-mb-0">Material Pro Admin</h4>
                            </div>
                          </div>
                        </td>
                        <td>Single Use</td>
                        <td>John Doe</td>
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
                              <Link
                                href="#"
                                className="btn btn-circle d-flex btn-purple text-white"
                              >
                                AA
                              </Link>
                            </div>
                            <div className="">
                              <h4 className="font-16 tw-mb-0">Ample Admin</h4>
                            </div>
                          </div>
                        </td>
                        <td>Single Use</td>
                        <td>John Doe</td>
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
    </>
  );
}
