// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./Reveal";
import SplitReveal from "./SplitReveal";
import "./Hero.css";
import HeroStarIcon from "../assets/HeroStarIcon.svg";
import circle1 from "../assets/Circle1.svg";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  // ref for only the name span
  const nameRef = useRef(null);

  // Magnetic effect for only the name element (smooth via RAF + lerp)
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const strength = 0.20; // 0.12 subtle, 0.2 = noticeable — tweak to taste

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Only small movement, relative to name size
      targetX = dx * strength;
      targetY = dy * strength * 0.4; // reduce Y influence a bit
      startRaf();
    }

    function onLeave() {
      targetX = 0;
      targetY = 0;
      startRaf();
    }

    function lerp(a, b, n) {
      return a + (b - a) * n;
    }

    function startRaf() {
      if (rafId == null) rafId = requestAnimationFrame(animate);
    }

    function animate() {
      currentX = lerp(currentX, targetX, 0.14);
      currentY = lerp(currentY, targetY, 0.14);

      // Clamp so it doesn't fly away on very large monitors
      const clamp = (v, m = 80) => Math.max(-m, Math.min(m, v));

      el.style.transform = `translate3d(${clamp(currentX)}px, ${clamp(currentY)}px, 0)`;

      // stop RAF when close enough
      if (Math.abs(currentX - targetX) < 0.02 && Math.abs(currentY - targetY) < 0.02) {
        rafId = null;
        return;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.section className="hero" variants={container} initial="hidden" animate="show">
      <div className="hero-text">
        <motion.div
          className="hero-StarIcon"
          initial={{ scale: 0.85, opacity: 0, rotate: 10 }}
          animate={{ scale: 1, opacity: 1, rotate: 1 }}
          transition={{ type: "ease-in", delay: 0.3 }}
          style={{ willChange: "transform" }}
        >
          <img src={HeroStarIcon} alt="Star Icon Hero" />
        </motion.div>

        <FadeIn delay={0.4}>
          <p className="hero-tagline">UX/UI | Product Design</p>
        </FadeIn>

        {/* Heading — only the name span (Aniket) has magnetic ref */}
        <h2
          className="hero-text"
          style={{
            lineHeight: 1.05,
            transformStyle: "preserve-3d",
          }}
        >
          <span className="light-Hey">
            <SplitReveal text={"HEY! I’m "} by="chars" delay={0.36} stagger={0.02} />
          </span>

          <span
            className="name-wrapper"
            style={{
              position: "relative",
              display: "inline-block",
              marginLeft: 6,
              zIndex: 10,
            }}
          >
            <span
              ref={nameRef}
              className="name-magnetic name-font"
              style={{
                position: "relative",
                display: "inline-block",
                zIndex: 20,
                willChange: "transform",
                pointerEvents: "none",
              }}
            >
              <SplitReveal text={"Aniket"} by="chars" delay={0.42} stagger={0.02} />
            </span>
          </span>



          <span className="light-based" style={{ marginLeft: 8 }}>
            <SplitReveal text={" Based In "} by="chars" delay={0.48} stagger={0.02} />
          </span>

          <span className="peach" style={{ marginLeft: 4 }}>
            <SplitReveal text={"Oxford "} by="chars" delay={0.54} stagger={0.02} />
          </span>

          <span className="light-of" style={{ marginLeft: 2 }}>
            <SplitReveal text={" Of The "} by="chars" delay={0.60} stagger={0.02} />
          </span>

          <span className="peach" style={{ marginLeft: 4 }}>
            <SplitReveal text={"East"} by="chars" delay={0.66} stagger={0.02} />
          </span>
        </h2>

        <FadeIn delay={0.4}>
          <p className="hero-description">
            Helping tech startups passionately for reshaping their brands,
            user experiences, and app/website designs.
          </p>
        </FadeIn>
      </div>

      {/* Optional hero visual (commented) */}
      {/*
      <motion.div ...>
        <img src={circle1} alt="Aniket profile" />
      </motion.div>
      */}
    </motion.section>
  );
};

export default Hero;
