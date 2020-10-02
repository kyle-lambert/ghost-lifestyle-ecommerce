import React from "react";
import "./FavoritesMenuOpen.scss";

import { ReactComponent as FavoriteOutline } from "../../assets/icons/favorite_outline.svg";
import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";
import { useFavoritesState } from "../../contexts/FavoritesContext";

function FavoritesMenuOpen({ handleOpen }) {
  const favorites = useFavoritesState();
  const hasFavorites = favorites.length > 0;
  return (
    <button type="button" onClick={handleOpen} className="FavoritesMenuOpen">
      {hasFavorites ? <FavoriteSolid /> : <FavoriteOutline />}
    </button>
  );
}

export default FavoritesMenuOpen;
