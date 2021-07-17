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

// Hoặc có cách khác để mình by pass việc gọi API, ok a

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

    // function bên dưới nghĩa là, khi dùng context, sẽ ko có middleware như redux
    // Nên khi a gọi action a phải gọi: actionA(args)(dispatch) vì ở action mình return về dispatch (High order func)
    // solution là mình sẽ dùng Object.keys để đưa actions về mảng, loop through and return về action đã bind (dispatch)
    // => mình sẽ ko cần phải pass (dispatch) ở cuối mỗi action
    Object.keys(actions).forEach((key) =>
      setEnhancedActions((prev) => ({
        ...prev,
        [key]: (...args) => actions[key](args)(dispatch),
      }))
    );
  }, []);

  return (
    <AppContext.Provider value={{ state, actions: enhancedActions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { useAppContext };
export default AppProvider;
