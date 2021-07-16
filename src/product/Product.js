import React, { useState, useContext, useEffect } from "react";

import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context";

import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  const { product } = useContext(ProductContext);

  return (
    <div>
      <NavBar />
      <div className="Product">
        <ProductDetails title={product.title} price={product.price} />
      </div>
    </div>
  );
};

export default Product;
