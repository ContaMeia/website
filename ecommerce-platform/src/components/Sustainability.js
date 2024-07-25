import React from 'react';
import './Sustainability.css';

const Sustainability = () => {
  return (
    <>
      <div className="free-shipping-banner">
        
            <p>Portes grátis a partir de 29,99€</p>
       
      </div>
      <section className="sustainability">
        <div className="container sustainability-content">
          <div className="sustainability-image">
            <img src="/images/sustainability.jpg" alt="Sustainability" />
          </div>
          <div className="sustainability-text">
            <h2>Sustentabilidade</h2>
            <p>
              Na Corta&Meia, trabalhamos arduamente para ajudar a tornar o planeta um lugar melhor e é com esta mentalidade que
              nos orgulhamos de anunciar todas as nossas peças são feitas com materiais de origem sustentável.
            </p>
            <button type="button">Saber Mais</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
