import React, { useRef } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  TopContainer,
  BottomContainer,
  Total,
  ViewCartBtn,
  CheckOutBtn,
  ProductInCart,
  DeleteBtn,
  ProductDetail,
} from "./styled";
import { Brand, Title, Price, OverLay } from "./styled";
import { ImageContainer } from "../../ImageContainer";

const CartPopup = ({ cart = [], isShowPopup, removeFromCart, handleClick }) => {
  const popupRef = useRef();
  const handleClickOutside = (event) => {
    if (popupRef.current && event.target.contains(popupRef.current)) {
      handleClick();
    }
  };
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.count * item.price,
    0
  );

  return isShowPopup ? (
    <OverLay onClick={handleClickOutside}>
      <Container ref={popupRef}>
        <TopContainer>
          {cart &&
            cart.length > 0 &&
            cart.map((item, index) => (
              <ProductInCart key={`incart${index}`}>
                <ImageContainer
                  image={item.image}
                  width="25%"
                  paddingTop="25%"
                  marginRight="10px"
                />
                <ProductDetail>
                  <Title>
                    {`${item.title} `}
                    <span>{`x ${item.count}`}</span>
                  </Title>
                  <Brand>{item.brand}</Brand>
                  <Price>{`$${item.price}.00`}</Price>
                </ProductDetail>
                <DeleteBtn
                  onClick={() => removeFromCart(item.id)}
                  data-testid={`removeFromCart${index}`}
                >
                  <i className="bi bi-x-lg"></i>
                </DeleteBtn>
              </ProductInCart>
            ))}
        </TopContainer>
        <BottomContainer>
          <Total>
            <div>TOTAL</div>
            <div>{`$${total}.00`}</div>
          </Total>
          <ViewCartBtn>
            <Link to="/cart">VIEW CART</Link>
          </ViewCartBtn>
          <CheckOutBtn>CHECK OUT</CheckOutBtn>
        </BottomContainer>
      </Container>
    </OverLay>
  ) : (
    <></>
  );
};

export default CartPopup;
