import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

import FavoriteProductToggle from "../FavoriteProductToggle";

function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`} className="ProductCard-link">
        <div className="ProductCard-top">
          <img
            src={product.image}
            alt={product.name}
            className="ProductCard-img"
          />
        </div>
        <div className="ProductCard-bottom">
          <h2 className="ProductCard-name">{product.name}</h2>
          <p className="ProductCard-summary">{product.summary}</p>
          <div className="ProductCard-info">
            <span className="ProductCard-flavours">3 Flavours</span>
            <span className="ProductCard-price">${product.price}</span>
          </div>
        </div>
      </Link>
      <div className="ProductCard-favorite">
        <FavoriteProductToggle />
      </div>
    </div>
  );
}

export default ProductCard;
