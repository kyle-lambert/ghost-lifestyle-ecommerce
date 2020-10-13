import React from "react";
import axios from "axios";
import { productTypes as types } from "../store/types";
import {
  ProductStateContext,
  ProductDispatchContext,
  initialState,
} from "../contexts/ProductContext";

const creator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

const fetchProductBySlug = (slug, source, dispatch) => {
  const config = {
    method: "get",
    baseURL: "http://localhost:1337",
    url: "/supplements",
    params: { slug: slug },
    cancelToken: source.token,
  };

  if (slug) {
    dispatch(creator(types.GET_PRODUCT_LOADING, true));
    axios(config)
      .then((data) => {
        if (Array.isArray(data.data) && data.data.length === 1) {
          dispatch(creator(types.GET_PRODUCT_SUCCESS, data.data[0]));
        } else {
          // handle incorrect data shape
        }
        dispatch(creator(types.GET_PRODUCT_LOADING, false));
      })
      .catch((error) => {
        dispatch(creator(types.GET_PRODUCT_FAILURE, true));
        dispatch(creator(types.GET_PRODUCT_LOADING, false));
      });
  }
};

const updateSlug = (slug, dispatch) => {
  dispatch(creator(types.SET_SLUG, slug));
};

const updateQty = (qty, dispatch) => {
  dispatch(creator(types.SET_QTY, qty));
};

const resetReducer = (dispatch) => {
  dispatch(creator(types.RESET_REDUCER, initialState));
};

function useProductContext() {
  const state = React.useContext(ProductStateContext);
  const dispatch = React.useContext(ProductDispatchContext);

  // Initialise product flavour
  React.useEffect(() => {
    if (state.product) {
      const { flavours } = state.product;
      const flavour = flavours[0];

      dispatch(creator(types.SET_FLAVOUR, flavour));
    }
  }, [state.product, dispatch]);

  // Fetch product on slug change
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    fetchProductBySlug(state.slug, source, dispatch);

    return () => {
      source.cancel();
    };
  }, [state.slug, dispatch]);

  const updateFlavour = (id) => {
    if (state.product) {
      const { flavours } = state.product;
      const flavour = flavours.find((f) => f.id === id);

      if (flavour) {
        dispatch(creator(types.SET_FLAVOUR, flavour));
      }
    }
  };

  return { dispatch, updateSlug, updateFlavour, updateQty, resetReducer, ...state };
}

export default useProductContext;
