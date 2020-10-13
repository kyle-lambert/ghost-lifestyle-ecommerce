import React from 'react';
import { StoreContext } from '../contexts/StoreContext';

function useFavoritesContext() {
  const { favorites, setFavorites, favoritesStored, setFavoritesStored } = React.useContext(StoreContext)

  React.useEffect(() => {
    setFavorites(favoritesStored)
  }, [setFavorites, favoritesStored])

  const addFavorite = (product) => {
      setFavorites(state => {
        return [...state, product]
      })
      setFavoritesStored(state => {
        return [...state, product]
      })
  }

  const removeFavorite = (id) => {
    const index= favorites.findIndex(p => p.id === id);

    if (index !== -1) {
      setFavorites(state => {
        return [...state.slice(0, index), ...state.slice(index + 1)]
      })
      setFavoritesStored(state => {
        return [...state.slice(0, index), ...state.slice(index + 1)]
      })
    }
  }


  return {
    favorites,
    addFavorite,
    removeFavorite
  }
}

export default useFavoritesContext;