import styled from "@emotion/styled";

import { breakpoints, size, colors } from "../../layout/constant";
export const OverLay = styled("div")`
  width: 100%;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 9999;
  background-color: transparent;
`;

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: ${size.sm}px 1% ${size.sm}px 1%;
  position: absolute;
  top: 90px;
  right: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: sans-serif;
  @media (min-width: ${breakpoints.lg}px) {
    width: 400px;
  }
`;
export const TopContainer = styled("div")`
  width: 100%;
  padding-bottom: ${size.sm}px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid lightgray 1px;
`;
export const BottomContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${size.sm}px;
`;
export const Total = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${size.sm}px;
  color: ${colors.lightGrayText};
`;
export const ViewCartBtn = styled("button")`
  width: 48%;
  height: 50px;
  padding: 0;
  color: black;
  border: solid black 1px;
  background-color: white;
  a {
    text-decoration: none;
    color: black;
  }
`;
export const CheckOutBtn = styled("button")`
  width: 48%;
  height: 50px;
  padding: 0;
  color: white;
  border-style: none;
  background-color: black;
`;
export const ProductInCart = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
`;
export const DeleteBtn = styled("button")`
  width: 20px;
  height: 20px;
  border-style: none;
  padding: 0;
  background-color: transparent;
  color: ${colors.lightGrayText};
`;
export const ProductDetail = styled("div")`
  width: calc(75% - 20px);
  margin-bottom: ${size.sm}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: Montserrat;
`;
export const Brand = styled("div")`
  color: rgb(141, 125, 125);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`;
export const Title = styled("div")`
  color: black;
  font-size: 18px;
  font-weight: 700;
  padding: ${size.micro}px 0px;
  text-align: left;
  & span {
    font-size: 12px;
    font-weight: 200;
  }
`;
export const Price = styled("div")`
  color: rgb(159, 159, 159);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`;
