import React, { useEffect, useContext } from "react";
import HeroSection from "../components/HeroSection/HeroSection.js";
import NavBar from "../components/NavBar/NavBar.js";
import CategoryProduct from "./CategoryProduct";
import ProductContext from "../context"
import "./Category.css";

const Category = () => {
 const {products} = useContext(ProductContext)

  return (
    <div className="Category">
      <NavBar />
      <HeroSection />
      <div>
        {products &&
          products.map((products, key) => {
            return (
              <div key={key}>
                <CategoryProduct
                  title={products.title}
                  brand={products.brand}
                  price={products.price}
                  image={products.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
