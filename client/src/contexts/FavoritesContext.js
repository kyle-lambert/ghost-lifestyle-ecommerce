import React from "react";

const FavoritesStateContext = React.createContext();
const FavoritesSetterContext = React.createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const initialiseFavoritesStorage = () => {
      const items = window.localStorage.getItem("favorites");

      if (items) {
        setFavorites(JSON.parse(items));
      }
    };

    initialiseFavoritesStorage();
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesStateContext.Provider value={favorites}>
      <FavoritesSetterContext.Provider value={setFavorites}>
        {children}
      </FavoritesSetterContext.Provider>
    </FavoritesStateContext.Provider>
  );
}

function useFavoritesContext() {
  const favorites = React.useContext(FavoritesStateContext);
  const setFavorites = React.useContext(FavoritesSetterContext);

  const addFavorite = (product) => {
    setFavorites((state) => {
      return [...state, product];
    });
  };

  const removeFavorite = (productId) => {
    const productIndex = favorites.findIndex((f) => f.id === productId);

    if (productIndex !== -1) {
      setFavorites((state) => {
        return [
          ...state.slice(0, productIndex),
          ...state.slice(productIndex + 1),
        ];
      });
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
}

export { FavoritesProvider, useFavoritesContext };
