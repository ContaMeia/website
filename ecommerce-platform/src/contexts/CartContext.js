// src/contexts/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, getDoc, onSnapshot, Timestamp, writeBatch, deleteDoc } from 'firebase/firestore';
import { getSessionId } from '../utils/session';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return action.cart;
    case 'ADD_TO_CART':
      const existingProduct = state.find(item => item.id === action.product.id);
      if (existingProduct) {
        return state.map(item =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + action.product.quantity } : item
        );
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
  const [cart, dispatch] = useReducer(cartReducer, []);
  const sessionId = getSessionId();

  useEffect(() => {
    const saveCart = async () => {
      try {
        const batch = writeBatch(db);
        const cartRef = doc(db, 'cart', sessionId);
        batch.set(cartRef, { cart, timestamp: Timestamp.now() });
        await batch.commit();
      } catch (error) {
        if (error.code === 'resource-exhausted') {
          console.error('Quota exceeded. Please try again later.');
        } else {
          console.error('Error saving cart:', error);
        }
      }
    };
    saveCart();
  }, [cart]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'cart', sessionId), (doc) => {
      if (doc.exists()) {
        dispatch({ type: 'LOAD_CART', cart: doc.data().cart });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const deleteOldCart = async () => {
      const cartDoc = await getDoc(doc(db, 'cart', sessionId));
      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        if (cartData.timestamp.toDate().getTime() + 3 * 60 * 60 * 1000 < Date.now()) {
          await deleteDoc(doc(db, 'cart', sessionId));
          dispatch({ type: 'CLEAR_CART' });
        }
      }
    };
    deleteOldCart();
  }, [sessionId]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
