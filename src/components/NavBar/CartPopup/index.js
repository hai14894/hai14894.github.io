import React from "react";
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
import { Brand, Title, Price } from "./styled";
import { ImageContainer } from "../../ImageContainer";

const CartPopup = ({ cart = [], isShowPopup, removeFromCart }) => {
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.count * item.price,
    0
  );

  return isShowPopup ? (
    <Container>
      <TopContainer>
        {cart &&
          cart.length > 0 &&
          cart.map((item, index) => (
            <ProductInCart key={index}>
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
              <DeleteBtn onClick={() => removeFromCart(item.id)}>X</DeleteBtn>
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
  ) : (
    <></>
  );
};

export default CartPopup;
