import React from 'react';
import { StoreContext } from '../contexts/StoreContext';

function useCartContext() {
  const { cart, setCart, cartStored, setCartStored } = React.useContext(StoreContext)

  React.useEffect(() => {
    setCart(cartStored)
  }, [setCart, cartStored])

  const addToCart = (product, options) => {
    console.log({product}, {options})
    // setCart(state => {
    //   return [...state, product]
    // })
    // setCartStored(state => {
    //   return [...state, product]
    // })
  }

  const removeFromCart = (id) => {
    const index= cart.findIndex(p => p.id === id);

    if (index !== -1) {
      // setCart(state => {
      //   return [...state.slice(0, index), ...state.slice(index + 1)]
      // })
      // setCartStored(state => {
      //   return [...state.slice(0, index), ...state.slice(index + 1)]
      // })
    }
  }

  const updateCartItem = () => {

  }

  return { cart, addToCart, removeFromCart, updateCartItem }
}

export default useCartContext;