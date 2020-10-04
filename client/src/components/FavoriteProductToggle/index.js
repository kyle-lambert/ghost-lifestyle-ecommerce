import React, { useEffect, useState } from "react";
import "./FavoriteProductToggle.scss";

import { ReactComponent as FavoriteOutline } from "../../assets/icons/favorite_outline.svg";
import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";

function FavoriteProductToggle({ productId }) {
  return (
    <button
      onClick={() => console.log("clicked")}
      type="button"
      className="FavoriteProductToggle">
      {false ? <FavoriteSolid /> : <FavoriteOutline />}
    </button>
  );
}

export default FavoriteProductToggle;
