// src/pages/admin/AdminNewProduct.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AdminForm.css';

function AdminNewProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), product);
      navigate('/admin/products');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="admin-new-product">
        console.log('AdminNewProduct component rendered');
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminNewProduct;
