import React from "react";
import productReducer from "../store/reducers/productReducer";

const ProductStateContext = React.createContext();
const ProductDispatchContext = React.createContext();

const initialState = {
  product: null,
  loading: false,
  error: false,
  slug: "",
  flavour: null,
  qty: 1,
};

function ProductProvider({ children }) {
  const [state, dispatch] = React.useReducer(productReducer, initialState);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>{children}</ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export { ProductStateContext, ProductDispatchContext, ProductProvider, initialState };
