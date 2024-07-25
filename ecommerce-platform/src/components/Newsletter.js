import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2>Queres ficar atualizado? Nós informamos-te as novidades</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Insira aqui o seu Email" />
          <button type="submit">Subscrever</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
