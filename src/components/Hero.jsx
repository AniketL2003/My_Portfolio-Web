// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './Reveal'; // tiny helper we made earlier 
// import SplitReveal from '@/components/SplitReveal'; // optional for big split-text headings
import circle1 from '../assets/Circle1.svg';
import './Hero.css';
import HeroStarIcon from '../assets/HeroStarIcon.svg';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // subtle page-mount entrance for the whole hero
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.section
      className="hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="hero-text">

        {/* Star icon – springy pop on mount, tiny hover lift */}
        <motion.div
          className="hero-StarIcon"
          initial={{ scale: 0.85, opacity: 0, rotate: 10 }}
          animate={{ scale: 1, opacity: 1, rotate: 1 }}
          transition={{ type: 'ease-in', delay: 0.30 }}
          whileHover={{ y: -2, scale: 1.02 }}
          style={{ willChange: 'transform' }}
        >
          <img src={HeroStarIcon} alt="Star Icon Hero" />
        </motion.div>

        {/* Tagline – gentle fade up */}
        <FadeIn delay={0.40}>
          <p className="hero-tagline">UX/UI | Product Design</p>
        </FadeIn>

        {/* Main heading – soft rise; keeps your colored spans */}
        <motion.h2
          className="hero-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.40, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform' }}
        >
          <span className="light-Hey">HEY! I’m</span> Aniket,{' '}
          <span className="light-based">Based In </span>
          <span className="peach">Oxford </span>
          <span className="light-of"> Of The </span>
          {' '}East
        </motion.h2>

        {/* Description – delayed fade up for nice rhythm */}
        <FadeIn delay={0.4}>
          <p className="hero-description">
            Helping tech startups passionately for reshaping their brands,
            user experiences, and app/website designs.
          </p>
        </FadeIn>
      </div>

      {/* Optional hero visual/parallax area (kept commented) */}
      {/*
      <motion.div
        className="hero-imgs"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ willChange: 'transform' }}
      >
        <img src={circle1} alt="Aniket profile" />
      </motion.div>
      */}
    </motion.section>
  );
};

export default Hero;
