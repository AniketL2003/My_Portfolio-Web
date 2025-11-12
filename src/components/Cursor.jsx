// src/components/Cursor.jsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    let x=0,y=0, rx=0, ry=0, raf;
    const move = e => { x=e.clientX; y=e.clientY; dot.current.style.transform=`translate(${x}px,${y}px)`; };
    const loop = () => { rx += (x - rx)*0.15; ry += (y - ry)*0.15; ring.current.style.transform=`translate(${rx}px,${ry}px)`; raf=requestAnimationFrame(loop); };
    window.addEventListener('mousemove', move, { passive:true });
    raf=requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move); };
  }, []);
  return (
    <>
      <div ref={ring} style={{position:'fixed',left:0,top:0,width:28,height:28,border:'1px solid #999',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)'}}/>
      <div ref={dot}  style={{position:'fixed',left:0,top:0,width:4,height:4,background:'#999',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)'}}/>
    </>
  );
}
