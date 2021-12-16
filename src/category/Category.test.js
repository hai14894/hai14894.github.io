import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "../provider/AppProvider/App.provider";
import Category from "./Category";

const MockProduct = [
  {
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue-stripe-stoneware-plate.jpg",
  },
  {
    title: "Hand Painted Blue Flat Dish",
    brand: "Kiriko",
    price: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    image: "hand-painted-blue-flat-dish.jpg",
  },
];

const mockProviderValue = {
  state: {
    loading: false,
    products: MockProduct,
    cart: [
      {
        brand: "Kiriko",
        count: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
        id: 2,
        image: "hand-painted-blue-flat-dish.jpg",
        price: 28,
        title: "Hand Painted Blue Flat Dish",
      },
    ],
  },
};

describe("Category Page test suit", () => {
  const addToCart = jest.fn();
  const removeFromCart = jest.fn();

  it("Should render correct product from Provider", () => {
    const { getByText } = render(
      <AppContext.Provider
        value={{ ...mockProviderValue, actions: { addToCart, removeFromCart } }}
      >
        <Router>
          <Category />
        </Router>
      </AppContext.Provider>
    );

    expect(getByText("Blue Stripe Stoneware Plate")).toBeInTheDocument();
    expect(getByText("Hand Painted Blue Flat Dish")).toBeInTheDocument();
  });

  it('Should render "View Details" with correct link to product page', () => {
    const { container } = render(
      <AppContext.Provider
        value={{ ...mockProviderValue, actions: { addToCart, removeFromCart } }}
      >
        <Router>
          <Category />
        </Router>
      </AppContext.Provider>
    );

    fireEvent.mouseOver(container.querySelector('[data-testid="category1"]'));
    expect(
      container.querySelector('[data-testid="category1"] a')
    ).toHaveAttribute("href", "/product/1");
  });

  it('Should fire action AddToCart when click "Add To Cart" button on overlay', () => {
    const addToCart = jest.fn();
    const { container } = render(
      <AppContext.Provider
        value={{ ...mockProviderValue, actions: { addToCart, removeFromCart } }}
      >
        <Router>
          <Category />
        </Router>
      </AppContext.Provider>
    );
    fireEvent.mouseOver(container.querySelector('[data-testid="category1"]'));

    fireEvent.click(
      container.querySelector('[data-testid="category1"] button')
    );

    expect(addToCart).toHaveBeenCalledWith({
      ...MockProduct[0],
      id: 1,
      count: 1,
    });
  });

  it('Should fire action RemoveCart with correct id when click "X" button on CartPopup', () => {
    const removeFromCart = jest.fn();
    const { container } = render(
      <AppContext.Provider
        value={{ ...mockProviderValue, actions: { addToCart, removeFromCart } }}
      >
        <Router>
          <Category />
        </Router>
      </AppContext.Provider>
    );

    fireEvent.click(container.querySelector("#nav-cart"));
    fireEvent.click(container.querySelector('[data-testid="removeFromCart0"]'));

    expect(removeFromCart).toHaveBeenCalledWith(2);
  });

  it("Should render with correct snapshot", () => {
    const { container } = render(
      <AppContext.Provider
        value={{ ...mockProviderValue, actions: { addToCart, removeFromCart } }}
      >
        <Router>
          <Category />
        </Router>
      </AppContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
