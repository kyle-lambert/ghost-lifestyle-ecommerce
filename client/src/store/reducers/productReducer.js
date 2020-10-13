import { productTypes as types } from "../types";

function productReducer(state, action) {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.SET_SLUG: {
      return {
        ...state,
        slug: action.payload,
      };
    }
    case types.SET_FLAVOUR: {
      return {
        ...state,
        flavour: action.payload,
      };
    }
    case types.SET_QTY: {
      return {
        ...state,
        qty: action.payload,
      };
    }
    case types.RESET_REDUCER: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default productReducer;
