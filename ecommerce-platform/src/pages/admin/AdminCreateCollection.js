// src/pages/admin/AdminCreateCollection.js
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './AdminForm.css';

function AdminCreateCollection() {
  const [collectionData, setCollectionData] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'collections'), collectionData);
      // Optionally, you can navigate to the collections list
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="admin-create-collection">
      <h1>Criar Coleção</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome da Coleção" value={collectionData.name} onChange={handleChange} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default AdminCreateCollection;
