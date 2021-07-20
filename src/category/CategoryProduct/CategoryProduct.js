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
  const handleMouseEnter = () => {
    setisShowOverlay(true);
  };
  const handleMouseLeave = () => {
    setisShowOverlay(false);
  };
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
