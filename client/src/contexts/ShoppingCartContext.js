import React from "react";
import { v4 as uuidv4 } from "uuid";

const ShoppingCartStateContext = React.createContext();
const ShoppingCartDispatchContext = React.createContext();

const types = {
  SET_TOTAL: "SET_TOTAL",
  SET_SHOPPING_CART: "SET_SHOPPING_CART",
  REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS",
};

const initialState = {
  shoppingCart: [],
  total: 0,
};

function creator(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

function ShoppingCartReducer(state, action) {
  switch (action.type) {
    case types.SET_SHOPPING_CART: {
      return {
        ...state,
        shoppingCart: [...action.payload],
      };
    }
    case types.SET_TOTAL: {
      return {
        ...state,
        total: action.payload,
      };
    }
    case types.REMOVE_ALL_ITEMS: {
      return action.payload;
    }
    default:
      return state;
  }
}

function ShoppingCartProvider({ children }) {
  const [state, dispatch] = React.useReducer(ShoppingCartReducer, initialState);

  // Check for items in local storage and initialise state shopping cart
  React.useEffect(() => {
    const initialiseShoppingCartStorage = () => {
      const items = window.localStorage.getItem("shoppingCart");

      if (items) {
        const newShoppingCart = JSON.parse(items);
        dispatch(creator(types.SET_SHOPPING_CART, newShoppingCart));
      }
    };

    initialiseShoppingCartStorage();
  }, []);

  // Update total amount when ShoppingCart changes
  React.useEffect(() => {
    const getTotal = () => {
      return state.shoppingCart.reduce((acc, cur) => {
        const productPrice = cur.product.price * cur.options.qty;
        return acc + productPrice;
      }, 0);
    };
    dispatch(creator(types.SET_TOTAL, getTotal()));
  }, [state.shoppingCart]);

  // Sync shopping cart changes with local storage
  React.useEffect(() => {
    window.localStorage.setItem(
      "shoppingCart",
      JSON.stringify(state.shoppingCart)
    );
  }, [state.shoppingCart]);

  return (
    <ShoppingCartStateContext.Provider value={state}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartStateContext.Provider>
  );
}

function createCartItem({ product, formFlavour, formQty }) {
  return {
    cartItemId: uuidv4(),
    product: product,
    options: {
      flavour: formFlavour,
      qty: formQty,
    },
  };
}

function useShoppingCartContext() {
  const state = React.useContext(ShoppingCartStateContext);
  const dispatch = React.useContext(ShoppingCartDispatchContext);

  const addToCart = ({ product, formFlavour, formQty }) => {
    const { shoppingCart } = state;
    const newCartItem = createCartItem({ product, formFlavour, formQty });

    const newShoppingCart = [...shoppingCart, newCartItem];
    dispatch(creator(types.SET_SHOPPING_CART, newShoppingCart));
  };

  const removeFromCart = (cartItemId) => {
    const { shoppingCart } = state;
    const cartItemIndex = shoppingCart.findIndex(
      (f) => f.cartItemId === cartItemId
    );

    if (cartItemIndex !== -1) {
      const newShoppingCartItem = [
        ...shoppingCart.slice(0, cartItemIndex),
        ...shoppingCart.slice(cartItemIndex + 1),
      ];

      dispatch(creator(types.SET_SHOPPING_CART, newShoppingCartItem));
    }
  };

  const clearCart = React.useCallback(() => {
    window.localStorage.setItem("shoppingCart", JSON.stringify([]));
    dispatch(creator(types.REMOVE_ALL_ITEMS, initialState));
  }, [dispatch]);

  return {
    shoppingCart: state.shoppingCart,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export { ShoppingCartProvider, useShoppingCartContext };
