import React from "react";
import HeroSection from "../components/HeroSection/HeroSection.js";
import GlobalNav from "../components/NavBar/NavBar.js";
import CategoryProduct from "./categoryProduct/CategoryProduct";
import { useAppContext } from "../provider/AppProvider/App.provider";
import BaseSection from "../components/layout/BaseSection";
import { StyledCategoryContainer} from "./styled";

const Category = () => {
  const {
    state: { isLoading, products },
  } = useAppContext();

  return (
    <div>
      <GlobalNav />
      <HeroSection />
      <BaseSection>
        {isLoading ? (
          <div>Loading</div>
        ) : (products && products.length > 0 &&
          <StyledCategoryContainer categoriesCount={products.length}>
            {
              products.map((product, key) => {
                return (
                  <CategoryProduct
                    title={product.title}
                    brand={product.brand}
                    price={product.price}
                    image={product.image}
                    product={product}
                    key={key}
                    id={key+1}
                  />
              );})
            }
          </StyledCategoryContainer>
        )}
      </BaseSection>
    </div>
  );
};

export default Category;
