import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./SplitReveal.css";

export default function SplitReveal({
  text = "",
  by = "chars",
  className = "",
  delay = 0.06,
  stagger = 0.03,
}) {
  const shouldReduce = useReducedMotion();

  const tokens = useMemo(() => {
    if (by === "words") return text.split(/(\s+)/).filter(Boolean);
    return Array.from(text);
  }, [text, by]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  // stronger values: larger vertical slide, bigger skew, bigger rotateX, longer duration
  const child = {
    hidden: { y: "140%", opacity: 0, skewY: 10, rotateX: 18 },
    show: {
      y: "0%",
      opacity: 1,
      skewY: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] },
    },
  };

  if (shouldReduce) return <span className={`split-reveal ${className}`}>{text}</span>;

  return (
    <motion.span
      className={`split-reveal split-3d ${className}`}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={container}
      style={{ display: "inline-block", lineHeight: 1 }}
    >
      {tokens.map((tok, i) => {
        if (/\s+/.test(tok)) return <span key={`space-${i}`} className="split-space">{tok}</span>;
        return (
          <span key={i} className="split-token" aria-hidden>
            <motion.span className="split-inner" variants={child}>
              {tok}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
