import React from 'react';
import Marquee from "react-fast-marquee";
import './AutoScrollDivider.css';

const AutoScrollDivider = () => {
  return (
    <div className="yellow-wrapper">
      <div className="white-box"> 
        <Marquee
          direction="right"
          speed={150}
          gradient={false}
        >
          <span className="marquee-text">
            ✦ UX Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ User Flow ✦ UI Kit ✦ 
            ✦ UX Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ User Flow ✦ UI Kit ✦ 
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default AutoScrollDivider;
