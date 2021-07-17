import React from "react";
import "./Cart.css";

import { useAppContext } from "../provider/AppProvider/App.provider";

const Cart = () => {
  const {
    state: { cart },
    actions: { removeFromCart },
  } = useAppContext();
  return (
    <div className="Cart">
      {cart && cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.price * item.count}</p>
              <div>
                <p>{item.count}</p>
                <button>+</button>
                <button>-</button>
              </div>
            </div>
          );
        })
      ) : (
        <div>Cart empty</div>
      )}
    </div>
  );
};

export default Cart;
