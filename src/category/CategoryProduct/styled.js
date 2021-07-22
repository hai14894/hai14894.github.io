import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { breakpoints, size} from '../../components/layout/constant';

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
`
export const TopContainer = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: ${size.sm}px;
`

export const Brand = styled("div")`
  color: rgb(141,125,125);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`
export const Title = styled("div")`
  color: black;
  font-size: 18px;
  padding: ${size.micro}px 0px;
`
export const Price = styled("div")`
  color: rgb(159,159,159);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`
export const Overlay = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  /* margin-left: -25%;
  margin-top: -12.5%; */
  width: 100%;
  height: 100%;
  background-color: transparent;
  visibility: ${({ isShowOverlay }) => isShowOverlay ? "visible" : "hidden"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ isShowOverlay }) => isShowOverlay ? 1 : 0};;
  transition: all 300ms ease-in;
`
const btnCss = `
  width: 60%;
  height: 36px;
  font-family: Arial;
  font-size: 13px;
  color: white;
  border-style: none;
  cursor: pointer;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const ViewDetails = styled(Link)`
  ${btnCss}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-decoration: none;
  margin-bottom: ${size.sm}px;
  &:hover{
    color: white;
  }
  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: ${size.md}px;
  }
`
export const AddToCart = styled("button")`
  ${btnCss}
  background-color: rgb(74,74,77);
`