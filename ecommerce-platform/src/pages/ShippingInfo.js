import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShippingInfo.css';

const ShippingInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
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
  const [shippingCost, setShippingCost] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShippingMethodChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      shippingMethod: value,
    }));
    if (cart.reduce((sum, item) => sum + item.price * item.quantity, 0) > 29.99) {
      setShippingCost(0);
    } else {
      setShippingCost(value === 'CTT Expresso' ? 4 : 2.9);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.shippingMethod) {
      alert('Por favor, selecione um método de envio.');
      return;
    }
    if (!formData.paymentMethod) {
      alert('Por favor, selecione um método de pagamento.');
      return;
    }
    console.log('Form submitted');
    console.log('Form data:', formData);
    console.log('Shipping cost:', shippingCost);
    console.log('Cart data:', cart);
    navigate('/payment', { state: { formData, shippingCost, cart } });
  };

  return (
    <div className="shipping-info">
      <h1>Dados para o envio</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="left-section">
          <label>
            Endereço de email *
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            Nome *
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </label>
          <label>
            Apelido *
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </label>
          <label>
            País *
            <select name="country" value={formData.country} onChange={handleInputChange} required>
              <option value="Portugal">Portugal</option>
              {/* Add more country options here */}
            </select>
          </label>
          <label>
            Morada
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          </label>
          <label>
            Localidade
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
          </label>
          <label>
            Código postal
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
          </label>
          <label>
            Telefone
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </label>
        </form>
        <div className="right-section">
          <div className="order-summary">
            <h2>A sua encomenda</h2>
            <p className="summary-row">
              Subtotal: <span className="right-align">{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}€</span>
            </p>
            <div className="shipping-option">
              <label>
                <input
                  type="radio"
                  id="express"
                  name="shipping"
                  value="CTT Expresso"
                  checked={formData.shippingMethod === 'CTT Expresso'}
                  onChange={handleShippingMethodChange}
                />
                Envio CTT Expresso: <span className="right-align">4.00€</span>
                <p className="subtitle">Entrega em 1-2 dias úteis.</p>
              </label>
            </div>
            <div className="shipping-option">
              <label>
                <input
                  type="radio"
                  id="standard"
                  name="shipping"
                  value="CTT"
                  checked={formData.shippingMethod === 'CTT'}
                  onChange={handleShippingMethodChange}
                />
                Envio CTT: <span className="right-align">2.90€</span>
                <p className="subtitle">Entrega em 3-5 dias úteis.</p>
              </label>
            </div>
            <p className="summary-row">
              Envio: <span className="right-align">{shippingCost.toFixed(2)}€</span>
            </p>
            <p className="summary-row">
              Total: <span className="right-align">{(cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost).toFixed(2)}€</span>
            </p>
          </div>
          <div className="payment-method">
            <h2>Selecionar o Método de Pagamento</h2>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="MBWay"
                checked={formData.paymentMethod === 'MBWay'}
                onChange={handleInputChange}
                required
              />
              MBWay
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Transferência Bancária"
                checked={formData.paymentMethod === 'Transferência Bancária'}
                onChange={handleInputChange}
                required
              />
              Transferência Bancária
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                checked={formData.paymentMethod === 'PayPal'}
                onChange={handleInputChange}
                required
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Revolut"
                checked={formData.paymentMethod === 'Revolut'}
                onChange={handleInputChange}
                required
              />
              Revolut
            </label>
            <label>
              <input type="checkbox" required />
              Eu li e aceito os termos e condições da loja*
            </label>
            <button onClick={handleSubmit} type="submit">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
