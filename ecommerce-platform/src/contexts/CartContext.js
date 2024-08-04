// src/contexts/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(item => item.id === action.product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.product.quantity;
        return updatedCart;
      } else {
        return [...state, action.product];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
