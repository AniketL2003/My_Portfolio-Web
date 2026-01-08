import { useRef, useEffect, useState } from 'react';
import './CurvedLoop.css';

const CurvedLoop = ({
  marqueeText,
  speed = 1,
  className = ''
}) => {
  const textPathRef = useRef(null);
  const measureRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
  const offsetRef = useRef(0);

  // Measure text width once
  useEffect(() => {
    if (measureRef.current) {
      setTextWidth(measureRef.current.getComputedTextLength());
    }
  }, [marqueeText]);

  // Animation loop (true right → left)
  useEffect(() => {
    if (!textWidth) return;

    let raf;
    const animate = () => {
      offsetRef.current -= speed;

      if (offsetRef.current <= -textWidth) {
        offsetRef.current = 0;
      }

      if (textPathRef.current) {
        textPathRef.current.setAttribute(
          'startOffset',
          `${offsetRef.current}px`
        );
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [textWidth, speed]);

  // Repeat text enough to fill screen
  const repeatCount = Math.ceil((window.innerWidth * 3) / textWidth) || 12;
  const repeatedText = Array(repeatCount).fill(marqueeText).join('  ');



  return (
    <div className="curved-loop-jacket">
      <svg
        className="curved-loop-svg"
        viewBox="-800 0 3040 320"   // 👈 curve is MUCH wider than viewport
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
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
