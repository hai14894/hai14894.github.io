import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAppContext } from "../provider/AppProvider/App.provider";
import NavBar from "../components/NavBar/NavBar";
import BaseSection from "../components/layout/BaseSection";
import Breadcrumb from "./BreadCrumb";
import ProductDetail from "./ProductDetails";
import { ProductContainer, ImageContainer, Image } from "./styled";

const Product = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    state: { product },
    actions: { addToCart },
  } = useAppContext();

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => (prevState += 1));
  };
  const handleDecrement = () => {
    count > 0 && setCount((prevState) => (prevState -= 1));
  };

  useEffect(() => {
    product.id !== Number(id) && history.push("/");
  }, [product.id]);

  return (
    <div>
      <NavBar />
      <BaseSection>
        <Breadcrumb title={product.title} />
      </BaseSection>
      <BaseSection>
        {product && (
          <ProductContainer>
            <ImageContainer>
              <Image image={product.image} />
            </ImageContainer>
            <ProductDetail
              product={{ ...product }}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onAddToCart={addToCart}
              count={count}
            ></ProductDetail>
          </ProductContainer>
        )}
      </BaseSection>
    </div>
  );
};

export default Product;
