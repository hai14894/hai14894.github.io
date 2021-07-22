import styled from "@emotion/styled";

import { breakpoints, size } from "../components/layout/constant";

export const StyledCategoryContainer = styled("div")`
  display: grid;
  width: 100%;
  padding: ${size.xl}px ${size.sm}px;
  ${({ categoriesCount }) => `
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(${categoriesCount}, auto);
    grid-column-gap: ${size.mdx2}px;
    grid-row-gap: ${size.xl}px;
    
    @media (min-width: ${breakpoints.md}px){
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(${categoriesCount / 2}, auto);
      padding: ${size.xl}px ${size.xxl}px;
    }
    @media (min-width: ${breakpoints.xl}px){
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(${categoriesCount / 3}, auto);
      padding: ${size.xl}px ${size.xxxl}px;
    }
    @media (min-width: ${breakpoints.max}px){
      padding: ${size.xl}px ${size.dbyuge}px;
    }
  `}
`;
