import React from "react";
import "./Cart.scss";

import Topbar from "../Topbar";
import PromoBanner from "../PromoBanner";
import CartItem from "../CartItem";

import ProteinImage from "../../assets/chips-ahoy.png";
import AminoImage from "../../assets/kiwi-strawberry.png";

const CART_TITLE = "Your Cart";

function Cart({ handleClose }) {
  const handleRemove = (id) => {
    console.log(`Removed cart item with ID: ${id}`);
  };

  return (
    <div className="Cart">
      <span className="Cart-backdrop"></span>
      <div className="Cart-sidebar">
        <Topbar title={CART_TITLE} handleClose={handleClose} />
        <PromoBanner cartPromo />
        <ul className="Cart-list">
          {cartItems.map((product) => (
            <CartItem
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

export default Cart;

const cartItems = [
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
    name: "BCAA",
    image: AminoImage,
    flavour: "Kiwi Strawberry",
    price: 29.99,
    qty: 1,
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
