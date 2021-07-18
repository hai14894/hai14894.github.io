import React from "react";
import "./style.css";
const HeroHeader = (props) => {
  return <div className="hero-header">{props.text || 'text'}</div>;
};

export default HeroHeader;
