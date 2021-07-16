import React, { useState, useContext, useEffect } from "react";

import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context";

import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  const [count, setCount] = useState(0);

  const { product } = useContext(ProductContext);
  const handleIncrement = () => {
    setCount((prevState) => (prevState += 1));
  };
  const handleDecrement = () => {
    count > 0 && setCount((prevState) => (prevState -= 1));
  };

  return (
    <div>
      <NavBar />
      <div className="Product">
        <ProductDetails title={product.title} price={product.price} />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default Product;
