// src/pages/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>O teu Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}€</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-summary">
        <h2>Resumo</h2>
        <p>Subtotal: {total}€</p>
        <Link to="/checkout"><button>Finalizar Compra</button></Link>
      </div>
    </div>
  );
}

export default Cart;
