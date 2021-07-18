import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { useAppContext } from "../provider/AppProvider/App.provider";

import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  const { id } = useParams();
  const {
    state: { product,cart },
    actions: { addToCart },
  } = useAppContext();

  const [count, setCount] = useState(0);

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
        {product && (
          <div>
            {product.title}
            {product.price}
          </div>
        )}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button
          disabled={count === 0}
          onClick={() => addToCart({ ...product, count, id: Number(id) })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
