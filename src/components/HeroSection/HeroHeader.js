import React from "react";
import {
  HeaderContainer,
  StyledHeroHeader,
  HeaderTop,
  HeaderBottom,
} from "./styled";
const HeroHeader = (props) => {
  return (
    <HeaderContainer>
      <StyledHeroHeader>
        <HeaderTop>
          Plates<hr style={{ color: "white", margin: 0 }}></hr>
        </HeaderTop>
        <HeaderBottom>{props.text || "text"}</HeaderBottom>
      </StyledHeroHeader>
    </HeaderContainer>
  );
};

export default HeroHeader;
