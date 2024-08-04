import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentInfo.css';
import { db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PaymentInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, shippingCost, cart } = location.state;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `proofs/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          console.error(error);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          handleSubmit(downloadURL);
        }
      );
    }
  };

  const handleSubmit = async (proofURL) => {
    const orderData = {
      ...formData,
      shippingCost,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost,
      cart,
      proofURL,
      status: 'Pending',
      timestamp: serverTimestamp()
    };

    await addDoc(collection(db, 'orders'), orderData);
    navigate('/thank-you');
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
      <div className="payment-details">
        {renderPaymentInstructions()}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Enviar Comprovativo</button>
      </div>
      <div className="order-summary">
        <h2>Encomenda recebida</h2>
        <p>Número da encomenda: 243401</p>
        <p>Data: {new Date().toLocaleDateString()}</p>
        <p>Total: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost}€</p>
        <p>Método de pagamento: {formData.paymentMethod}</p>
      </div>
    </div>
  );
};

export default PaymentInfo;
