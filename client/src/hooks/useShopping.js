import React from "react";
import axios from "axios";
import { BASE_URL } from "../data/api";

const types = {
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_LOADING: "GET_PRODUCTS_LOADING",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
  RESET_PRODUCTS: "RESET_PRODUCTS",
};

function shoppingReducer(state, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...action.payload],
      };
    }
    case types.GET_PRODUCTS_LOADING: {
      return {
        ...state,
        productsLoading: action.payload,
      };
    }
    case types.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        productsError: action.payload,
      };
    }
    case types.SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    case types.RESET_PRODUCTS: {
      return {
        ...state,
        products: [],
        productsLoading: true,
        productsError: false,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  activeCategory: "",
  products: [],
  productsLoading: true,
  productsError: false,
};

function creator(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

function useShopping() {
  const [
    { products, productsLoading, productsError, activeCategory },
    dispatch,
  ] = React.useReducer(shoppingReducer, initialState);

  // Fetch new products everytime the active category changes
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    dispatch(creator(types.RESET_PRODUCTS));

    const fetchAllProducts = () => {
      dispatch(creator(types.GET_PRODUCTS_LOADING, true));

      const config = {
        method: "get",
        baseURL: BASE_URL,
        url: "/supplements",
        cancelToken: source.token,
      };

      axios(config)
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length > 0) {
            dispatch(creator(types.GET_PRODUCTS_SUCCESS, data.data));
          } else {
            console.log("No products found for this category.");
          }
          dispatch(creator(types.GET_PRODUCTS_LOADING, false));
        })
        .catch(() => {
          dispatch(creator(types.GET_PRODUCTS_FAILURE, true));
          dispatch(creator(types.GET_PRODUCTS_LOADING, false));
        });
    };

    const fetchProductsByCategory = () => {
      dispatch(creator(types.GET_PRODUCTS_LOADING, true));

      const config = {
        method: "get",
        baseURL: BASE_URL,
        url: "/categories",
        params: {
          slug: activeCategory,
        },
        cancelToken: source.token,
      };

      axios(config)
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length === 1) {
            dispatch(
              creator(types.GET_PRODUCTS_SUCCESS, data.data[0].supplements)
            );
          } else {
            console.log("No products found for this category.");
          }
          dispatch(creator(types.GET_PRODUCTS_LOADING, false));
        })
        .catch(() => {
          dispatch(creator(types.GET_PRODUCTS_FAILURE, true));
          dispatch(creator(types.GET_PRODUCTS_LOADING, false));
        });
    };

    if (activeCategory) {
      if (activeCategory !== "all") {
        fetchProductsByCategory();
      } else {
        fetchAllProducts();
      }
    }

    return () => {
      source.cancel();
    };
  }, [activeCategory]);

  const setCategory = React.useCallback(
    (category) => {
      const newCategory = category.trim();
      dispatch(creator(types.SET_ACTIVE_CATEGORY, newCategory));
    },
    [dispatch]
  );

  return {
    products,
    productsLoading,
    productsError,
    activeCategory,
    setCategory,
  };
}

export default useShopping;
