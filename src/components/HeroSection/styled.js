import styled from "@emotion/styled";

import { breakpoints } from "../layout/constant";
import BaseSection from "../layout/BaseSection";

export const StyledHeroSection = styled(BaseSection)`
  background-image: url(/media/plates-header.jpg);
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
`;
export const HeaderContainer = styled("div")`
  width: 90%;
  background-color: white;
  @media (min-width: ${breakpoints.md}px) {
    width: 80%;
  }
  @media (min-width: ${breakpoints.xl}px) {
    width: 60%;
  }
`;
export const StyledHeroHeader = styled("div")`
  margin: 0 10px;
  background-color: rgb(57, 57, 53);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const HeaderTop = styled("div")`
  font-size: 24px;
  font-weight: 800;
  font-family: Uchen;
  margin-bottom: 10px;
`;
export const HeaderBottom = styled("div")`
  padding: 0 5px;
  font-size: 16px;
  font-weight: 200;
`;
