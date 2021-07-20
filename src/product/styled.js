import styled from "@emotion/styled";

import { breakpoints, size } from "../components/layout/constant";

export const ProductContainer = styled("div")`
  width: 100%;
  padding: ${size.xl}px ${size.sm}px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  > div {
    flex: 1 1 100%;
  }
  @media (min-width: ${breakpoints.md}px) {
    padding: ${size.xl}px ${size.xl}px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    flex-wrap: nowrap;
    > div:nth-child(1) {
      flex: 1 1 50%;
    }
    > div:nth-child(2) {
      flex: 1 1 50%;
    }
  }
  @media (min-width: ${breakpoints.max}px) {
    flex-wrap: nowrap;
    padding: ${size.xl}px ${size.dbyuge}px;
    > div:nth-child(1) {
      flex: 1 1 65%;
    }
    > div:nth-child(2) {
      flex: 1 1 35%;
    }
  }
`;
export const ImageContainer = styled("div")`
  overflow: hidden;
  margin-right: 0;
  @media (min-width: ${breakpoints.lg}px) {
    flex: 1 1 60%;
    margin-right: ${size.lg}px;
  }
`;
export const Image = styled("div")`
  padding-top: 65%;
  width: 100%;
  height: 0;
  background-image: url(/media/${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;
