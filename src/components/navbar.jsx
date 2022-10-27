import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [navCollapsed, setnavCollapsed] = useState(true);
  return (
    <nav className="main-navbar navbar navbar-expand-md position-absolute py-md-0">
      <div className="container-fluid px-0">
        <img src={logo} alt="logo" />
        <button
          className="navbar-toggler border-0 px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setnavCollapsed(!navCollapsed)}
        >
          <span className="navbar-toggler-icon w-100 h-100">
            <img src={navCollapsed ? menu : close} alt="toggle nav" />
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-md-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/destination">
                Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/crew">
                Crew
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
