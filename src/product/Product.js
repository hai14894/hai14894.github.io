import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context";

import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  const { id } = useParams();

  const [count, setCount] = useState(0);

  const { products } = useContext(ProductContext);

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
        {products && (
          <ProductDetails
            title={products[Number(id) - 1].title}
            price={products[Number(id) - 1].price}
          />
        )}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default Product;
