import React, { useState,useContext,useEffect } from "react";

import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context"
import { useParams } from "react-router-dom";

const Product = ({ match }) => {
    const {products} =useContext(ProductContext)
    console.log('====================================');
    console.log(products);
    console.log('====================================');
  return (
     <div className="Product">
      
        Product {match.params.id}
              {/* <ProductDetails  title={product.title} price={product.price}/>
           */}
      
      
      </div>);
};

export default Product;
