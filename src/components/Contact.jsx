import React from 'react';
import behance from '../assets/VectorB.svg';
import instagram from '../assets/Vector.svg';
import linkedin from '../assets/Vectorl.svg';
import '../components/Contact.css';
import BackArrow from '../assets/BackArrow.svg';


const Contact = () => (

  
  <section className="contact-section" id="contact">
    <div className="contact-header">
      <h1 className="contact-title">
        <span className="block underline">Let’s</span>
        <span className="block">Work</span>
        <span className="block">Together</span>
      </h1>
    </div>


    <div className="contact-footer">
      <div className="left">
        <p>aniket@anisux.com</p>
        <p className="crafted">
          Crafted with passion by Aniket Lamkhade | UI/UX Designer | © 2025
        </p>
      </div>
 


      <div className="right social-icons">
        <a href="https://www.linkedin.com/in/aniketlamkhade" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.behance.net/aniketlamkhade1" target="_blank" rel="noreferrer">
          <img src={behance} alt="Behance" />
        </a>
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
