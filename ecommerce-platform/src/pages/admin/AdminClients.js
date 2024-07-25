// src/pages/admin/AdminClients.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminClients.css';

function AdminClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const clientsCollection = collection(db, 'clients');
      const clientsSnapshot = await getDocs(clientsCollection);
      const clientsList = clientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setClients(clientsList);
    };

    fetchClients();
  }, []);

  return (
    <div className="admin-clients">
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Email</th>
            <th>País</th>
            <th>Nº Compras efetuadas</th>
            <th>Valor Gasto</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.country}</td>
              <td>{client.orders}</td>
              <td>{client.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminClients;
