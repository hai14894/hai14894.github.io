import React from "react";

import ProductInfoContainer from "../../components/ProductInfoContainer";
import CategoryOverlay from "../CategoryProduct/CategoryOverlay";
import { Container, TopContainer, Brand, Title, Price } from "./styled";
import { ImageContainer } from "../../components/ImageContainer";
import { useMouseOnOverLay } from "../../hooks/useMouseOnOverLay";

const CategoryProduct = (props) => {
  const { brand, title, price, image, product, id } = props;
  const [isShowOverlay, handleMouseOver, handleMouseLeave] =
    useMouseOnOverLay();

  return (
    <Container
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-testid={`category${id}`}
    >
      <TopContainer>
        <CategoryOverlay
          isShowOverlay={isShowOverlay}
          product={product}
          id={id}
        />
        <ImageContainer image={image} width="100%" paddingTop="65%" />
      </TopContainer>
      <ProductInfoContainer>
        <Brand>{brand}</Brand>
        <Title>{title}</Title>
        <Price>{`$${price}.00`}</Price>
      </ProductInfoContainer>
    </Container>
  );
};

export default CategoryProduct;
