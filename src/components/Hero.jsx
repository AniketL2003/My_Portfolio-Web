import React from 'react';
import circle1 from '../assets/Circle1.png';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <p className="hero-tagline">UX/UI | Product Design</p>
      <h2>
        <span className="light">HEY! I’m</span> <br />
        <span className="bold">Aniket, Based</span> <br />
        <span className="light">In Oxford Of</span> <br />
        <span className="bold">The East</span>
      </h2>
      <p className="hero-description">
        Helping tech startups passionately for reshaping their brands,
        user experiences, and app/website designs.
      </p>
    </div>
    <div className="hero-imgs">
      <img src={circle1} alt="Aniket profile" />
    </div>
  </section>
);

export default Hero;
