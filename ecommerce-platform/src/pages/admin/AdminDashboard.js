// src/pages/admin/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div>
          <h2>7</h2>
          <p>Nº Encomendas Ultimos 30 dias</p>
        </div>
        <div>
          <h2>70,75€</h2>
          <p>Faturação últimos 7 dias</p>
        </div>
        <div>
          <h2>563,74€</h2>
          <p>Faturação últimos 30 dias</p>
        </div>
      </div>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default AdminDashboard;
