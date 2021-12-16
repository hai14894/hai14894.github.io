import React from "react";

import { useAppContext } from "../provider/AppProvider/App.provider";
import GlobalNav from "../components/NavBar/NavBar";
import Payment from "../payment/Payment";
import { Link } from "react-router-dom";
import {
  Heading,
  CartContainer,
  ProductContainer,
  QuantityContainer,
  CountContainer,
  ActionContainer,
} from "./styled";
import {
  TopTable,
  DetailTable,
  OverView,
  BottomTable,
  ProductDetail,
  Brand,
  Title,
} from "./styled";
import { ImageContainer } from "../components/ImageContainer";
import BaseSection from "../components/layout/BaseSection";
import {
  CountBox,
  CountNumber,
  IncrementBtn,
  DecrementBtn,
} from "../product/ProductDetails/styled";
import { colors } from "../components/layout/constant";
import "bootstrap-icons/font/bootstrap-icons.css";

const Cart = () => {
  const {
    state: { cart = [] },
    actions: { removeFromCart, incrementCount, decrementCount },
  } = useAppContext();
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.count * item.price,
    0
  );

  return (
    <div className="Cart">
      <GlobalNav />
      <BaseSection bgColor={colors.lightBtn}>
        <Heading>
          <h1>Shopping Cart</h1>
        </Heading>
      </BaseSection>
      <BaseSection bgColor={colors.lightBtn}>
        <CartContainer>
          <TopTable>
            <ProductContainer>PRODUCT</ProductContainer>
            <QuantityContainer>QUANTITY</QuantityContainer>
            <CountContainer>TOTAL</CountContainer>
            <ActionContainer>ACTION</ActionContainer>
          </TopTable>
          {cart.length > 0 &&
            cart.map((item, index) => (
              <DetailTable key={`detailtable${index}`}>
                <ProductContainer>
                  <ImageContainer image={item.image} marginRight="10px" />
                  <ProductDetail>
                    <Brand>{item.brand}</Brand>
                    <Title>{item.title}</Title>
                  </ProductDetail>
                </ProductContainer>
                <QuantityContainer>
                  <CountBox>
                    <CountNumber>{item.count}</CountNumber>
                    <IncrementBtn
                      onClick={() => incrementCount(item.id, item.count)}
                    >
                      +
                    </IncrementBtn>
                    <DecrementBtn
                      onClick={() => decrementCount(item.id, item.count)}
                    >
                      -
                    </DecrementBtn>
                  </CountBox>
                </QuantityContainer>
                <CountContainer>{`$${
                  item.price * item.count
                }.00`}</CountContainer>
                <ActionContainer>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ borderStyle: "none", background: "none" }}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </ActionContainer>
              </DetailTable>
            ))}
          <OverView>
            <div>
              <div>CART OVERVIEW</div>
            </div>
            <div>
              <div>SUBTOTAL</div>
              <div>{`$${total}.00`}</div>
            </div>
            <div>
              <div>TOTAL</div>
              <div>{`$${total}.00`}</div>
            </div>
          </OverView>
          <BottomTable>
            <Link>CONTINUE SHOPPING</Link>
            <button>{`CHECK OUT ($${total}.00)`}</button>
          </BottomTable>
          <Payment></Payment>
        </CartContainer>
      </BaseSection>
    </div>
  );
};

export default Cart;
