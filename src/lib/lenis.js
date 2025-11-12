// src/lib/lenis.js
import Lenis from '@studio-freight/lenis';

export function initLenis() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  return lenis;
}
