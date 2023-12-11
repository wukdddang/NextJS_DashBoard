import Link from "next/link";
import { FaGlobeAmericas } from "react-icons/fa";

export default function SideBar() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <Link
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="/"
                aria-expanded="false"
              >
                <FaGlobeAmericas />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
