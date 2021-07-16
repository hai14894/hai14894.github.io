import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Category from "./category/Category";
import ProductContext from "./context";
import Cart from "./cart/Cart";
import Product from "./product/Product";

const App = () => {
  const [products, setProducts] = useState(null);
  const getData = async function () {
    await axios
      .get("/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(products);
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContext.Provider value={{ products, setProducts }}>
          <Switch>
            <Route exact path="/" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
