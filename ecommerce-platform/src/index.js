// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import CartProvider from './contexts/CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
