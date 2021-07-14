import React, { Component } from 'react';
import './Product.css';

const Product = ({ match }) => {
    return <div className="Product">Product {match.params.id}</div>;
};

export default Product;
