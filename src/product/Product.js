import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context";

import NavBar from "../components/NavBar/NavBar";

const Product = () => {
  const { id } = useParams();

  const [count, setCount] = useState(0);

  const { products, addToCart } = useContext(ProductContext);

  const handleIncrement = () => {
    setCount((prevState) => (prevState += 1));
  };
  const handleDecrement = () => {
    count > 0 && setCount((prevState) => (prevState -= 1));
  };

  // const addProductToCart = () => {
  //   /*
  //     function này sẽ return về function addToCart,
  //     vì mình muốn custom product object, hiện tại product chỉ có { name, title, price }, ko có count
  //     Hiện tại a đang bind function vào onClick, nên nó sẽ nhận event là data mình pass vô addToCart
  //     sort hand là mình sẽ ko cần gọi addProductToCart
  //   */
  //  return addToCart({ ...producst[Number(id) - 1], count })
  // }

  return (
    <div>
      <NavBar />
      <div className="Product">
        {/* {products && (
          <ProductDetails
            title={products[Number(id) - 1].title}
            price={products[Number(id) - 1].price}
          />
        )} */}
        {products && (
          <div>
            {products[Number(id) - 1].title}
            {products[Number(id) - 1].price}
          </div>
        )}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button
          onClick={() => addToCart({ ...products[Number(id) - 1], count })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
