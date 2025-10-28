// CustomStar.jsx
import React from "react";

const CustomStar = ({ size = 35, color = "#95ccc3ff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "0 0.5rem" }}
  >
    <path 
      d="M17.0757 0.220812L22.3079 12.3039L34.8011 16.4631L22.718 21.6953L18.5588 34.1885L13.3266 22.1053L0.833449 17.9462L12.9166 12.714L17.0757 0.220812Z" 
      fill={color} 
    />
  </svg>
);

export default CustomStar;
