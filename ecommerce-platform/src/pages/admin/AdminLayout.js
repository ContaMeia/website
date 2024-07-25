// src/pages/admin/AdminLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <nav>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/orders">Manage Orders</Link>
      </nav>
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
