import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
const btnCss = `
  width: 50%;
  height: 36px;
  font-family: Arial;
  font-size: 16px;
  font-weight: 15px;
  color: white;
  border-style: none;
  cursor: pointer;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const ViewDetails = styled(Link)`
  ${btnCss}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-decoration: none;
  margin-bottom: ${size.sm}px;
  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: ${size.md}px;
  }
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
    background-color: white;
    color: black;
  }
`;
const AddToCart = styled("button")`
  ${btnCss}
  background-color: rgb(74,74,77);
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
    background-color: white;
    color: black;
  }
`;
const CategoryOverlay = ({ isShowOverlay, product, id }) => {
  const {
    actions: { addToCart, setProductDetail },
  } = useAppContext();

  const onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("product: ", product);
    addToCart({ ...product, id: id, count: 1 });
  };
  return (
    <Overlay isShowOverlay={isShowOverlay}>
      <ViewDetails
        to={`/product/${id}`}
        onClick={() => setProductDetail({ ...product, id: id })}
      >
        VIEW DETAILS
      </ViewDetails>
      <AddToCart onClick={onclick}>ADD TO CART</AddToCart>
    </Overlay>
  );
};

export default CategoryOverlay;
