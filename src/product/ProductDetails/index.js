import React from "react";

import ProductInfoContainer from "../../components/ProductInfoContainer";
import {
  Container,
  Brand,
  Title,
  Price,
  Description,
  BottomContainer,
} from "./styled";
import {
  CountBox,
  CountNumber,
  IncrementBtn,
  DecrementBtn,
  AddToCartBtn,
} from "./styled";
const ProductDetails = (props) => {
  const { product, onIncrement, onDecrement, onAddToCart, count } = props;
  const { brand, title, price, description } = product;
  return (
    <Container>
      <ProductInfoContainer>
        <Brand>{brand}</Brand>
        <Title>{title}</Title>
        <Price>{`$${price}.00`}</Price>
        <Description>{description}</Description>
        <hr style={{ color: "gray", margin: 0, width: "100%" }} />
      </ProductInfoContainer>
      <BottomContainer>
        <CountBox>
          <CountNumber>
            <span>{count}</span>
          </CountNumber>
          <IncrementBtn onClick={onIncrement}>+</IncrementBtn>
          <DecrementBtn onClick={onDecrement}>-</DecrementBtn>
        </CountBox>
        <AddToCartBtn onClick={() => onAddToCart({ ...product, count })}>
          ADD TO CART
        </AddToCartBtn>
      </BottomContainer>
    </Container>
  );
};

export default ProductDetails;
