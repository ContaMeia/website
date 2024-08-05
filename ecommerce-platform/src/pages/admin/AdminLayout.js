// src/pages/admin/AdminLayout.js
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Ensure the correct import path for firebase configuration
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/admin/login');
    });
  };

  return (
    <div className="admin-layout">
      <nav>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Encomendas</Link>
        <Link to="/admin/products">Produtos</Link>
        <Link to="/admin/collections">Criar coleções</Link>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
