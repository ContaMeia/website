import React from 'react';
import './Sustainability.css';

const Sustainability = () => {
  return (
    <div className="sustainability">
      <header className="sustainability-header">
        <h1>Responsabilidade Social <span role="img" aria-label="leaf">🍃</span></h1>
        <p>
          Na Conta&Meia preocupamo-nos com o ambiente, e por isso temos o orgulho de anunciar que as nossas peças são 100% sustentáveis, isto é, desde a sua produção até à porta da sua casa são produzidos zero gramas de carbono para a atmosfera.
          <br />
          Mas como ambicionamos sempre mais, estamos também a trabalhar para influenciar positivamente o ambiente, ao tentarmos tornar a nossa pegada carbónica negativa, ou seja, tornando o planeta um lugar mais verde.
        </p>
      </header>
      <section className="how-we-do">
        <h2>Como o fazemos?</h2>
        <div className="sustainability-cards">
          <div className="sustainability-card">
            <h3>Na Produção</h3>
            <p>
              <span role="img" aria-label="necklace">📿</span>
              Aqui na Conta&Meia nós focamo-nos em produzir as nossas peças com a mínima pegada ecológica possível.
            </p>
          </div>
          <div className="sustainability-card">
            <h3>No Empacotamento</h3>
            <p>
              <span role="img" aria-label="package">📦</span>
              Utilizamos materiais recicláveis e biodegradáveis para empacotar as nossas peças e garantir um menor impacto no ambiente.
            </p>
          </div>
          <div className="sustainability-card">
            <h3>No Transporte</h3>
            <p>
              <span role="img" aria-label="truck">🚚</span>
              Trabalhamos com empresas de transporte que compartilham o nosso compromisso com a sustentabilidade.
            </p>
          </div>
        </div>
      </section>
      <section className="our-goal">
        <h2>O Nosso Objetivo</h2>
        <p>
          Nosso objetivo é criar um impacto positivo no ambiente e nas comunidades onde operamos. Queremos ser uma referência em sustentabilidade no setor de joalheria.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;
