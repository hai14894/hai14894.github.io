import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Category} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
        </div>
    );
};

export default App;
