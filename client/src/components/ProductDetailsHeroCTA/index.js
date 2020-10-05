import React from "react";
import "./ProductDetailsHeroCTA.scss";

import AddToCart from "../../components/AddToCart";
import FavoriteProductToggle from "../../components/FavoriteProductToggle";

function ProductDetailsHeroCTA({ price }) {
  return (
    <ul className="ProductDetailsHeroCTA">
      <li className="ProductDetailsHeroCTA-item">
        <AddToCart />
      </li>
      <li className="ProductDetailsHeroCTA-item">
        <FavoriteProductToggle />
      </li>
      <li className="ProductDetailsHeroCTA-item">
        <span className="ProductDetailsHeroCTA-price">${price}</span>
      </li>
    </ul>
  );
}

export default ProductDetailsHeroCTA;
