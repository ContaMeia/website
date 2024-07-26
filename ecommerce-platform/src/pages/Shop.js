// src/pages/Shop.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = await getDocs(collection(db, 'products'));
      setProducts(productCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const fetchCollections = async () => {
      const collectionCollection = await getDocs(collection(db, 'collections'));
      setCollections(collectionCollection.docs.map(doc => doc.data()));
    };

    fetchProducts();
    fetchCollections();
  }, []);

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
            {collections.map((col, index) => (
              <li key={index} onClick={() => setSelectedCollection(col.name)}>{col.name}</li>
            ))}
          </ul>
        </div>
        <button className="apply-filter">Aplicar Filtro</button>
      </div>
      <div className="products-container">
        <h1>Produtos</h1>
        <div className="products">
          {filteredProducts.map(product => {
            const imageUrl = product.mainImage;
            console.log('Image URL:', imageUrl); // Log the image URL for debugging
            return (
              <div key={product.id} className="product">
                <img src={imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
              </div>
            );
          })}
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
