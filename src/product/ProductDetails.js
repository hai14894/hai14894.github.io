import React from "react";

const ProductDetails = (props) => {
  return (
    <div>
      {props.title}
      {props.price}
    </div>
  );
};

export default ProductDetails;
