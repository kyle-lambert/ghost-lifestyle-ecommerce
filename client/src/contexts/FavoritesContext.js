import React, { useState, createContext, useReducer, useContext } from "react";

import ProteinImage from "../assets/chips-ahoy.png";

const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const FavoritesStateContext = createContext();
const FavoritesDispatchContext = createContext();

const initState = {
  favorites: [
    {
      id: 1,
      name: "Whey X Chips Ahoy! 1",
      image: ProteinImage,
      flavour: "Marshmallow Cereal Milk®",
      price: 29.99,
      qty: 1,
      isFavorite: true,
    },
    {
      id: 2,
      name: "Whey X Chips Ahoy! 2",
      image: ProteinImage,
      flavour: "Marshmallow Cereal Milk®",
      price: 69.99,
      qty: 2,
      isFavorite: true,
    },
    {
      id: 3,
      name: "Whey X Chips Ahoy! 3",
      image: ProteinImage,
      flavour: "Marshmallow Cereal Milk®",
      price: 99.99,
      qty: 3,
      isFavorite: true,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        favorites: [
          ...state.favorites.filter((cur) => cur.id !== action.payload),
        ],
      };
    default:
      return state;
  }
}

function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <FavoritesStateContext.Provider value={state}>
      <FavoritesDispatchContext.Provider value={dispatch}>
        {children}
      </FavoritesDispatchContext.Provider>
    </FavoritesStateContext.Provider>
  );
}

const useFavoritesState = () => {
  const state = useContext(FavoritesStateContext);
  return state.favorites;
};

const useFavoritesDispatch = () => {
  const dispatch = useContext(FavoritesDispatchContext);
  return dispatch;
};

export { FavoritesProvider, useFavoritesState, useFavoritesDispatch };
