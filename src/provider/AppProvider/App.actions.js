const startFetching = () => (dispatch) => dispatch({ type: "APP/FETCH_START" });

const setProducts = (products) => (dispatch) =>
  dispatch({ type: "APP/SET_PRODUCTS", payload: products });
const setProductDetail = (product) => (dispatch) =>
  dispatch({ type: "APP/SET_PRODUCT", payload: product });
const addToCart = (product) => (dispatch) =>
  dispatch({ type: "APP/ADD_TO_CART", payload: product });
const removeFromCart = (productId) => (dispatch) =>
  dispatch({ type: "APP/REMOVE_FROM_CART", payload: productId });

const incrementCount = (productId, productCount) => dispatch => dispatch({ type: 'APP/INCREMENT_COUNT', payload: { id: productId, count: productCount } })
const decrementCount = (productId, productCount) => dispatch => dispatch({ type: 'APP/DECREMENT_COUNT', payload: { id: productId, count: productCount } })

const actions = {
  startFetching,
  setProducts,
  setProductDetail,
  addToCart,
  removeFromCart,
  incrementCount,
  decrementCount,
};

export default actions;
