import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import actions from "./App.actions";
import reducer from "./App.reducer";
import axios from "axios";

const initialState = {
  isLoading: false,
  products: [],
  cart: [],
  product: undefined,
};

const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Cannot use 'useAppContext' without AppProvider!");
  }

  return context;
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {}, () => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : initialState;
  });
  const [enhancedActions, setEnhancedActions] = useState(actions);

  const fetchProducts = () => {
    actions.startFetching()(dispatch);
    axios
      .get("/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        actions.setProducts(response.data)(dispatch);
      });
  };

  useEffect(() => {
    fetchProducts();
    Object.keys(actions).forEach((key) =>
      setEnhancedActions((prev) => ({
        ...prev,
        [key]: (...args) => actions[key](...args)(dispatch),
      }))
    );
  }, []);

  useEffect(() => {}, [state]);

  return (
    <AppContext.Provider value={{ state, actions: enhancedActions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { useAppContext };
export default AppProvider;
