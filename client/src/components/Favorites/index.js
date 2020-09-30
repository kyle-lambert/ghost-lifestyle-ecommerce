import React from "react";
import "./Favorites.scss";

import Topbar from "../Topbar";
import FavoritesItem from "../FavoritesItem";
import ProteinImage from "../../assets/chips-ahoy.png";

const FAVORITES_TITLE = "Your Favorites";

function Favorites({ handleClose }) {
  const handleRemove = (id) => {
    console.log(`Removed favorite with ID: ${id}`);
  };

  return (
    <div className="Favorites">
      <span className="Favorites-backdrop"></span>
      <div className="Favorites-sidebar">
        <Topbar title={FAVORITES_TITLE} handleClose={handleClose} />
        <ul className="Favorites-list">
          {favoritesItems.map((item) => (
            <FavoritesItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;

const favoritesItems = [
  {
    id: 1,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
  {
    id: 2,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
  {
    id: 3,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 59.99,
    qty: 3,
  },
];
