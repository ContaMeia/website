// src/contexts/CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(item => item.id === action.product.id);
      if (existingProduct) {
        const updatedState = state.map(item =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedState = [...state, { ...action.product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      }
    case 'REMOVE_FROM_CART':
      const updatedStateRemove = state.filter(item => item.id !== action.id);
      localStorage.setItem('cart', JSON.stringify(updatedStateRemove));
      return updatedStateRemove;
    case 'INCREASE_QUANTITY':
      const updatedStateIncrease = state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedStateIncrease));
      return updatedStateIncrease;
    case 'DECREASE_QUANTITY':
      const updatedStateDecrease = state.map(item =>
        item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedStateDecrease));
      return updatedStateDecrease;
    case 'CLEAR_CART':
      localStorage.removeItem('cart');
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
