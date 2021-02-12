import React from "react";
import axios from "axios";
import { BASE_URL } from "../data/api";

const types = {
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCES",
  GET_PRODUCT_LOADING: "GET_PRODUCT_LOADING",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE",
  SET_FORM_FLAVOUR: "SET_FLAVOUR",
  SET_FORM_QTY: "SET_QTY",
  SET_SLUG: "SET_SLUG",
  RESET_REDUCER: "RESET_REDUCER",
};

const initialState = {
  product: null,
  loading: false,
  error: false,
  slug: "",
  formFlavour: null,
  formQty: 1,
};

function productReducer(state, action) {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    }
    case types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.SET_SLUG: {
      return {
        ...state,
        slug: action.payload,
      };
    }
    case types.SET_FORM_FLAVOUR: {
      return {
        ...state,
        formFlavour: action.payload,
      };
    }
    case types.SET_FORM_QTY: {
      return {
        ...state,
        formQty: action.payload,
      };
    }
    case types.RESET_REDUCER: {
      return initialState;
    }
    default:
      return state;
  }
}

function creator(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

function useProduct() {
  const [{ error, loading, product, slug, formFlavour, formQty }, dispatch] = React.useReducer(
    productReducer,
    initialState
  );

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchProductBySlug = () => {
      // dispatch(creator(types.RESET_REDUCER));
      dispatch(creator(types.GET_PRODUCT_LOADING));

      const config = {
        method: "get",
        baseURL: BASE_URL,
        url: "/supplements",
        params: { slug: slug },
        cancelToken: source.token,
      };

      axios(config)
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length === 1) {
            dispatch(creator(types.GET_PRODUCT_SUCCESS, data.data[0]));
          } else {
            throw new Error("Product does not exist");
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Axios request cancelled");
          } else {
            dispatch(creator(types.GET_PRODUCT_FAILURE));
          }
        });
    };

    if (slug) {
      fetchProductBySlug();
    }

    return () => {
      source.cancel();
    };
  }, [slug, dispatch]);

  React.useEffect(() => {
    if (product) {
      const { flavours } = product;
      const initialFlavour = flavours[0];

      dispatch(creator(types.SET_FORM_FLAVOUR, initialFlavour));
    }
  }, [product, dispatch]);

  const setSlug = React.useCallback(
    (slug) => {
      dispatch(creator(types.SET_SLUG, slug));
    },
    [dispatch]
  );

  const setFormFlavour = (flavourId) => {
    const { flavours } = product;
    const newFlavour = flavours.find((f) => f.id === flavourId);

    if (newFlavour) {
      dispatch(creator(types.SET_FORM_FLAVOUR, newFlavour));
    }
  };

  const setFormQty = (qty) => {
    dispatch(creator(types.SET_FORM_QTY, qty));
  };

  return {
    product,
    error,
    loading,
    setSlug,
    setFormFlavour,
    setFormQty,
    formFlavour,
    formQty,
  };
}

export default useProduct;
