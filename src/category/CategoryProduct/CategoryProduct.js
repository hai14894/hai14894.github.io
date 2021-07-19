import React, { useState } from "react";
import styled from "@emotion/styled";
import ProductInfoContainer from "../../components/ProductInfoContainer";
import CategoryProductOverlay from "./CategoryProductOverlay";
import { Container, TopContainer, Brand, Title, Price } from "./styled";

const ImageContainer = styled("div")`
  background-image: url(/media/${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-top: 65%;
`;

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
