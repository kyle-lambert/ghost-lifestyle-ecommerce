import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const StoreContext = React.createContext()

function StoreProvider({children}) {
  const [favorites, setFavorites] = React.useState([]);
  const [favoritesStored, setFavoritesStored] = useLocalStorage('favorites', []);
  const [cart, setCart] = React.useState([]);
  const [cartStored, setCartStored] = useLocalStorage('cart', []);

  const state = {
    favorites,
    setFavorites,
    favoritesStored,
    setFavoritesStored,
    cart,
    setCart,
    cartStored,
    setCartStored
  }

  return (
    <StoreContext.Provider value={state}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
