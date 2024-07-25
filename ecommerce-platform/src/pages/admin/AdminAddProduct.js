// src/pages/admin/AdminAddProduct.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './AdminForm.css';

function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    stock: '',
    image: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), product);
      // Optionally, you can navigate to the products list
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="admin-add-product">
      <h1>Criar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome da Peça" value={product.name} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Tipo de Peça" value={product.type} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Quantidade em Stock" value={product.stock} onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL da Imagem" value={product.image} onChange={handleChange} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
