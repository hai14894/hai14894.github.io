

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(action)
  switch (type) {
    case "APP/FETCH_START": {
      return { ...state, isLoading: true };
    }
    case "APP/SET_PRODUCTS": {
      return { ...state, products: payload, isLoading: false };
    }
    case "APP/FETCH_FAILURE": {
      return { ...state, isLoading: false, isError: true };
    }
    case "APP/SET_PRODUCT": {
      return { ...state, product: payload };
    }
    case "APP/ADD_TO_CART": {
      const updatedCart = [...state.cart, payload];
      return { ...state, cart: updatedCart };
    }
    case "APP/REMOVE_FROM_CART": {
      const updatedCart = [...state.cart].filter(
        (product) => product.id !== payload
      );
      return { ...state, cart: updatedCart };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
