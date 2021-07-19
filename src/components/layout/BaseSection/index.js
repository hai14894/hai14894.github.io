import styled from "@emotion/styled";

const BaseSection = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
`;

export default BaseSection;
