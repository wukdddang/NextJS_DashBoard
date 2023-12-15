import Image from 'next/image';
// import Link from 'next/link';
import CurrentProcessInfo from './CurrentProcessInfo';

export default function Header() {
  return (
    <header className="topbar">
      <nav className="position-fixed w-100 py-2 navbar top-navbar navbar-expand-md navbar-light tw-bg-inherit tw-shadow-md">
        <div className="navbar-collapse collapse " id="navbarSupportedContent">
          <div className="navbar-nav float-start me-auto">
            <CurrentProcessInfo startTime={new Date('2023-12-12T05:24:34')} />
          </div>
          <ul className="navbar-nav float-end">
            <li className="nav-item dropdown">
              {/* TODO: 리팩토링 때 Link 컴포넌트를 사용하도록 수정 */}
              <a
                className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  src="/assets/images/users/profile.png"
                  alt="user"
                  className="rounded-circle"
                  width={31}
                  height={31}
                />
                <div className="tw-flex tw-flex-col">
                  <span className="tw-h-5 tw-w-5">good</span>
                  <span>good</span>
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end user-dd animated"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="ti-user tw-ml-5 tw-mr-5"></i>
                  My Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti-wallet tw-ml-5 tw-mr-5"></i>
                  My Balance
                </a>
                <a className="dropdown-item" href="/">
                  <i className="ti-email tw-ml-5 tw-mr-5"></i>
                  Inbox
                </a>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
