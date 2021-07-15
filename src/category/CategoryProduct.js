import React from "react";

const CategoryProduct = (props) => {

  return (
    <div>
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.price}</span>
      <img src={`/media/${props.image}`}/>
    </div>
  );
};

export default CategoryProduct;
