import { useRef, useEffect, useState } from 'react';
import './CurvedLoop.css';

const CurvedLoop = ({
  marqueeText="User Research ✦ UX Design ✦ App Design ✦ UI Kit ✦ Wireframing ✦ Prototyping ✦",
  speed = 1,
  className = ''
}) => {
  const textPathRef = useRef(null);
  const measureRef = useRef(null);

  const [textWidth, setTextWidth] = useState(0);
  const offsetRef = useRef(0);

  /* ----------------------------------
     Measure text width safely
  ---------------------------------- */
  useEffect(() => {
    if (!measureRef.current) return;

    const measure = () => {
      const width = measureRef.current.getComputedTextLength();
      if (width && Number.isFinite(width)) {
        setTextWidth(width);
      }
    };

    measure();
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [marqueeText]);

  /* ----------------------------------
     Continuous loop animation (NO RESET)
  ---------------------------------- */
  useEffect(() => {
    if (!textWidth) return;

    let rafId;

    const animate = () => {
      offsetRef.current -= speed;

      // Circular wrap (seamless)
      if (offsetRef.current <= -textWidth) {
        offsetRef.current += textWidth;
      }

      if (textPathRef.current) {
        textPathRef.current.setAttribute(
          'startOffset',
          `${offsetRef.current}px`
        );
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [textWidth, speed]);

  /* ----------------------------------
     Safe dynamic repetition (no gaps)
  ---------------------------------- */
  const getRepeatCount = () => {
    if (!textWidth || !Number.isFinite(textWidth)) return 12;

    const base = Math.ceil((window.innerWidth * 3) / textWidth);
    return Math.min(Math.max(base, 8), 30);
  };

  const repeatCount = getRepeatCount();
  const repeatedText = Array.from(
    { length: repeatCount },
    () => marqueeText
  ).join('  ');

  return (
    <div className="curved-loop-jacket">
      <svg
        className="curved-loop-svg"
        viewBox="-800 0 3040 320"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hidden text for measurement */}
        <text
          ref={measureRef}
          className={className}
          style={{ visibility: 'hidden', position: 'absolute' }}
        >
          {marqueeText}
        </text>

        <defs>
          <path
            id="curved-loop-path"
            d="M -800 160 Q 720 320 2240 160"
            fill="none"
          />
        </defs>

        <text className={className}>
          <textPath
            ref={textPathRef}
            href="#curved-loop-path"
            startOffset="0"
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;
