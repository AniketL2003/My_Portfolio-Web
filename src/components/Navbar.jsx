import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ALGO from "../assets/ALGO.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={ALGO} alt="Logo" />
          <span></span>
        </NavLink>

        {/* Hamburger / Mobile Toggle */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;
