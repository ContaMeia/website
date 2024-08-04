import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you">
      <h1>Obrigado</h1>
      <div className="thank-you-message">
        <p>Assim que seja confirmado a receção do pagamento iremos proceder ao envio da encomenda.</p>
        <p>Preste atenção ao seu email para mais informações.</p>
        <hr className="divider" />
        <p> Caso surja alguma questão, não hesite em nos contactar através das redes sociais ou através do email <strong>contaemeia@gmail.com</strong></p>
      </div>
    </div>
  );
};

export default ThankYou;
