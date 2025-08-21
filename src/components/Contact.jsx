import React from 'react';
import behance from '../assets/VectorB.svg';
import linkedin from '../assets/Vectorl.svg';
import '../components/Contact.css';
import BackArrow from '../assets/BackArrow.svg';
import LetsWorkTogether from '../assets/Let’s work together.svg'; // ✅ Import your SVG

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-header">
      {/* Replace text with SVG */}
      <img 
        src={LetsWorkTogether} 
        alt="Let’s Work Together" 
        className="lets-work-svg"
      />
    </div>

    <div className="contact-footer">
      <div className="left">
        <p 
          className="email"
          onClick={() => {
            window.open("mailto:aniketlamkhade934@gmail.com");
          }}
        >
          aniketlamkhade934@gmail.com
        </p>
        <p className="crafted">
          Crafted with passion by Aniket Lamkhade | UI/UX Designer | © 2025
        </p>
      </div>

      <div className="right social-icons">
        <img
          src={linkedin}
          alt="LinkedIn"
          className="social-icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/aniketlamkhade?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXJ%2BcUHF4RpWgRIBjr%2FzpEw%3D%3D"
            );
          }}
        />
        <img
          src={behance}
          alt="Behance"
          className="social-icon"
          onClick={() => {
            window.open("https://www.behance.net/aniketlamkhade1");
          }}
        />
      </div>
    </div>

    <div className="back-button">
      <img
        src={BackArrow}
        alt="Back to Top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  </section>
);

export default Contact;
