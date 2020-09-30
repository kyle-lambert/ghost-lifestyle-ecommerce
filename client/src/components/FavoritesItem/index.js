import React from "react";
import { Link } from "react-router-dom";
import "./FavoritesItem.scss";

import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";

function FavoritesItem({ item, handleRemove }) {
  const removeFavorite = () => {
    handleRemove(item.id);
  };

  return (
    <li className="FavoritesItem">
      <div className="FavoritesItem-left">
        <Link to="/">
          <img src={item.image} alt={item.name} className="FavoritesItem-img" />
        </Link>
      </div>
      <div className="FavoritesItem-middle">
        <span className="FavoritesItem-name">{item.name}</span>
        <span className="FavoritesItem-flavour">{item.flavour}</span>
      </div>
      <div className="FavoritesItem-right">
        <button
          type="button"
          onClick={removeFavorite}
          className="FavoritesItem-remove">
          <FavoriteSolid />
        </button>
      </div>
    </li>
  );
}

export default FavoritesItem;
