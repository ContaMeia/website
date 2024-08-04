// src/pages/Shop.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import { useCart } from '../contexts/CartContext';

function Shop() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 35]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [collections, setCollections] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = await getDocs(collection(db, 'products'));
      const productsData = productCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
      setFilteredProducts(productsData);
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

  const handleFilterApply = () => {
    const filtered = products.filter(product => {
      return (
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedCategory === '' || product.type === selectedCategory) &&
        (selectedCollection === '' || product.collection === selectedCollection)
      );
    });
    setFilteredProducts(filtered);
  };

  const handleResetFilter = () => {
    setPriceRange([0, 35]);
    setSelectedCategory('');
    setSelectedCollection('');
    setFilteredProducts(products);
  };

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, quantity: 1, productData: product } });
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='fim'>
      <div className="shop">
        <div className="filters">
          <div className="filter-category">
            <h2>Filtros</h2>
            <ul>
              <li onClick={() => setSelectedCategory('colar')}>Colares</li>
              <li onClick={() => setSelectedCategory('brinco')}>Brincos</li>
              <li onClick={() => setSelectedCategory('anel')}>Anéis</li>
              <li onClick={() => setSelectedCategory('pulseira')}>Pulseiras</li>
            </ul>
          </div>
          <div className="filter-price">
            <h2>Preços</h2>
            <input
              type="range"
              min="0"
              max="35"
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
          <button className="apply-filter" onClick={handleFilterApply}>Aplicar Filtro</button>
          <button className="reset-filter" onClick={handleResetFilter}>Resetar Filtro</button>
        </div>
        <div className="products-container">
          <h1>Produtos</h1>
          {filteredProducts.length > 0 && <p>Filtros ativos: {`${selectedCategory ? selectedCategory + ', ' : ''}${selectedCollection ? selectedCollection + ', ' : ''}${priceRange[1] < 35 ? `até ${priceRange[1]}€` : ''}`}</p>}
          <div className="products">
            {filteredProducts.map(product => (
              <div key={product.id} className="product" onClick={() => handleProductClick(product.id)}>
                <img src={product.mainImage} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
                <button onClick={(e) => {
                  e.stopPropagation(); // Impede a navegação ao clicar no botão
                  handleAddToCart(product);
                }}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="newsletter">
        <div className="newsletter-container">
          <h2>Queres ficar atualizado? Nós informamos-te as novidades</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Insira aqui o seu Email" />
            <button type="submit">Subscrever</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Shop;
