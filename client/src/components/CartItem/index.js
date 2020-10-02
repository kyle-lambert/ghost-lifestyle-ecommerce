import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";

function CartItem({ product, handleRemove }) {
  const removeCartItem = () => {
    handleRemove(product.id);
  };

  return (
    <li className="CartItem">
      <div className="CartItem-left">
        <Link to="/">
          <img
            src={product.image}
            alt={product.name}
            className="CartItem-img"
          />
        </Link>
      </div>
      <div className="CartItem-middle">
        <span className="CartItem-name">{product.name}</span>
        <span className="CartItem-flavour">{product.flavour}</span>
        <button
          type="button"
          onClick={removeCartItem}
          className="CartItem-remove">
          Remove
        </button>
      </div>
      <div className="CartItem-right">
        <span className="CartItem-price">${product.price}</span>
        <span className="CartItem-qty">{product.qty}</span>
      </div>
    </li>
  );
}

export default CartItem;
