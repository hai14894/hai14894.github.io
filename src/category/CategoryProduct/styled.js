import styled from "@emotion/styled";

import { size } from "../../components/layout/constant";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const TopContainer = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
`;
export const Brand = styled("div")`
  color: rgb(141, 125, 125);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`;
export const Title = styled("div")`
  color: black;
  font-size: 18px;
  padding: ${size.micro}px 0px;
`;
export const Price = styled("div")`
  color: rgb(159, 159, 159);
  font-size: 16px;
  padding: ${size.micro}px 0px;
`;
