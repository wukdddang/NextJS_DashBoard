import getPascalCase from '@/app/utils/getPascalCase';
import Link from 'next/link';
// import CurrentProcessInfo from './CurrentProcessInfo';
// import useGlobalStore from '@/app/store/GlobalStore';

export default function Breadcrumb({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const pagename = pathname === '/' ? 'Home' : getPascalCase(pathname.replace('/', ''));

  return (
    <div className="page-breadcrumb tw-border-b-2">
      <div className="row align-items-center">
        <div className="col-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 d-flex align-items-center">
              <li className="breadcrumb-item">
                <Link href="/" className="link">
                  <i className="mdi mdi-home-outline fs-4"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pagename}
              </li>
            </ol>
          </nav>
          <h1 className="tw-h1 fw-bold tw-mb-0 tw-text-3xl">{pagename}</h1>
        </div>
        <div className="col-6 tw-flex tw-justify-end">
          {/* <CurrentProcessInfo
            processStatus={processStatus}
            startTime={new Date('2023-12-12T05:24:34')}
          /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
