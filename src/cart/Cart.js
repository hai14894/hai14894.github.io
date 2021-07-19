import React from "react";
import "./Cart.css";

import { useAppContext } from "../provider/AppProvider/App.provider";
import NavBar from "../components/NavBar/NavBar";

const Cart = () => {
  const {
    state: { cart },
    actions: { removeFromCart, incrementCount, decrementCount },
  } = useAppContext();

  return (
    <div className="Cart">
      <NavBar />
      <span className="shopping-cart-text">Shopping cart</span>
      <div className="cart-wrapper">
        {cart.length < 1 ? (
          <div>Cart is empty</div>
        ) : (
          cart.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <img src={`/media/${item.image}`} />
                <p>{item.price * item.count}</p>
                <div>
                  <p>{item.count}</p>
                  <button onClick={() => incrementCount(item.id, item.count)}>
                    +
                  </button>
                  <button
                    disabled={item.count === 1}
                    onClick={() => decrementCount(item.id, item.count)}
                  >
                    -
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>x</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
