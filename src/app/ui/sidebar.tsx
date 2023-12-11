export default function Sidebar() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="index.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-view-dashboard"></i>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="pages-profile.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-account-network"></i>
                <span className="hide-menu">Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="table-basic.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-border-all"></i>
                <span className="hide-menu">Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="icon-material.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-face"></i>
                <span className="hide-menu">Icon</span>
              </a>
            </li>
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="starter-kit.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-file"></i>
                <span className="hide-menu">Blank</span>
              </a>
            </li>
            <li className="sidebar-item">
              {" "}
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="error-404.html"
                aria-expanded="false"
              >
                <i className="mdi mdi-alert-outline"></i>
                <span className="hide-menu">404</span>
              </a>
            </li>
            <li className="text-center p-40 upgrade-btn">
              <a
                href="https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/"
                className="btn d-block w-100 btn-danger text-white"
                target="_blank"
              >
                Upgrade to Pro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
