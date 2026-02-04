// src/components/Hero.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./Reveal";
import "./Hero.css";
import Profile from "../assets/ProfileDark.svg";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="hero">

      {/* Headline */}
      <motion.div
        className="hero-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Line 1 */}
        <div className="headline-line">
          <FadeIn delay={0.5}>
          <span className="headline-strong">
            Human-centered design,
          </span>
          </FadeIn>
        </div>

        {/* Line 2 */}
        <div className="headline-line">
          <FadeIn delay={0.5}>
          <span className="headline-emphasis">
            crafted ßy
          </span>
          </FadeIn>
          <FadeIn delay={0.5}>
          <span className="by-me">
            <img
              src={Profile}
              alt="Aniket"
              className="hero-inline-img"
            />
          </span>
          </FadeIn>
        </div>
      </motion.div>

      {/* Meta */}
      <FadeIn delay={0.5}>
        <p className="hero-meta">
          Anikeʈ Lamkhade — designing with clarity, usability, and intent
        </p>
      </FadeIn>

      {/* Scroll */}
      <FadeIn delay={0.7}>
        <p className="hero-scroll">Scroll ↓</p>
      </FadeIn>

    </section>
  );
};

export default Hero;
