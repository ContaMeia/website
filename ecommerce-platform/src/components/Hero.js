import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Nova coleção de Outono 2024 Disponivel</h1>
        <p>Procure entre a grande variedade de anéis, pulseiras e colares da nossa coleção de outono.</p>
        <button type="button">Ver Coleção</button>
        <div className="hero-stats">
          <div>
            <span>100+</span>
            <p>Peças disponíveis</p>
          </div>
          <div>
            <span>10/10</span>
            <p>Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
