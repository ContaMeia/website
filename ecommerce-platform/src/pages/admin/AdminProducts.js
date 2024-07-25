// src/pages/admin/AdminProducts.js
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await getDocs(collection(db, 'products'));
      setProducts(productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="admin-products">
      <h1>Manage Products</h1>
      <Link to="/admin/products/new">Add New Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - {product.price}€</span>
            <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
