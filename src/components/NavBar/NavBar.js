import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAppContext } from "../../provider/AppProvider/App.provider";
import CartPopup from "./CartPopup";
import { Container, StyledNav } from "./styled";

const GlobalNav = () => {
  const {
    state: { cart },
    actions: { removeFromCart },
  } = useAppContext();
  const [isShowPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(!isShowPopup);
  };

  const totalCount = cart
    ? cart.reduce((acc, current) => (acc += current.count), 0)
    : 0;

  return (
    <Container>
      <StyledNav expand="md" sticky="top">
        <Navbar.Brand href="#home" id="logo-branch">
          <img src={`/media/logo.png`} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="inner-nav">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="SHOP">
              <NavDropdown.Item href="#">Link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">JOURNAL</Nav.Link>
            <NavDropdown title="MORE">
              <NavDropdown.Item href="#">Link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={`MY CART (${totalCount})`}
              id="nav-cart"
              onClick={handleClick}
            ></NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
      <CartPopup
        cart={cart}
        isShowPopup={isShowPopup}
        removeFromCart={removeFromCart}
        handleClick={handleClick}
      />
    </Container>
  );
};

export default GlobalNav;
