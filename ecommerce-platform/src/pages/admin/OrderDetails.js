import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import './OrderDetails.css';

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state;
  const [status, setStatus] = useState(order.status);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productDetails = await Promise.all(
        order.cart.map(async (item) => {
          const productRef = doc(db, 'products', item.id);
          const productSnap = await getDoc(productRef);
          return { ...item, sku: productSnap.data()?.sku };
        })
      );
      setProducts(productDetails);
    };

    fetchProducts();
  }, [order.cart]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSaveStatus = async () => {
    const orderRef = doc(db, 'orders', order.id);
    try {
      await updateDoc(orderRef, { status });
      alert('Status updated successfully!');
      navigate('/admin/orders');
    } catch (error) {
      console.error('Error updating status: ', error);
    }
  };

  return (
    <div className="order-details">
      <h1>Encomenda Nº {order.orderNumber}</h1>
      <div className="order-info">
        <div className="left-column">
          <p><strong>Endereço de Email:</strong> {order.email}</p>
          <p><strong>Nome:</strong> {order.firstName} {order.lastName}</p>
          <p><strong>Data:</strong> {order.timestamp ? new Date(order.timestamp.seconds * 1000).toLocaleString() : 'N/A'}</p>
          <p><strong>País:</strong> {order.country}</p>
          <p><strong>Morada:</strong> {order.address}</p>
          <p><strong>Localidade:</strong> {order.city}</p>
          <p><strong>Código Postal:</strong> {order.postalCode}</p>
          <p><strong>Telefone:</strong> {order.phone}</p>
          <p><strong>Forma de Pagamento:</strong> {order.paymentMethod}</p>
          <p><strong>Preço Total:</strong> {order.total}€</p>
          <p><strong>Tipo de Envio:</strong> {order.shippingMethod}</p>
          <p><strong>Preço do Envio:</strong> {order.shippingCost}€</p>
          <div className="status-update">
            <label htmlFor="status">Estado da Encomenda:</label>
            <select id="status" value={status} onChange={handleStatusChange}>
              <option value="Confirmar Pagamento">Confirmar Pagamento</option>
              <option value="Enviar">Enviar</option>
              <option value="Enviado">Enviado</option>
              <option value="Concluido">Concluido</option>
              <option value="Encerrada">Encerrada</option>
            </select>
            <button onClick={handleSaveStatus}>Guardar Estado</button>
          </div>
        </div>
        <div className="right-column">
          <h2>Encomenda</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.sku}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="proof-container">
            <label><strong>Comprovativo de Pagamento:</strong></label>
            {order.proofURL ? (
              <a href={order.proofURL} target="_blank" rel="noopener noreferrer">Ver Comprovativo</a>
            ) : (
              <p>Nenhum comprovativo enviado</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
