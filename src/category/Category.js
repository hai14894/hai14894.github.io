import React from "react";
import HeroSection from "../components/HeroSection/HeroSection.js";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import { Link } from "react-router-dom";
import { useAppContext } from "../provider/AppProvider/App.provider";
import BaseSection from "../components/layout/BaseSection";
import { StyledCategoryContainer } from "./styled";
import GlobalNav from "../components/NavBar/NavBar.js";
const Category = () => {
  const {
    state: { isLoading, products },
    actions: { setProductDetail },
  } = useAppContext();

  return (
    <div>
      <GlobalNav />
      <HeroSection />
      <BaseSection>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          products &&
          products.length > 0 && (
            <StyledCategoryContainer categoriesCount={products.length}>
              {products.map((product, key) => {
                return (
                  <Link
                    key={key}
                    to={`/product/${key + 1}`}
                    onClick={() =>
                      setProductDetail({ ...product, id: key + 1 })
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <CategoryProduct
                      title={product.title}
                      brand={product.brand}
                      price={product.price}
                      image={product.image}
                      product={product}
                      id={key + 1}
                    />
                  </Link>
                );
              })}
            </StyledCategoryContainer>
          )
        )}
      </BaseSection>
    </div>
  );
};

export default Category;
