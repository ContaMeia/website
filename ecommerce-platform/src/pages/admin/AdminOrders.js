// src/pages/admin/AdminOrders.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminOrders.css';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(db, 'orders');
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersList);
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h1>Encomendas</h1>
      <table>
        <thead>
          <tr>
            <th>Nº Encomenda</th>
            <th>País</th>
            <th>Data</th>
            <th>Forma de Pagamento</th>
            <th>Preço</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.country}</td>
              <td>{order.date}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
