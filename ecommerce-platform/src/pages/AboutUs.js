import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <div className="about-logo-container">
          <img src="/images/logo.png" alt="Conta&Meia" className="about-logo" />
          <div className="about-text-container">
            <h1>Sobre Nós</h1>
            <p>
              Na Conta&Meia, trabalhamos afincadamente para ajudar a tornar o planeta um lugar melhor e com esta
              mentalidade que nos orgulhamos de anunciar todas as nossas peças são produzidas sem qualquer produção de CO2 para além disso todas as nossas embalagens são compostáveis e biodegradáveis.
            </p>
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <h2>2020</h2>
          <p>Desde</p>
        </div>
        <div className="about-card">
          <h2>Made in</h2>
          <p>Portugal</p>
        </div>
        <div className="about-card">
          <h2>Peças de</h2>
          <p>Prata & Aço Inoxidável</p>
        </div>
        <div className="about-card">
          <h2>Feitas à</h2>
          <p>Mão</p>
        </div>
      </div>
      <div className="about-mission-vision">
        <div className="about-mission">
          <h2>A Nossa Missão</h2>
          <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        </div>
        <div className="about-vision">
          <h2>A Nossa Visão</h2>
          <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        </div>
      </div>
      <div className="about-values">
        <h2>Os nossos Valores</h2>
        <div className="values-icons">
          <div className="value-icon">
            <img src="/images/Imagem1.svg" alt="Satisfação do Cliente" />
            <p>Satisfação do Cliente</p>
          </div>
          <div className="value-icon">
            <img src="/images/Imagem2.svg" alt="Transparência" />
            <p>Transparência</p>
          </div>
          <div className="value-icon">
            <img src="/images/Imagem4.svg" alt="Reputação" />
            <p>Reputação</p>
          </div>
          <div className="value-icon">
            <img src="/images/Imagem5.svg" alt="Sustentabilidade" />
            <p>Sustentabilidade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
