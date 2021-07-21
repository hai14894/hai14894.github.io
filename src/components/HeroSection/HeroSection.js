import React from "react";
import HeroHeader from "./HeroHeader";
import { StyledHeroSection } from "./styled";
const HeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroHeader text="Lorrem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerir auctor a eget arcu. Curabitur ac pharetra nisl sit" />
    </StyledHeroSection>
  );
};

export default HeroSection;
