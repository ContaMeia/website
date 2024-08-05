import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AdminOrders.css';

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(db, 'orders');
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersList = ordersSnapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      ordersList.sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate()); // Sort by date
      setOrders(ordersList);
      setFilteredOrders(ordersList);
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = orders;
    if (search) {
      filtered = filtered.filter(order => 
        order.orderNumber?.toString().includes(search)
      );
    }
    if (statusFilter) {
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    setFilteredOrders(filtered);
  }, [search, statusFilter, orders]);

  const handleDetailsClick = (order) => {
    navigate(`/admin/ordersdetail/${order.id}`, { state: { order } });
  };

  return (
    <div className="admin-orders">
      <div className="header">
        <h1>Encomendas</h1>
        <div className="filters">
          <input 
            type="text" 
            placeholder="Procurar por Nº Encomenda..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Filtrar por Status</option>
            <option value="Confirmar Pagamento">Confirmar Pagamento</option>
            <option value="Enviar">Enviar</option>
            <option value="Enviado">Enviado</option>
            <option value="Concluido">Concluido</option>
            <option value="Encerrada">Encerrada</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nº Encomenda</th>
            <th>País</th>
            <th>Data</th>
            <th>Forma de Pagamento</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.country}</td>
              <td>{order.timestamp ? new Date(order.timestamp.seconds * 1000).toLocaleString() : 'N/A'}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.total}€</td>
              <td>
                <span className={`status ${order.status ? order.status.toLowerCase().replace(/\s+/g, '-') : ''}`}>{order.status}</span>
              </td>
              <td>
                <button className="details-button" onClick={() => handleDetailsClick(order)}>Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
