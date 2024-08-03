// src/pages/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', id });
  };

  const handleDecreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', id });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>O teu Carrinho</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.mainImage} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.price}€</p>
            </div>
            <div className="quantity-control">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item" onClick={() => handleRemoveFromCart(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M6 6v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6m-5 0V4c0-1.1-.9-2-2-2s-2 .9-2 2v2m5 0H9" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Resumo</h2>
        <p>Subtotal: {total}€</p>
        <p>Desconto: 0€</p>
        <p>Total: {total}€</p>
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
