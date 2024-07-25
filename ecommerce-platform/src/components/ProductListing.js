import React from 'react';

import './ProductListing.css';

const products = [
  { id: 1, name: 'Colar aqua fixe', price: '12€', image: '/images/product1.jpg' },
  { id: 2, name: 'Black Striped T-shirt', price: '12€', originalPrice: '15€', discount: '-30%', image: '/images/product2.jpg' },
  { id: 3, name: 'Black Striped T-shirt', price: '12€', originalPrice: '15€', discount: '-30%', image: '/images/product2.jpg' },
  { id: 4, name: 'Colar aqua fixe', price: '12€', image: '/images/product1.jpg' },
  { id: 5, name: 'Black Striped T-shirt', price: '12€', originalPrice: '15€', discount: '-30%', image: '/images/product2.jpg' },
  { id: 6, name: 'Black Striped T-shirt', price: '12€', originalPrice: '15€', discount: '-30%', image: '/images/product2.jpg' },
];

const ProductListing = () => {
  return (
    <div className="product-listing-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / Loja
        </nav>
        <h1>Produtos</h1>
        <div className="filters">
          <div className="filter-category">
            <h3>Filtros</h3>
            <ul>
              <li>Colares</li>
              <li>Brincos</li>
              <li>Anéis</li>
              <li>Pulseiras</li>
            </ul>
          </div>
          <div className="filter-price">
            <h3>Preços</h3>
            <input type="range" min="8" max="20" />
          </div>
          <div className="filter-collection">
            <h3>Coleção</h3>
            <ul>
              <li>Coleção A</li>
              <li>Coleção B</li>
              <li>Coleção C</li>
              <li>Coleção D</li>
            </ul>
            <button type="button">Aplicar Filtro</button>
          </div>
        </div>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <div className="product-prices">
                <span>{product.price}</span>
                {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                {product.discount && <span className="discount">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button className="previous">Anterior</button>
          <span className="page-numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            ...
            <button>10</button>
          </span>
          <button className="next">Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
