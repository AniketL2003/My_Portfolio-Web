import React, { useState } from "react"; // <-- Added useState import
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AXLogo from "../assets/AXLogo.svg";

const Navbar = () => {
  // --- UNCOMMENTED THIS SECTION ---
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  // ---------------------------------

  // Function to close the menu, useful for NavLinks
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={AXLogo} alt="AX Logo" />
          </NavLink>
        </div>

        {/* Links - Class is now controlled by state */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu controlled by state */}
        <label className="hamburger">
          <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect className="line top" width="80" height="10" x="10" y="15" rx="5"></rect>
            <rect className="line middle" width="80" height="10" x="10" y="35" rx="5"></rect>
            <rect className="line bottom" width="80" height="10" x="10" y="55" rx="5"></rect>
          </svg>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;