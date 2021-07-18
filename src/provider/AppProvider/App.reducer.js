const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
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
      let updatedCart = [...state.cart];
      const productIndex = [...state.cart].findIndex(
        (product) => product.id === payload.id
      );

      productIndex > -1
        ? (updatedCart[productIndex] = payload)
        : updatedCart.push(payload);

      return { ...state, cart: updatedCart };
    }
    case "APP/REMOVE_FROM_CART": {
      const updatedCart = [...state.cart].filter(
        (product) => product.id !== payload
      );
      return { ...state, cart: updatedCart };
    }
    case "APP/INCREMENT_COUNT": {
      const updatedCart = [...state.cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === payload.id
      );

      updatedCart[productIndex].count += 1;

      return { ...state, cart: updatedCart };
    }
    case "APP/DECREMENT_COUNT": {
      const updatedCart = [...state.cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === payload.id
      );

      updatedCart[productIndex].count -= 1
      
      return { ...state, cart: updatedCart };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
