import React from "react";

import HeroHeader from "./HeroHeader";
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/media/plates-header.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "530px",
        width: "100%",
        position: "relative",
      }}
    >
      <HeroHeader text="lorrem" />
    </div>
  );
};

export default HeroSection;
