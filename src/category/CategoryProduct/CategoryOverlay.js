import React from "react";

import { Overlay, ViewDetails, AddToCart } from "./styled";
import { useAppContext } from "../../provider/AppProvider/App.provider";

const CategoryOverlay = ({ isShowOverlay, product, id }) => {
  const {
    actions: { addToCart, setProductDetail },
  } = useAppContext();

  return (
    <Overlay isShowOverlay={isShowOverlay}>
      {isShowOverlay && (
        <>
          <ViewDetails
            to={`/product/${id}`}
            onClick={() => setProductDetail({ ...product, id: id })}
          >
            <span>View Details</span>
          </ViewDetails>
          <AddToCart
            onClick={() => addToCart({ ...product, id: id, count: 1 })}
          >
            Add To Cart
          </AddToCart>
        </>
      )}
    </Overlay>
  );
};

export default CategoryOverlay;
