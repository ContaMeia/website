// src/pages/Shop.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await getDocs(collection(db, 'products'));
      setProducts(productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <aside>
        <h2>Filtros</h2>
        {/* Implement filters here */}
      </aside>
      <main>
        <h1>Produtos</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}€</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;
