import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";

function CartItem({ item, handleRemove }) {
  const removeCartItem = () => {
    handleRemove(item.id);
  };

  return (
    <li className="CartItem">
      <div className="CartItem-left">
        <Link to="/">
          <img src={item.image} alt={item.name} className="CartItem-img" />
        </Link>
      </div>
      <div className="CartItem-middle">
        <span className="CartItem-name">{item.name}</span>
        <span className="CartItem-flavour">{item.flavour}</span>
        <button
          type="button"
          onClick={removeCartItem}
          className="CartItem-remove">
          Remove
        </button>
      </div>
      <div className="CartItem-right">
        <span className="CartItem-price">${item.price}</span>
        <span className="CartItem-qty">{item.qty}</span>
      </div>
    </li>
  );
}

export default CartItem;
