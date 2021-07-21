import styled from "@emotion/styled";

export const ImageContainer = styled("div")`
  background-image: url(/media/${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: ${({ width }) => (width ? width : null)};
  height: 0;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : null)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : null)};
`;
