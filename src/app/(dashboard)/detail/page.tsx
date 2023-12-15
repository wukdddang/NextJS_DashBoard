'use client';

import dynamic from 'next/dynamic';
import Breadcrumb from '@/app/components/organisms/Breadcrumb';
import { usePathname } from 'next/navigation';

const MapContainer = dynamic(() => import('@/app/containers/MapContainer'), { ssr: false });

export default function Page() {
  const pathName = usePathname();

  return (
    <>
      <Breadcrumb pathName={pathName} />
      <div className="row">
        <div className="col-lg-8">
          <MapContainer />
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
    </>
  );
}
