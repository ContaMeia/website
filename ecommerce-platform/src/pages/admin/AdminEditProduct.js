// src/pages/admin/AdminEditProduct.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function AdminEditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = await getDoc(doc(db, 'products', id));
      setProduct(productDoc.data());
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await updateDoc(doc(db, 'products', id), product);
    navigate('/admin/products');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="admin-edit-product">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default AdminEditProduct;
