import React from 'react';
import './Footer.scss';
import { ReactComponent as UpArrow } from '../assets/GroupArrow.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          Crafted with passion by Aniket Lamkhade | UI/UX Designer | © 2025
        </p>
        <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <UpArrow />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
