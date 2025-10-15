import React from 'react';
import Marquee from "react-fast-marquee";
import './AutoScrollDivider.css';
import Star from "./CustomStar";

const AutoScrollDivider = () => {
  return (
    <div className="yellow-wrapper">
      <div className="white-box"> 
        <Marquee direction="right" speed={150} gradient={false}>
          <span className="marquee-text">
            <Star /> UX Design <Star /> App Design <Star /> Dashboard <Star /> Wireframe <Star /> User Flow <Star /> UI Kit 
            <Star /> UX Design <Star /> App Design <Star /> Dashboard <Star /> Wireframe <Star /> User Flow <Star /> UI Kit <Star />
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default AutoScrollDivider;
