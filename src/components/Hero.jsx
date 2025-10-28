import React, { useEffect } from 'react';
import circle1 from '../assets/Circle1.svg';
import './Hero.css';
import HeroStarIcon from '../assets/HeroStarIcon.svg';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="hero">
    <div className="hero-text"><div className="hero-StarIcon">
      <img src={HeroStarIcon} alt="Star Icon Hero" />
    </div>

      <p className="hero-tagline">UX/UI | Product Design</p>



    <h2 className="hero-text">
  <span className="light-Hey">HEY! I’m</span> Aniket, <span className="light-based">Based In </span> <span className="peach">Oxford </span> <span className="light-of"> Of The </span> East
</h2>

      
      <p className="hero-description">
        Helping tech startups passionately for reshaping their brands,
        user experiences, and app/website designs.
      </p>
    </div>

    {/* <div className="hero-imgs">
      <img src={circle1} alt="Aniket profile" />
    </div> */}

  </section>
  )
};

export default Hero;
