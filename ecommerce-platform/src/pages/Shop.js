// src/pages/Shop.js
import React, { useState } from 'react';
import './Shop.css';

function Shop() {
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');

  const products = [
    { id: 1, name: 'Colar Aqua Fixe', price: 12, category: 'Colares', collection: 'Coleção 1', image: '/images/product1.jpg' },
    { id: 2, name: 'Black Striped T-shirt', price: 15, category: 'Brincos', collection: 'Coleção 1', image: '/images/product2.jpg' },
    // Add more products as needed
  ];

  const handlePriceChange = (event) => {
    setPriceRange([0, event.target.value]);
  };

  const filteredProducts = products.filter(product => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedCategory === '' || product.category === selectedCategory) &&
      (selectedCollection === '' || product.collection === selectedCollection)
    );
  });

  return (
    <div className="shop">
      <div className="filters">
        <div className="filter-category">
          <h2>Filtros</h2>
          <ul>
            <li onClick={() => setSelectedCategory('Colares')}>Colares</li>
            <li onClick={() => setSelectedCategory('Brincos')}>Brincos</li>
            <li onClick={() => setSelectedCategory('Anéis')}>Anéis</li>
            <li onClick={() => setSelectedCategory('Pulseiras')}>Pulseiras</li>
          </ul>
        </div>
        <div className="filter-price">
          <h2>Preços</h2>
          <input
            type="range"
            min="0"
            max="20"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <span>{priceRange[1]}€</span>
        </div>
        <div className="filter-collection">
          <h2>Coleção</h2>
          <ul>
            <li onClick={() => setSelectedCollection('Coleção 1')}>Coleção 1</li>
            <li onClick={() => setSelectedCollection('Coleção 2')}>Coleção 2</li>
            <li onClick={() => setSelectedCollection('Coleção 3')}>Coleção 3</li>
            <li onClick={() => setSelectedCollection('Coleção 4')}>Coleção 4</li>
          </ul>
        </div>
        <button className="apply-filter">Aplicar Filtro</button>
      </div>
      <div className="products-container">
        <h1>Produtos</h1>
        <div className="products">
          {filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}€</p>
              <button>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button>Anterior</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Próximo</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
