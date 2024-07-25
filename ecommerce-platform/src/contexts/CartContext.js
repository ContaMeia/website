// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price);
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(newCartItems);
    setTotal(total - itemToRemove.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
