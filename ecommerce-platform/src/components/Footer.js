import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/about-us">Sobre Nós</Link></li>
            <li><Link to="/sustainability">Sustentabilidade</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Peças</h3>
          <ul>
            <li><Link to="/shop/rings">Anéis</Link></li>
            <li><Link to="/shop/bracelets">Pulseiras</Link></li>
            <li><Link to="/shop/necklaces">Colares</Link></li>
            <li><Link to="/shop/earrings">Brincos</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Ajuda</h3>
          <ul>
            <li><Link to="/terms-and-conditions">Termos e Condições</Link></li>
            <li><Link to="/privacy-policy">Política de Privacidade</Link></li>
            <li><Link to="/return-policy">Política de Devoluções</Link></li>
            <li><Link to="/shipping-details">Detalhes de Envio</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
