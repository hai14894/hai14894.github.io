import React from "react";

const CategoryProduct = (props) => {
  const { title, description, price, image } = props;

  return (
    <div>
      <span>{title}</span>
      <span>{description}</span>
      <span>{price}</span>
      <img src={`/media/${image}`} />
    </div>
  );
};

export default CategoryProduct;
