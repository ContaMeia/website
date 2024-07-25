import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Corta&Meia" />
          </Link>
        </div>
        <nav className="header-nav">
          <Link to="/products">Produtos</Link>
          <Link to="/collections">Coleções</Link>
          <Link to="/sustainability">Sustentabilidade</Link>
          <Link to="/about">Sobre Nós</Link>
          <Link to="/contact">Contactos</Link>
        </nav>
        <div className="header-actions">
          <div className="header-search">
            <input type="text" placeholder="Search for products..." />
            <button type="button">
              <img src="/images/search-icon.png" alt="Search" />
            </button>
          </div>
          <div className="header-cart">
            <Link to="/cart">
              <img src="/images/cart-icon.png" alt="Cart" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
