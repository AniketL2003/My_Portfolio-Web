// src/components/SkewOnScroll.jsx
import { useEffect, useRef } from 'react';

export default function SkewOnScroll({ children, max = 4 }) {
  const ref = useRef(null);
  useEffect(() => {
    let last = window.scrollY, raf;
    const tick = () => {
      const y = window.scrollY;
      const v = Math.max(-max, Math.min(max, (y - last) * 0.1));
      if (ref.current) ref.current.style.transform = `skewY(${v}deg)`;
      last = y;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [max]);
  return <div ref={ref} style={{ willChange: 'transform' }}>{children}</div>;
}
