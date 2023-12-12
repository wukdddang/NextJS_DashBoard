import Image from "next/image";
import Link from "next/link";
import CurrentProcessInfo from "./CurrentProcessInfo";

export default function Header() {
  return (
    <header className="topbar">
      <nav className="position-fixed w-100 py-2 tw-bg-inherit navbar top-navbar navbar-expand-md navbar-light tw-shadow-md">
        <div className="navbar-collapse collapse " id="navbarSupportedContent">
          <div className="navbar-nav float-start me-auto">
            <CurrentProcessInfo />
          </div>
          <ul className="navbar-nav float-end">
            <li className="nav-item dropdown">
              <Link
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
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end user-dd animated"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" href="/pages-profile">
                  <i className="ti-user tw-mr-5 tw-ml-5"></i>
                  My Profile
                </Link>
                <Link className="dropdown-item" href="#">
                  <i className="ti-wallet tw-mr-5 tw-ml-5"></i>
                  My Balance
                </Link>
                <Link className="dropdown-item" href="#">
                  <i className="ti-email tw-mr-5 tw-ml-5"></i>
                  Inbox
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
