// src/pages/PaymentInfo.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentInfo.css';
import { db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCart } from '../contexts/CartContext';

const PaymentInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, shippingCost, cart } = location.state;
  const [proofURL, setProofURL] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { clearCart } = useCart();

  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `proofs/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Upload error: ', error);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at: ', downloadURL);
          setProofURL(downloadURL);
          setUploading(false);
        }
      );
    }
  };

  const handleSubmit = async () => {
    if (!proofURL) {
      alert('Por favor, faça upload do comprovativo de pagamento.');
      return;
    }

    const orderNumber = generateOrderNumber();
    const orderData = {
      ...formData,
      shippingCost,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost,
      cart,
      proofURL,
      status: 'Pending',
      timestamp: serverTimestamp(),
      orderNumber,
    };

    try {
      await addDoc(collection(db, 'orders'), orderData);
      clearCart(); // Clear the cart after successful submission
      navigate('/thank-you', { state: { orderNumber, formData, cart, shippingCost } });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const renderPaymentInstructions = () => {
    switch (formData.paymentMethod) {
      case 'MBWay':
        return (
          <div>
            <h2>Os nossos Dados</h2>
            <p>Envie por MBWay o montante para o número: <strong>+351 919999999</strong></p>
          </div>
        );
      case 'Transferência Bancária':
        return (
          <div>
            <h2>Os nossos Dados</h2>
            <p>IBAN: <strong>PT50 0000 0000 0000 0000 0000 0</strong></p>
            <p>Banco: <strong>Banco Exemplo</strong></p>
          </div>
        );
      case 'PayPal':
        return (
          <div>
            <h2>Os nossos Dados</h2>
            <p>Envie o montante para o PayPal: <strong>conta@example.com</strong></p>
          </div>
        );
      case 'Revolut':
        return (
          <div>
            <h2>Os nossos Dados</h2>
            <p>Envie por Revolut o montante para o número: <strong>+351 919999999</strong></p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="payment-info">
      <h1>Finalizar pagamento</h1>
      <div className="content">
        <div className="payment-details">
          <p className="instructions">Realize o pagamento e submeta o comprovativo abaixo</p>
          <p className="instructions">A sua encomenda será enviada após a verificação do pagamento realizado</p>
          <hr className="divider" />
          {renderPaymentInstructions()}
          <label className="upload-label">
            <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
            Submeter Comprovativo
          </label>
          <button onClick={handleSubmit} disabled={uploading || !proofURL} className="submit-proof-button">
            {uploading ? 'Uploading...' : 'Enviar Comprovativo'}
          </button>
        </div>
        <div className="order-summary">
          <h2>Encomenda recebida</h2>
          <p>Número da encomenda: {generateOrderNumber()}</p>
          <p>Data: {new Date().toLocaleDateString()}</p>
          <p>Total: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost}€</p>
          <p>Método de pagamento: {formData.paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
