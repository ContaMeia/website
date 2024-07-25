// src/pages/admin/AdminLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout() {
  return (
    <div className="admin-layout">
      <nav>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Manage Orders</Link>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/clients">Manage Clients</Link>
        <Link to="/admin/collections">Create Collection</Link>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
