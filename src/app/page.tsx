import Header from '@/app/components/organisms/Header';
// import Map from "./components/Map";
import Image from 'next/image';
import Link from 'next/link';
import SideBarContainer from '@/app/containers/SideBarContainer';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Home() {
  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <Header />
      <SideBarContainer />
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row align-items-center">
            <div className="col-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 d-flex align-items-center">
                  <li className="breadcrumb-item">
                    <a href="#" className="link">
                      <i className="mdi mdi-home-outline fs-4"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h1 className="tw-h1 tw-text-3xl tw-mb-0 fw-bold">Dashboard</h1>
            </div>
            {/* <div className="col-6">
              <div className="text-end upgrade-btn">
                <Link
                  href="https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/"
                  className="btn btn-primary text-white"
                  target="_blank"
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <MapContainer />
                  {/* <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">Sales Summary</h4>
                      <h6 className="card-subtitle">Ample admin Vs Pixel admin</h6>
                    </div>
                    <div className="ms-auto d-flex no-block align-items-center">
                      <ul className="list-inline dl d-flex align-items-center tw-mr-15 tw-mb-0">
                        <li className="list-inline-item d-flex align-items-center text-info">
                          <i className="fa fa-circle font-10 me-1"></i> Ample
                        </li>
                        <li className="list-inline-item d-flex align-items-center text-primary">
                          <i className="fa fa-circle font-10 me-1"></i> Pixel
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Weekly Stats</h4>
                  <h6 className="card-subtitle">Average sales</h6>
                  <div className="mt-5 pb-3 d-flex align-items-center">
                    <span className="btn btn-primary btn-circle d-flex align-items-center">
                      <i className="mdi mdi-cart-outline fs-4"></i>
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Top Sales</h5>
                      <span className="text-muted fs-6">Johnathan Doe</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-warning btn-circle d-flex align-items-center">
                      <i className="mdi mdi-star-circle fs-4"></i>
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Best Seller</h5>
                      <span className="text-muted fs-6">MaterialPro Admin</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-success btn-circle d-flex align-items-center">
                      <i className="mdi mdi-comment-multiple-outline text-white fs-4"></i>
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Most Commented</h5>
                      <span className="text-muted fs-6">Ample Admin</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-info btn-circle d-flex align-items-center">
                      <i className="mdi mdi-diamond fs-4 text-white"></i>
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Top Budgets</h5>
                      <span className="text-muted fs-6">Sunil Joshi</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+15%</span>
                    </div>
                  </div>

                  <div className="pt-3 d-flex align-items-center">
                    <span className="btn btn-danger btn-circle d-flex align-items-center">
                      <i className="mdi mdi-content-duplicate fs-4 text-white"></i>
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Best Designer</h5>
                      <span className="text-muted fs-6">Nirav Joshi</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                                <Link
                                  href="#"
                                  className="btn btn-circle d-flex btn-info text-white"
                                >
                                  EA
                                </Link>
                              </div>
                              <div className="">
                                <h4 className="tw-mb-0 font-16">Elite Admin</h4>
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
                                <h4 className="tw-mb-0 font-16">Monster Admin</h4>
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
                                <h4 className="tw-mb-0 font-16">Material Pro Admin</h4>
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
                                <h4 className="tw-mb-0 font-16">Ample Admin</h4>
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
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Recent Comments</h4>
                </div>
                <div className="comment-widgets scrollable">
                  <div className="d-flex flex-row comment-row tw-mt-0">
                    <div className="p-2">
                      <Image
                        src="/assets/images/users/1.jpg"
                        alt="user"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <h6 className="font-medium">James Anderson</h6>
                      <span className="tw-mb-15 d-block">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.{' '}
                      </span>
                      <div className="comment-footer">
                        <span className="text-muted float-end">April 14, 2021</span>{' '}
                        <span className="badge bg-primary">Pending</span>{' '}
                        <span className="action-icons">
                          <Link href="#">
                            <i className="ti-pencil-alt"></i>
                          </Link>
                          <Link href="#">
                            <i className="ti-check"></i>
                          </Link>
                          <Link href="#">
                            <i className="ti-heart"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row comment-row">
                    <div className="p-2">
                      <Image
                        src="/assets/images/users/4.jpg"
                        alt="user"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text active w-100">
                      <h6 className="font-medium">Michael Jorden</h6>
                      <span className="tw-mb-15 d-block">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.{' '}
                      </span>
                      <div className="comment-footer ">
                        <span className="text-muted float-end">April 14, 2021</span>
                        <span className="badge bg-success">Approved</span>
                        <span className="action-icons active">
                          <Link href="#">
                            <i className="ti-pencil-alt"></i>
                          </Link>
                          <Link href="#">
                            <i className="icon-close"></i>
                          </Link>
                          <Link href="#">
                            <i className="ti-heart text-danger"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row comment-row">
                    <div className="p-2">
                      <Image
                        src="/assets/images/users/5.jpg"
                        alt="user"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment-text w-100">
                      <h6 className="font-medium">Johnathan Doeting</h6>
                      <span className="tw-mb-15 d-block">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.{' '}
                      </span>
                      <div className="comment-footer">
                        <span className="text-muted float-end">April 14, 2021</span>
                        <span className="badge bg-danger">Rejected</span>
                        <span className="action-icons">
                          <Link href="#">
                            <i className="ti-pencil-alt"></i>
                          </Link>
                          <Link href="#">
                            <i className="ti-check"></i>
                          </Link>
                          <Link href="#">
                            <i className="ti-heart"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Temp Guide</h4>
                  <div className="d-flex align-items-center flex-row tw-mt-30">
                    <div className="display-5 text-info">
                      <i className="wi wi-day-showers"></i>
                      <span>
                        73<sup>°</sup>
                      </span>
                    </div>
                    <div className="tw-ml-10">
                      <h3 className="tw-mb-0">Saturday</h3>
                      <small>Ahmedabad, India</small>
                    </div>
                  </div>
                  <table className="table no-border mini-table tw-mt-20">
                    <tbody>
                      <tr>
                        <td className="text-muted">Wind</td>
                        <td className="font-medium">ESE 17 mph</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Humidity</td>
                        <td className="font-medium">83%</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Pressure</td>
                        <td className="font-medium">28.56 in</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Cloud Cover</td>
                        <td className="font-medium">78%</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="row list-style-none text-center tw-mt-30">
                    <li className="col-3">
                      <h4 className="text-info">
                        <i className="wi wi-day-sunny"></i>
                      </h4>
                      <span className="d-block text-muted">09:30</span>
                      <h3 className="tw-mt-5">
                        70<sup>°</sup>
                      </h3>
                    </li>
                    <li className="col-3">
                      <h4 className="text-info">
                        <i className="wi wi-day-cloudy"></i>
                      </h4>
                      <span className="d-block text-muted">11:30</span>
                      <h3 className="tw-mt-5">
                        72<sup>°</sup>
                      </h3>
                    </li>
                    <li className="col-3">
                      <h4 className="text-info">
                        <i className="wi wi-day-hail"></i>
                      </h4>
                      <span className="d-block text-muted">13:30</span>
                      <h3 className="tw-mt-5">
                        75<sup>°</sup>
                      </h3>
                    </li>
                    <li className="col-3">
                      <h4 className="text-info">
                        <i className="wi wi-day-sprinkle"></i>
                      </h4>
                      <span className="d-block text-muted">15:30</span>
                      <h3 className="tw-mt-5">
                        76<sup>°</sup>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center">
          All Rights Reserved by Flexy Admin. Designed and Developed by{' '}
          <a href="https://www.wrappixel.com">WrapPixel</a>.
        </footer>
      </div>
    </div>
  );
}
