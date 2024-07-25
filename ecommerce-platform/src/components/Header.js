// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
        <h1>Conta&Meia</h1>
      </div>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/collections">Coleções</Link>
        <Link to="/sustainability">Sustentabilidade</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/contact">Contactos</Link>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search for products..." />
        <Link to="/cart">
          <img src="/images/cart.png" alt="Cart" className="cart" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
