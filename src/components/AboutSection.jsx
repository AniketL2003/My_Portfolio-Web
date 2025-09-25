// src/components/AboutSection.jsx
import React, { useEffect } from 'react';
import './AboutSection.css';
import avatar from '../assets/avatar.png';
import Contact from './Contact';
import MyResume from "../assets/Aniket_Lamkhade_UI_UX_Designer.pdf";

const AboutSection = () => {

  useEffect(() => {
  window.scrollTo(0, 0);  
  },[]);

  return (
    <>
      <div className="about-wrapper">
        {/* Yellow Bio Section */}
        <section className="about-bio-section">
          <div className="bio-content">
            <div>
              <img src={avatar} alt="Aniket Lamkhade" className="bio-image" />
              <div className="bio-text">
                <h3>Aniket Lamkhade</h3>
                <p className="role">UX/UI & Product Design</p>
              </div>

              {/* Resume Button */}
              <button
                className="resume-btn"
                onClick={() => window.open(MyResume, '_blank')}
              >
                Résumé
              </button>

            </div>

            <div>
              <p className='bio-info'>
                <span className='span1'>“</span> Fueled by curiosity and a love for tiny details. Designing feels like breathing – I’ve been doing it long before I knew what UX meant. People often ask where my ideas come from: usually from the odd shapes in coffee stains or the way sunlight hits a cracked wall. And occasionally... from the doodles I find hiding in my notebooks during midnight snacks.
                <span className='span2'>„</span>
              </p>

            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="about-story">
          <p>
            When I was 6, I accidentally fell into a wormhole behind my closet. Ended up attending an intergalactic design bootcamp run by aliens who only spoke in colors and gradients. By the time I landed back on Earth, kindergarten felt like a side quest. But honestly, that cosmic detour gave me a whole new lens for creativity – and a weird obsession with symmetry.
          </p>
        </section>

        {/* Tags */}
        <div className="about-tags">
          <div className="tag green">Being a human is way too complicated. Time to be a alien.</div>
          <div className="tag blue">Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout.</div>
          <div className="tag darkgreen">Check my bio. It’s weird. It’s true. It’s me.</div>
        </div>

        {/* Availability */}
        <section className="about-availability">
          <p>
            <strong>Availability:</strong> Monday to Tuesday, 14:00–16:00 Earth time – unless there’s a UFO docu-marathon on. In that case, ping me later.
            <br />
            Project history includes: rebranding asteroid cafes, retrofitting moon craters into minimalist lounges, and decoding ancient alien wireframes.
          </p>
        </section>
        <Contact />
      </div>
    </>
  );
};

export default AboutSection;
