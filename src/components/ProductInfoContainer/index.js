import React from "react";
import styled from "@emotion/styled";

import { size } from "../layout/constant";
const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${size.sm}px;
  font-family: Montserrat;
`;

const ProductInfoContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ProductInfoContainer;
