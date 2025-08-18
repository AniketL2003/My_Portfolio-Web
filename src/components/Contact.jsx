import React from 'react';
import behance from '../assets/VectorB.svg';
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
        
          <img
              src={linkedin}
              alt="Vectorl"
              className="right social-icons"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/aniketlamkhade?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXJ%2BcUHF4RpWgRIBjr%2FzpEw%3D%3D"
                );
              }}
            />
        

       <img
              src={behance}
              alt="VectorB"
              className="right social-icons"
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
