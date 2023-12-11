import Image from "next/image";
import DarkLogo from "@/app/assets/images/logo-icon.png";
import LightLogo from "@/app/assets/images/logo-light-icon.png";
import ProfileImage from "@/app/assets/images/users/profile.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header" data-logobg="skin6">
          <Link className="navbar-brand" href="/">
            <b className="logo-icon">
              <Image
                src={DarkLogo}
                width={26}
                height={31}
                alt="homepage"
                className="dark-logo"
              />
            </b>
            <span className="logo-text">
              <Image
                src={LightLogo}
                width={26}
                height={31}
                className="light-logo"
                alt="homepage"
              />
            </span>
          </Link>
          <Link
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="/"
          >
            <i className="mdi mdi-menu"></i>
          </Link>
        </div>
        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin5"
        >
          <ul className="navbar-nav float-start me-auto">
            <li className="nav-item search-box">
              {" "}
              <Link className="nav-link waves-effect waves-dark" href="/">
                <i className="mdi mdi-magnify me-1"></i>{" "}
                <span className="font-16">Search</span>
              </Link>
              <form className="app-search position-absolute">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search &amp; enter"
                />{" "}
                <Link href="/" className="srh-btn">
                  <i className="mdi mdi-window-close"></i>
                </Link>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav float-end">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-muted"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  src={ProfileImage}
                  alt="user"
                  className="rounded-circle"
                  width={50}
                  height={50}
                />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-end user-dd animated"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" href="/">
                  <i className="ti-user m-r-5 m-l-5"></i>
                  My Profile
                </Link>
                <Link className="dropdown-item" href="/">
                  <i className="ti-wallet m-r-5 m-l-5"></i>
                  My Balance
                </Link>
                <Link className="dropdown-item" href="/">
                  <i className="ti-email m-r-5 m-l-5"></i>
                  Inbox
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
