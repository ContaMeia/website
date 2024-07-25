// src/pages/admin/AdminProducts.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './AdminProducts.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className="admin-products">
      <h1>Produtos</h1>
      <Link to="/admin/products/new">Criar Produto</Link>
      <table>
        <thead>
          <tr>
            <th>Nome da Peça</th>
            <th>Tipo de Peça</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/admin/products/edit/${product.id}`}>Editar</Link>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
