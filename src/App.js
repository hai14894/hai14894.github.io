import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Category from "./category/Category";
import AppContextProvider from "./context";
import Cart from "./cart/Cart";
import Product from "./product/Product";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default App;
