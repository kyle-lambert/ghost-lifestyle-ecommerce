import React from "react";
import "./FavoritesButton.scss";

import { ReactComponent as FavoriteOutline } from "../../assets/icons/favorite_outline.svg";
import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";

function FavoritesButton({ handleFavorites, hasFavorites }) {
  return (
    <button type="button" onClick={handleFavorites} className="FavoritesButton">
      {hasFavorites ? <FavoriteSolid /> : <FavoriteOutline />}
    </button>
  );
}

export default FavoritesButton;
