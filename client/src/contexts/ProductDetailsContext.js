
import React, { useReducer, useContext } from 'react';

const ProductDetailsStateContext = React.createContext();
const ProductDetailsDispatchContext = React.createContext();

const initState = {
  product: null,
  loading: false,
  error: null,
  formFlavour: "",
  formQty: 1,
  imageFlavourIndex: 0
}

function reducer(state, action) {
  switch (action.type) {
    case useProductDetails.types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case useProductDetails.types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case useProductDetails.types.GET_PRODUCT_loading: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case useProductDetails.types.SET_FORM_FLAVOUR: {
      return {
        ...state,
        formFlavour: action.payload,
      };
    }
    case useProductDetails.types.SET_FORM_QTY: {
      return {
        ...state,
        formQty: action.payload,
      };
    }
    case useProductDetails.types.SET_IMAGE_FLAVOUR_INDEX: {
      return {
        ...state,
        imageFlavourIndex: action.payload,
      };
    }
    case useProductDetails.types.RESET_STATE: {
      return initState
    }
    default: return state
  }
}

function ProductDetailsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <ProductDetailsStateContext.Provider value={state}>
      <ProductDetailsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDetailsDispatchContext.Provider>
    </ProductDetailsStateContext.Provider>
  )
}

function useProductDetails() {
  const state = useContext(ProductDetailsStateContext);
  const dispatch = useContext(ProductDetailsDispatchContext);
  return [state, dispatch];
}

useProductDetails.types = {
  GET_PRODUCT_SUCCESS: "get-product-success",
  GET_PRODUCT_LOADING: "get-product-loading",
  GET_PRODUCT_FAILURE: "get-product-failure",
  SET_FORM_FLAVOUR: "set-from-flavour",
  SET_FORM_QTY: "set-form-qty",
  SET_IMAGE_FLAVOUR_INDEX: "set-image-flavour-index",
  RESET_STATE: "reset-state",
};

export { ProductDetailsProvider, useProductDetails }