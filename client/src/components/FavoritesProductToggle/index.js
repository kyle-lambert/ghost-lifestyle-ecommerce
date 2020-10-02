import React, { useEffect, useState } from "react";
import "./FavoritesProductToggle.scss";

import { ReactComponent as FavoriteOutline } from "../../assets/icons/favorite_outline.svg";
import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";
import { useFavoritesState } from "../../contexts/FavoritesContext";

function FavoritesProductToggle({ productId }) {
  const favorites = useFavoritesState();
  return (
    <button type="button" className="FavoritesProductToggle">
      {isFavorite ? <FavoriteSolid /> : <FavoriteOutline />}
    </button>
  );
}

export default FavoritesProductToggle;
