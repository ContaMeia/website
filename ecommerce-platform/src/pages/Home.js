// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Nova coleção de Outono 2024 Disponivel</h1>
      <div className="collections">
        <div className="collection">
          <img src="/images/collection1.jpg" alt="Collection 1" />
          <h2>Colares</h2>
          <p>Explore a nossa coleção de colares.</p>
        </div>
        <div className="collection">
          <img src="/images/collection2.jpg" alt="Collection 2" />
          <h2>Pulseiras</h2>
          <p>Descubra a nossa variedade de pulseiras.</p>
        </div>
        <div className="collection">
          <img src="/images/collection3.jpg" alt="Collection 3" />
          <h2>Anéis</h2>
          <p>Veja os nossos anéis exclusivos.</p>
        </div>
        <div className="collection">
          <img src="/images/collection4.jpg" alt="Collection 4" />
          <h2>Brincos</h2>
          <p>Encontre brincos únicos e elegantes.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
