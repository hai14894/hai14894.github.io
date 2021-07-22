import styled from "@emotion/styled";

import { breakpoints, size, colors } from "../components/layout/constant";

export const Heading = styled("div")`
  color: black;
  height: 150px;
  display: flex;
  align-items: center;
  font-family: Uchen;
`;
export const CartContainer = styled("div")`
  width: 100%;
  padding: ${size.xl}px ${size.xs}px;
  background-color: white;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  > div {
    flex: 1 1 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
  }
  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 ${size.md}px;
    padding: ${size.xl}px ${size.xl}px;
  }
  @media (min-width: ${breakpoints.max}px) {
    margin: 0 ${size.dbyuge * 1.5}px;
    padding: ${size.xl}px ${size.xxl}px;
  }
`;
export const TopTable = styled("div")`
  padding: ${size.lg}px 0;
  border-bottom: solid lightgrey 1px;
  color: ${colors.darkGrayText};
`;
export const DetailTable = styled("div")`
  padding: ${size.lg}px 0 ${size.xxl}px 0;
  border-bottom: solid lightgray 1px;
`;
export const OverView = styled("div")`
  border-bottom: solid lightgray 1px;
  padding: ${size.lg}px 0 ${size.lg}px 50%;
  flex-wrap: wrap !important ;
  color: ${colors.darkGrayText};
  & > div {
    flex: 1 1 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 5px 0;
  }
  & > div:last-child > div:last-child {
    color: rgb(50, 50, 50);
  }
`;
export const BottomTable = styled("div")`
  padding: ${size.lg}px 0 ${size.lg}px 0;
  justify-content: space-between;
  & > * {
    width: 50%;
  }
  & > button {
    height: 50px;
    border-style: none;
    background-color: black;
    color: white;
    font-size: 12px;
  }
  & > a {
    color: black;
  }
  @media (min-width: ${breakpoints.lg}px) {
    & > * {
      width: 20%;
    }
  }
`;
export const ProductContainer = styled("div")`
  flex: 1 1 50%;
  display: flex;
  justify-content: flex-start;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  & > div:first-child {
    width: 100%;
    padding-top: 60%;
  }
  @media (min-width: ${breakpoints.lg}px) {
    & > div:first-child {
      width: 30%;
      padding-top: 20%;
    }
  }
`;
export const ProductDetail = styled("div")`
  width: 100%;
  margin-bottom: ${size.sm}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: Montserrat;
  @media (min-width: ${breakpoints.lg}px) {
    width: 65%;
  }
`;

export const QuantityContainer = styled("div")`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  & > div {
    height: 60px;
  }
`;
export const CountContainer = styled("div")`
  flex: 1 1 20%;
  color: ${colors.darkGrayText};
`;
export const ActionContainer = styled("div")`
  flex: 1 1 10%;
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
  font-weight: 700;
  font-size: 16px;
  padding: ${size.micro}px 0px;
`;
