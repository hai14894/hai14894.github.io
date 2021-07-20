import React, { useState } from "react";
import ProductInfoContainer from "../../components/ProductInfoContainer";
import CategoryProductOverlay from "./CategoryProductOverlay";
import {
  Container,
  TopContainer,
  ImageContainer,
  Brand,
  Title,
  Price,
} from "./styled";

const CategoryProduct = (props) => {
  const { brand, title, price, image, product, id } = props;
  const [isShowOverlay, setisShowOverlay] = useState(false);
  const handleOnMouse = () => {
    setisShowOverlay(!isShowOverlay);
  };
  return (
    <Container onMouseEnter={handleOnMouse} onMouseLeave={handleOnMouse}>
      <TopContainer>
        <CategoryProductOverlay
          isShowOverlay={isShowOverlay}
          product={product}
          id={id}
        />
        <ImageContainer image={image} />
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
