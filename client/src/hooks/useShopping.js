import React from "react";
import axios from "axios";

const types = {
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_LOADING: "GET_CATEGORIES_LOADING",
  GET_CATEGORIES_FAILURE: "GET_CATEGORIES_FAILURE",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_LOADING: "GET_PRODUCTS_LOADING",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
};

function shoppingReducer(state, action) {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: [...action.payload],
      };
    }
    case types.GET_CATEGORIES_LOADING: {
      return {
        ...state,
        categoriesLoading: action.payload,
      };
    }
    case types.GET_CATEGORIES_FAILURE: {
      return {
        ...state,
        categoriesError: action.payload,
      };
    }
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
    default:
      return state;
  }
}

const initialState = {
  activeCategory: "",
  categories: [],
  categoriesLoading: true,
  categoriesError: false,
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

function fetchProductsByCategory({ activeCategory, dispatch }) {
  const config = {
    method: "get",
    baseURL: "http://localhost:1337",
    url: "/categories",
    params: {
      slug: activeCategory,
    },
  };
  dispatch(creator(types.GET_PRODUCTS_LOADING, true));
  axios(config)
    .then((data) => {
      if (Array.isArray(data.data) && data.data.length === 1) {
        dispatch(creator(types.GET_PRODUCTS_SUCCESS, data.data[0].supplements));
      } else {
        // Handle no products error here
        console.log("No products found for this category.");
      }
      dispatch(creator(types.GET_PRODUCTS_LOADING, false));
    })
    .catch(() => {
      dispatch(creator(types.GET_PRODUCTS_FAILURE, true));
      dispatch(creator(types.GET_PRODUCTS_LOADING, false));
    });
}

function fetchAllProducts({ dispatch }) {
  const config = {
    method: "get",
    baseURL: "http://localhost:1337",
    url: "/supplements",
  };
  dispatch(creator(types.GET_PRODUCTS_LOADING, true));
  axios(config)
    .then((data) => {
      if (Array.isArray(data.data) && data.data.length > 0) {
        dispatch(creator(types.GET_PRODUCTS_SUCCESS, data.data));
      } else {
        // Handle no products error here
        console.log("No products found for this category.");
      }
      dispatch(creator(types.GET_PRODUCTS_LOADING, false));
    })
    .catch(() => {
      dispatch(creator(types.GET_PRODUCTS_FAILURE, true));
      dispatch(creator(types.GET_PRODUCTS_LOADING, false));
    });
}

function useShopping() {
  const [
    {
      categories,
      categoriesLoading,
      categoriesError,
      products,
      productsLoading,
      productsError,
      activeCategory,
    },
    dispatch,
  ] = React.useReducer(shoppingReducer, initialState);

  // Fetch product categories once
  React.useEffect(() => {
    const fetchCategories = () => {
      dispatch(creator(types.GET_CATEGORIES_LOADING, true));

      axios
        .get("/categories", {
          baseURL: "http://localhost:1337",
        })
        .then((data) => {
          if (Array.isArray(data.data)) {
            dispatch(creator(types.GET_CATEGORIES_SUCCESS, data.data));
          } else {
            // Handle no categories error here
            console.log("No categories found.");
          }
          dispatch(creator(types.GET_CATEGORIES_LOADING, false));
        })
        .catch(() => {
          dispatch(creator(types.GET_CATEGORIES_FAILURE, true));
          dispatch(creator(types.GET_CATEGORIES_LOADING, false));
        });
    };

    fetchCategories();
  }, []);

  // Fetch new products everytime the active category changes
  React.useEffect(() => {
    if (activeCategory) {
      if (activeCategory !== "all") {
        fetchProductsByCategory({ activeCategory, dispatch });
      } else {
        fetchAllProducts({ dispatch });
      }
    }
  }, [activeCategory]);

  const setCategory = React.useCallback(
    (category) => {
      const newCategory = category.trim();
      dispatch(creator(types.SET_ACTIVE_CATEGORY, newCategory));
    },
    [dispatch]
  );

  return {
    categories,
    categoriesLoading,
    categoriesError,
    products,
    productsLoading,
    productsError,
    activeCategory,
    setCategory,
  };
}

export default useShopping;
