import React from "react";
import axios from "axios";

const types = {
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCES",
  GET_PRODUCT_LOADING: "GET_PRODUCT_LOADING",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_LOADING",
  SET_FORM_FLAVOUR: "SET_FLAVOUR",
  SET_FORM_QTY: "SET_QTY",
  SET_SLUG: "SET_SLUG",
  RESET_REDUCER: "RESET_REDUCER",
};

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
      return action.payload;
    }
    default:
      return state;
  }
}

const initialState = {
  product: null,
  loading: true,
  error: false,
  slug: "",
  formFlavour: null,
  formQty: 1,
};

function creator(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

const fetchProductBySlug = (slug, source, dispatch) => {
  const config = {
    method: "get",
    baseURL: "http://localhost:1337",
    url: "/supplements",
    params: { slug: slug },
    cancelToken: source.token,
  };

  dispatch(creator(types.GET_PRODUCT_LOADING, true));
  axios(config)
    .then((data) => {
      if (Array.isArray(data.data) && data.data.length === 1) {
        dispatch(creator(types.GET_PRODUCT_SUCCESS, data.data[0]));
      } else {
        // handle incorrect data shape
        console.log("Product does not exist!");
      }
      dispatch(creator(types.GET_PRODUCT_LOADING, false));
    })
    .catch((error) => {
      dispatch(creator(types.GET_PRODUCT_FAILURE, true));
      dispatch(creator(types.GET_PRODUCT_LOADING, false));
    });
};

function useProduct() {
  const [{ product, slug, formFlavour, formQty }, dispatch] = React.useReducer(
    productReducer,
    initialState
  );

  // Fetch new product when slug is updated
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if (slug) {
      fetchProductBySlug(slug, source, dispatch);
    }
  }, [slug, dispatch]);

  // Initialise flavour if a product exists
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
    setSlug,
    setFormFlavour,
    setFormQty,
    formFlavour,
    formQty,
  };
}

export default useProduct;
