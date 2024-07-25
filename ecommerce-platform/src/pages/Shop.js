// src/pages/Shop.js
import React from 'react';
import './Shop.css';

function Shop() {
  const products = [
    { id: 1, name: 'Colar Aqua Fixe', price: '12€', image: '/images/product1.jpg' },
    { id: 2, name: 'Black Striped T-shirt', price: '15€', image: '/images/product2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="shop">
      <h1>Produtos</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
