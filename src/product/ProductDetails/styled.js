import styled from "@emotion/styled";

import { breakpoints, size, colors } from "../../components/layout/constant";

export const Container = styled("div")`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const Brand = styled("div")`
  color: rgb(141, 125, 125);
  font-size: 16px;
  font-weight: 400;
`;
export const Title = styled("div")`
  color: black;
  font-size: 34px;
  font-weight: 600;
  font-family: "Uchen";
  padding: 0 ${size.sm}px;
  margin: ${size.sm}px 0px;
  @media (min-width: ${breakpoints.max}px) {
    padding: 0 ${size.lg}px;
  }
`;
export const Price = styled("div")`
  color: rgb(159, 159, 159);
  font-size: 20px;
  font-weight: 400;
  font-family: sans-serif;
`;

export const Description = styled("div")`
  color: ${colors.lightGrayText};
  font-size: 16px;
  padding: ${size.micro}px 0px;
  margin: ${size.sm}px 0px;
`;

export const BottomContainer = styled("div")`
  width: 100%;
  padding: ${size.sm}px 0;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  & > div {
  }
`;
export const CountBox = styled("div")`
  height: 50px;
  width: 80px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;
`;
export const CountNumber = styled("div")`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  background-color: ${colors.lightBtn};
  color: ${colors.darkGrayText};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IncrementBtn = styled("button")`
  grid-row: 1 / 2;
  grid-column: 3 / 3;
  background-color: ${colors.darkBtn};
  color: ${colors.darkGrayText};
  font-size: 18px;
  border-style: none;
`;
export const DecrementBtn = styled("button")`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  background-color: ${colors.darkBtn};
  color: ${colors.darkGrayText};
  font-size: 18px;
  border-style: none;
`;
export const AddToCartBtn = styled("button")`
  height: 50px;
  width: 160px;
  border-style: none;
  background-color: black;
  color: white;
`;
