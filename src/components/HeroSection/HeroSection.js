import React from "react";
import HeroImg from "../../media/plates-header.jpg";
import HeroHeader from "./HeroHeader";
const HeroSection = () => {
  return (

      <div
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "530px",
          width: "100%",
        position:"relative",
        }}
      >
        <HeroHeader />
      </div>
    
  );
};

export default HeroSection;
