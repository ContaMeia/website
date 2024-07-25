import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Conta&Meia</h3>
          <p>© 2023-2024, All Rights Reserved</p>
        </div>
        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li>Sobre Nós</li>
            <li>Sustentabilidade</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Peças</h3>
          <ul>
            <li>Anéis</li>
            <li>Pulseiras</li>
            <li>Colares</li>
            <li>Brincos</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Ajuda</h3>
          <ul>
            <li>Termos e Condições</li>
            <li>Política de Privacidade</li>
            <li>Política de Devoluções</li>
            <li>Detalhes de Envio</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
