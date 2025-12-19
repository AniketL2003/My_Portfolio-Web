import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import BrainIcon from "./BrainIcon";

const PAGE_CHARACTER = {
  work: { label: "Explore", tone: "focus" },
  about: { label: "Human", tone: "warm" },
  contact: { label: "Connect", tone: "bold" },
  default: { label: "", tone: "neutral" },
};

export default function NameCursor() {
  // Disable on touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  const [label, setLabel] = useState("");
  const [tone, setTone] = useState("neutral");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const deform = useMotionValue(0);

  // Fast but smooth
  const sx = useSpring(x, { stiffness: 1200, damping: 70 });
  const sy = useSpring(y, { stiffness: 1200, damping: 70 });

  // Deformation (NO SIZE CHANGE)
  const borderRadius = useTransform(deform, [0, 1], ["999px", "14px"]);
  const skewX = useTransform(deform, [0, 1], [0, 6]);
  const skewY = useTransform(deform, [0, 1], [0, -4]);

  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;

      const velocity = Math.min(
        Math.sqrt(dx * dx + dy * dy) / 25,
        1
      );

      deform.set(velocity);

      // 🔥 HOTSPOT FIX (NO GAP)
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);

      last.current = { x: e.clientX, y: e.clientY };
    };

    const down = () => deform.set(1);
    const up = () => deform.set(0);

    const hover = (e) => {
      const page = e.target.closest("[data-cursor-page]");
      if (page) {
        const cfg =
          PAGE_CHARACTER[page.dataset.cursorPage] ||
          PAGE_CHARACTER.default;
        setLabel(cfg.label);
        setTone(cfg.tone);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", hover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", hover);
    };
  }, []);

  return createPortal(
    <motion.div
      className={`character-cursor ${tone}`}
      style={{
        x: sx,
        y: sy,
        borderRadius,
        skewX,
        skewY,
      }}
    >
      <span className="cursor-text">{label}</span>
       <BrainIcon /> 
      <span className="cursor-arrow" />
    </motion.div>,
    document.body
  );
}
