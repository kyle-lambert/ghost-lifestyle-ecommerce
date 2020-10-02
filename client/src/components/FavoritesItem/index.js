import React from "react";
import { Link } from "react-router-dom";
import "./FavoritesItem.scss";

import { ReactComponent as FavoriteSolid } from "../../assets/icons/favorite_solid.svg";

function FavoritesItem({ product, handleRemove }) {
  const removeFavorite = () => {
    handleRemove(product.id);
  };

  return (
    <li className="FavoritesItem">
      <div className="FavoritesItem-left">
        <Link to="/">
          <img
            src={product.image}
            alt={product.name}
            className="FavoritesItem-img"
          />
        </Link>
      </div>
      <div className="FavoritesItem-middle">
        <span className="FavoritesItem-name">{product.name}</span>
        <span className="FavoritesItem-flavour">{product.flavour}</span>
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
