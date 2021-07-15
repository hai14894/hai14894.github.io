import React, { useState,useContext,useEffect } from "react";

import ProductDetails from "./ProductDetails";
import "./Product.css";
import ProductContext from "../context"
import { useParams } from "react-router-dom";

const Product = () => {
    let {id} = useParams()
    const {products} = useContext(ProductContext)
    
  return (
     <div className="Product">
      
        Product {id}
              {/* <ProductDetails  title={product.title} price={product.price}/> */}
          
      
      
      </div>);
};

export default Product;
