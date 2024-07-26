// src/pages/admin/AdminNewProduct.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AdminForm.css';

function AdminNewProduct() {
  const [product, setProduct] = useState({
    name: '',
    code: '',
    description: '',
    price: '',
    discount: '',
    stock: '',
    type: '',
    collection: '',
    mainImage: '',
    secondaryImage: ''
  });
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionCollection = await getDocs(collection(db, 'collections'));
      setCollections(collectionCollection.docs.map(doc => doc.data()));
    };

    fetchCollections();
  }, []);

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
      <h1>Criar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Nome da Peça" value={product.name} onChange={handleChange} required />
          <input type="text" name="code" placeholder="Código da Peça" value={product.code} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <select name="type" value={product.type} onChange={handleChange} required>
            <option value="">Tipo de Peça</option>
            <option value="colar">Colar</option>
            <option value="pulseira">Pulseira</option>
            <option value="anel">Anel</option>
            <option value="brinco">Brinco</option>
          </select>
          <select name="collection" value={product.collection} onChange={handleChange} required>
            <option value="">Coleção</option>
            {collections.map((col, index) => (
              <option key={index} value={col.name}>{col.name}</option>
            ))}
          </select>
        </div>
        <textarea name="description" placeholder="Descrição" value={product.description} onChange={handleChange} required />
        <div className="form-group">
          <input type="number" name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
          <input type="number" name="discount" placeholder="Desconto em % (se não tiver inserir 0)" value={product.discount} onChange={handleChange} required />
        </div>
        <input type="number" name="stock" placeholder="Quantidade em Stock" value={product.stock} onChange={handleChange} required />
        <div className="form-group">
          <input type="text" name="mainImage" placeholder="URL da Foto Principal" value={product.mainImage} onChange={handleChange} required />
          <input type="text" name="secondaryImage" placeholder="URL da Foto Secundária" value={product.secondaryImage} onChange={handleChange} required />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default AdminNewProduct;
