import React, { useEffect, useContext } from "react";
import HeroSection from "../components/HeroSection/HeroSection.js";
import NavBar from "../components/NavBar/NavBar.js";
import CategoryProduct from "./CategoryProduct";
import ProductContext from "../context";
import "./Category.css";

import { Link } from "react-router-dom";
import { useAppContext } from "../provider/AppProvider/App.provider";


const Category = () => {
  const {
    state: { isLoading, products },
    actions: { setProductDetail },
  } = useAppContext();

  return (
    <div className="Category">
      <NavBar />
      <HeroSection />
      <div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          products &&
          products.length > 0 &&
          products.map((product, key) => {
            return (
              <Link
                key={key}
                to={`/product/${key + 1}`}
                onClick={() => setProductDetail({ ...product, id: key + 1 })}
              >
                <CategoryProduct
                  title={product.title}
                  brand={product.brand}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Category;
