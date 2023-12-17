import getPascalCase from '@/app/utils/getPascalCase';
import Link from 'next/link';

export default function Breadcrumb({
  pathname: pathname,
  searchParams,
}: {
  pathname: string;
  searchParams?: URLSearchParams;
}) {
  const pagename = pathname === '/' ? 'Home' : getPascalCase(pathname.replace('/', ''));

  return (
    <div className="page-breadcrumb">
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
      </div>
    </div>
  );
}
