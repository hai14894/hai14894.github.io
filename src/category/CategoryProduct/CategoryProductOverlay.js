import React from "react";
import styled from "@emotion/styled";

import { breakpoints, size } from "../../components/layout/constant";
import { useAppContext } from "../../provider/AppProvider/App.provider";

const Overlay = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  visibility: ${({ isShowOverlay }) => (isShowOverlay ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ isShowOverlay }) => (isShowOverlay ? 1 : 0)};
  transition: all 300ms ease-in;
`;
const ViewDetails = styled("button")`
  width: 60%;
  height: 36px;
  background-color: black;
  color: white;
  border-style: none;
  cursor: pointer;
  margin-bottom: ${size.sm}px;
  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: ${size.md}px;
  }
`;
const AddToCart = styled("button")`
  width: 60%;
  height: 36px;
  background-color: rgb(74, 74, 77);
  color: white;
  border-style: none;
  cursor: pointer;
`;
const CategoryOverlay = ({ isShowOverlay, product, id }) => {
  const {
    actions: { addToCart },
  } = useAppContext();

  const onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("product: ", product);
    addToCart({ ...product, id: id, count: 1 });
  };
  return (
    <Overlay isShowOverlay={isShowOverlay}>
      <ViewDetails>View Details</ViewDetails>
      <AddToCart onClick={onclick}>Add To Cart</AddToCart>
    </Overlay>
  );
};

export default CategoryOverlay;
