// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Nova coleção de Outono 2024 Disponivel</h1>
      <div className="collections">
        <div className="collection">
          <img src="/images/necklaces.jpg" alt="Collection 1" />
          <h2>Colares</h2>
          <p>Explore a nossa coleção de colares.</p>
        </div>
        <div className="collection">
          <img src="/images/bracelets.jpg" alt="Collection 2" />
          <h2>Pulseiras</h2>
          <p>Descubra a nossa variedade de pulseiras.</p>
        </div>
        <div className="collection">
          <img src="/images/rings.jpg" alt="Collection 3" />
          <h2>Anéis</h2>
          <p>Veja os nossos anéis exclusivos.</p>
        </div>
        <div className="collection">
          <img src="/images/earrings.jpg" alt="Collection 4" />
          <h2>Brincos</h2>
          <p>Encontre brincos únicos e elegantes.</p>
        </div>
      </div>
      <div className="sustainability">
        <h2>Sustentabilidade</h2>
        <p>Na Conta&Meia, trabalhamos ativamente para ajudar a tornar o planeta um lugar melhor e é com esta mentalidade que nos orgulhamos de anunciar todas as nossas peças são produzidas sem qualquer produção de CO2 para a atmosfera, atingindo assim a neutralidade carbónica.</p>
        <button>Saber Mais</button>
      </div>
      <div className="clients">
        <h2>Os Nossos Clientes Satisfeitos</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            <span>★★★★★</span>
          </div>
          <div className="testimonial">
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            <span>★★★★★</span>
          </div>
          <div className="testimonial">
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            <span>★★★★★</span>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h2>Queres ficar atualizado? Nós informamos-te as novidades</h2>
        <input type="email" placeholder="Insira aqui o seu Email" />
        <button>Subscrever</button>
      </div>
    </div>
  );
}

export default Home;
