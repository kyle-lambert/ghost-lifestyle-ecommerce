import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../contexts/StoreContext";

function createCartItem(product, flavour, qty) {
  const { price = 0, id } = product;
  return {
    cartItemId: uuidv4(),
    productId: id,
    product: product,
    flavour: flavour,
    price: price,
    qty: qty,
    total: qty * price,
  };
}

function useCartContext() {
  const { cart, setCart, cartStored, setCartStored } = React.useContext(StoreContext);

  React.useEffect(() => {
    setCart(cartStored);
  }, [setCart, cartStored]);

  const addToCart = (product, flavour, qty) => {
    const item = createCartItem(product, flavour, qty);

    setCart((state) => {
      return [...state, item];
    });
    setCartStored((state) => {
      return [...state, item];
    });
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.cartItemId === id);

    if (index !== -1) {
      setCart((state) => {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      });
      setCartStored((state) => {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      });
    }
  };

  return { cart, addToCart, removeFromCart };
}

export default useCartContext;
