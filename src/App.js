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
  const [product, setProduct] = useState({});
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

  // cart: [ {product1}... {productN} ]

  // increment => check if exist => count += 1
  //           => new product, count = 1
  // decrement => check if count > 1 => count -= 1
  //                 => count = 1 => remove product
  // remove => remove product by key

  const setProductDetail = (data) => setProduct(data);

  useEffect(() => {
    getData();
  }, []);
  console.log(products);
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContext.Provider
          value={{ products, setProducts, product, setProductDetail }}
        >
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
