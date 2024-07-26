// src/pages/admin/AdminCollections.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminCollections.css';

function AdminCollections() {
  return (
    <div className="admin-collections">
      <h1>Collections</h1>
      <Link to="/admin/create-collection">
        <button className="create-collection-button">Create New Collection</button>
      </Link>
      {/* Existing collection management code */}
    </div>
  );
}

export default AdminCollections;
