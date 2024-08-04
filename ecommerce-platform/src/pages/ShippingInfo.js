import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './ShippingInfo.css';

const ShippingInfo = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'Portugal',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    shippingMethod: '',
    paymentMethod: '',
  });
  const [shippingCost, setShippingCost] = useState(4.00);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingMethodChange = (e) => {
    const cost = e.target.value === 'Express' ? 4.00 : 2.90;
    setShippingCost(cost);
    setFormData({ ...formData, shippingMethod: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { formData, shippingCost, cart } });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="shipping-info">
      <h1>Dados para o envio</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email*</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Nome*</label>
          <input type="text" name="firstName" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Apelido*</label>
          <input type="text" name="lastName" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>País*</label>
          <select name="country" onChange={handleChange}>
            <option value="Portugal">Portugal</option>
          </select>
        </div>
        <div className="form-group">
          <label>Morada*</label>
          <input type="text" name="address" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Localidade*</label>
          <input type="text" name="city" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Código Postal*</label>
          <input type="text" name="postalCode" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telefone*</label>
          <input type="text" name="phone" required onChange={handleChange} />
        </div>
        <div className="shipping-method">
          <h2>Envio</h2>
          <label>
            <input type="radio" name="shippingMethod" value="Express" required onChange={handleShippingMethodChange} />
            Envio CTT Expresso: 4.00€
          </label>
          <label>
            <input type="radio" name="shippingMethod" value="Standard" required onChange={handleShippingMethodChange} />
            Envio CTT: 2.90€
          </label>
        </div>
        <div className="cart-summary">
          <h2>A sua encomenda</h2>
          <p>Subtotal: {subtotal}€</p>
          <p>Envio: {shippingCost}€</p>
          <p>Total: {total}€</p>
        </div>
        <div className="payment-method">
          <h2>Selecionar o Método de Pagamento</h2>
          <label>
            <input type="radio" name="paymentMethod" value="MBWay" required onChange={handleChange} />
            MBWay
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="Transferência Bancária" required onChange={handleChange} />
            Transferência Bancária
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="PayPal" required onChange={handleChange} />
            PayPal
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="Revolut" required onChange={handleChange} />
            Revolut
          </label>
        </div>
        <div className="terms">
          <input type="checkbox" required />
          <label>Eu li e aceito os termos e condições da loja*</label>
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
