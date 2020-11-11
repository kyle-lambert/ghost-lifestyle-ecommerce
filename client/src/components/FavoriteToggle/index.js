import React from "react";
import * as S from "./StyledFavoriteToggle.js";

import Icon from "../Icon";
import { useFavoritesContext } from "../../contexts/FavoritesContext";

function FavoriteToggle({ product }) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

  const memoizedIndex = React.useMemo(() => {
    return favorites.findIndex((f) => f.id === product.id);
  }, [favorites, product.id]);

  const handleClick = () => {
    if (memoizedIndex !== -1) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <S.Button onClick={handleClick}>
      {memoizedIndex !== -1 ? <Icon favoriteSolid /> : <Icon favoriteOutline />}
    </S.Button>
  );
}

export default FavoriteToggle;
