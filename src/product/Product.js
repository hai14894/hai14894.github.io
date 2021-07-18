import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Product.css";
import { useAppContext } from "../provider/AppProvider/App.provider";

import NavBar from "../components/NavBar/NavBar";

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
          onClick={() => addToCart({ ...product, count })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
