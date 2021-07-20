import styled from "@emotion/styled";

import { colors } from "../../components/layout/constant";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
`;
export const Title = styled("span")`
  color: ${colors.lightGrayText};
`;
