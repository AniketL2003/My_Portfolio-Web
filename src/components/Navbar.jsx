import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import ALGO from "../assets/ALGO.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWorkClick = (e) => {
    e.preventDefault();
    closeMenu();

    const scrollToWork = () => {
      const section = document.getElementById("latest-work");
      if (section) {
        const yOffset = -80; // adjust if navbar height changes
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // if not on homepage, navigate first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToWork, 400);
    } else {
      scrollToWork();
    }
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={ALGO} alt="Logo" />
        </NavLink>

        {/* Hamburger */}
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
          {/* 👇 WORK scrolls smoothly */}
          <li>
            <a href="#latest-work" onClick={handleWorkClick}>
              Work
            </a>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
