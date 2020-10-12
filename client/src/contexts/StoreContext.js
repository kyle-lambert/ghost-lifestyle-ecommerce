import React, { useContext, useReducer } from "react";


const StoreStateContext = React.createContext();
const StoreDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case useStore.types.ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case useStore.types.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, action.payload),
          ...state.favorites.slice(action.payload + 1),
        ],
      };
    }
    case useStore.types.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case useStore.types.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.payload),
          ...state.cart.slice(action.payload + 1),
        ],
      };
    }
    default: return state;
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    favorites: []
  });

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
}

function useStore() {
  const state = useContext(StoreStateContext);
  const dispatch = useContext(StoreDispatchContext);


  return [state, dispatch];
};

useStore.types = {
  ADD_FAVORITE: 'add-favorite',
  REMOVE_FAVORITE: 'remove-favorite',
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
}

export { StoreProvider, useStore };
