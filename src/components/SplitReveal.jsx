// src/components/SplitReveal.jsx
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { motion, useAnimation } from 'framer-motion';

export default function SplitReveal({ as: Tag = 'h1', children, delay = 0 }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const split = new SplitType(ref.current, { types: 'lines, words' });
    controls.start(i => ({
      y: 0, opacity: 1,
      transition: { delay: delay + i * 0.035, duration: 0.6, ease: [0.22,1,0.36,1] }
    }));
    return () => split.revert();
  }, [controls, delay]);

  return (
    <Tag ref={ref} style={{ overflow: 'hidden' }}>
      {String(children).split(' ').map((w, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ y: '1em', opacity: 0 }}
          animate={controls}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {w + (i < children.split(' ').length - 1 ? ' ' : '')}
        </motion.span>
      ))}
    </Tag>
  );
}
