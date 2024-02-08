import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //etat cart
  const [cart, setCart] = useState([])

  //ajouter au panier
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //verifier si un produit est déja dans le panier
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // verification toujours
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    console.log(cart);
  }

  return <CartContext.Provider value={{ addToCart }}>{ children }</CartContext.Provider>;
};

export default CartProvider;
