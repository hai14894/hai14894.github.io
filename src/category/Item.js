import React from "react";
// import img01 from "../media/blue-stripe-stoneware-plate.jpg";
// import img02 from "../media/hand-painted-blue-flat-dish.jpg"
// import img03 from "../media/heme.jpg"
// import img04 from "../media/mashiko-yaki-green-small-plate.jpg"
// import img05 from "../media/mashiko-yaki-indigo-small-plate.jpg"
// import img06 from "../media/mashiko-yaki-saucer.jpg"
const Item = (props) => {
  // const images = {
  //   img01,
  //   img02,
  //   img03,
  //   img04,
  //   img05,
  //   img06,
  // };
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.price}</span>
      
    </div>
  );
};

export default Item;
