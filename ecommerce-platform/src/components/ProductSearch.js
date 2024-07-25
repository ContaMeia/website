import React from 'react';
import './ProductSearch.css';

const ProductSearch = () => {
  return (
    <section className="product-search">
      <div className="container">
        <h2>Pesquisa por tipo de Joia</h2>
        <div className="product-search-grid">
          <div className="product-search-item ">
            <img src="/images/rings.jpg" alt="Anéis" />
            <div className="product-search-text">Anéis</div>
          </div>
          <div className="product-search-item">
            <img src="/images/bracelets.jpg" alt="Pulseiras" />
            <div className="product-search-text">Pulseiras</div>
          </div>
          <div className="product-search-item ">
            <img src="/images/necklaces.jpg" alt="Colares" />
            <div className="product-search-text">Colares</div>
          </div>
          <div className="product-search-item">
            <img src="/images/earrings.jpg" alt="Brincos" />
            <div className="product-search-text">Brincos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
