import React, { useState, useContext, useEffect } from "react";

import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  let { id } = useParams();
  const { products } = useContext(ProductContext);

  return (
    <div>
      <NavBar />
      <div className="Product">
        Product {id}
        {products && (
          <ProductDetails
            title={products[id - 1].title}
            price={products[id - 1].price}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
