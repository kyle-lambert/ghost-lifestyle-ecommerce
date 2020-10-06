import React from "react";
import * as S from "./StyledFavoriteToggle.js";

import Icon from "../Icon";

function FavoriteToggle({ isFavorite }) {
  return (
    <S.Button>
      {isFavorite ? <Icon favoriteSolid /> : <Icon favoriteOutline />}
    </S.Button>
  );
}

export default FavoriteToggle;
