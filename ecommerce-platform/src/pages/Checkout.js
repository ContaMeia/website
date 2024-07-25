// src/pages/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Checkout() {
  const { cartItems, total } = useContext(CartContext);
  const [details, setDetails] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Portugal',
    paymentMethod: 'MBWay'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      ...details,
      cartItems,
      total,
      status: 'pending'
    };
    try {
      await addDoc(collection(db, 'orders'), order);
      navigate('/thank-you');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="checkout">
      <h1>Dados para o envio</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Endereço de email" onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="Nome" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Apelido" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Morada" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Localidade" onChange={handleChange} required />
        <input type="text" name="postalCode" placeholder="Código postal" onChange={handleChange} required />
        <select name="country" onChange={handleChange} required>
          <option value="Portugal">Portugal</option>
        </select>
        <h2>Selecionar o Método de Pagamento</h2>
        <select name="paymentMethod" onChange={handleChange} required>
          <option value="MBWay">MBWay</option>
          <option value="Transferência Bancária">Transferência Bancária</option>
          <option value="PayPal">PayPal</option>
          <option value="Revolut">Revolut</option>
        </select>
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;
