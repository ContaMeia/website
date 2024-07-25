// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
      <section className="hero">
        <h1>Nova coleção de Outono 2024 Disponível</h1>
        <p>Explore our new collection...</p>
        <Link to="/shop"><button>Ver Coleção</button></Link>
      </section>
      <section className="sustainability">
        <h2>Sustentabilidade</h2>
        <p>At Conta&Meia, we strive to create...</p>
        <Link to="/sustainability"><button>Saber Mais</button></Link>
      </section>
      <section className="search-by-type">
        <h2>Pesquisa por tipo de Joia</h2>
        <div className="categories">
          <Link to="/shop?category=anéis"><div>Anéis</div></Link>
          <Link to="/shop?category=pulseiras"><div>Pulseiras</div></Link>
          <Link to="/shop?category=colares"><div>Colares</div></Link>
          <Link to="/shop?category=brincos"><div>Brincos</div></Link>
        </div>
      </section>
      <section className="testimonials">
        <h2>Os Nossos Clientes Satisfeitos</h2>
        <p>Testimonials...</p>
      </section>
    </div>
  );
}

export default Home;
