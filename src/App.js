import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Category from "./category/Category";
import Cart from "./cart/Cart";
import Product from "./product/Product";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </div>
  );
};

export default App;
