import React from "react";
import "./Favorites.scss";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";

import {
  useFavoritesDispatch,
  useFavoritesState,
} from "../../contexts/FavoritesContext";

const FAVORITES_TITLE = "Your Favorites";

function Favorites({ handleClose }) {
  const favorites = useFavoritesState();
  const dispatch = useFavoritesDispatch();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  return (
    <div className="Favorites">
      <span className="Favorites-backdrop"></span>
      <div className="Favorites-sidebar">
        <Topbar title={FAVORITES_TITLE} handleClose={handleClose} />
        <ul className="Favorites-list">
          {favorites.map((product) => (
            <FavoritesItem
              key={product.id}
              product={product}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
