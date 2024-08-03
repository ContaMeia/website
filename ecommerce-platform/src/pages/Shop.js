import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 35]);
  const [selectedCategory, setSelectedCategory] = useState(location.state?.filter || '');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [collections, setCollections] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = await getDocs(collection(db, 'products'));
      setProducts(productCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setFilteredProducts(productCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
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

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const hasActiveFilters = selectedCategory || selectedCollection || priceRange[1] < 35;

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
          {hasActiveFilters && (
            <div className="active-filters">
              <p>Filtros Ativos:</p>
              {selectedCategory && <span>{selectedCategory}</span>}
              {selectedCollection && <span>{selectedCollection}</span>}
              {priceRange[1] < 35 && <span>{`Até ${priceRange[1]}€`}</span>}
            </div>
          )}
          <div className="products">
            {filteredProducts.map(product => (
              <div key={product.id} className="product" onClick={() => handleProductClick(product.id)}>
                <img src={product.mainImage} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Shop;
