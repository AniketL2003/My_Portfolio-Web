import React from 'react';
import behance from '../assets/VectorB.svg';
import linkedin from '../assets/Vectorl.svg';
import BackArrow from '../assets/BackArrow.svg';
import LetsWorkTogether from '../assets/Let’s work together.svg';
import '../components/Contact.css';

const Contact = () => (
  <section className="contact-section" id="contact">
    {/* Header SVG */}
    <div className="contact-header">
      <img
        src={LetsWorkTogether}
        alt="Let’s Work Together"
        className="lets-work-svg"
      />
    </div>
  <script src="https://t.contentsquare.net/uxa/56fd7a75c5497.js"></script>
    {/* Footer */}
  
    <div className="contact-footer">
      <div className="left">
        {/* Email */}
         <div className="c-s">
        <p
          className="email"
          onClick={() => window.open("mailto:aniketlamkhade934@gmail.com")}
        >
          aniketlamkhade934@gmail.com
        </p>

        {/* Social Icons under Email */}
        <div className="social-icons">
          <img
            src={linkedin}
            alt="LinkedIn"
            onClick={() => window.open("https://www.linkedin.com/in/aniketlamkhade")}
          />
          <img
            src={behance}
            alt="Behance"
            onClick={() => window.open("https://www.behance.net/aniketlamkhade1")}
          />
        </div>
      </div>

        {/* Crafted Text & Back Button*/}
        <div className="bottom">
          <p className="crafted">
            Crafted with passion by Aniket Lamkhade | UI/UX Designer | © 2025
          </p>
          <div className="back-button">
            <img
              src={BackArrow}
              alt="Back to Top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
