// src/components/Magnetic.jsx
import { useRef } from 'react';

export default function Magnetic({ strength = 0.25, children, className }) {
  const ref = useRef(null);
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width/2);
    const y = e.clientY - (r.top + r.height/2);
    ref.current.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
  };
  const reset = () => { ref.current.style.transform = 'translate(0,0)'; };
  return (
    <span
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ display: 'inline-flex', transition: 'transform .15s ease', willChange: 'transform' }}
    >
      {children}
    </span>
  );
}
