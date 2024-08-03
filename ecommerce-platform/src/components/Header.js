import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useCart } from '../contexts/CartContext';


const Header = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Corta&Meia" />
          </Link>
        </div>
        <div className="header-nav">
          <Link to="/shop">Produtos</Link>
          <Link to="/shop">Coleções</Link>
          <Link to="/sustainability">Sustentabilidade</Link>
          <Link to="/about-us">Sobre Nós</Link>
          <Link to="/contact">Contactos</Link>
        </div>
        <div className="header-actions">
          <div className="header-search">
            <input type="text" placeholder="Search for products..." />
            <button type="button" className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5"/>
              </svg>
            </button>
          </div>
          <div className="header-cart">
        <Link to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none">
              <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor" />
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2l.6 3m0 0L7 15h10l2-7z" />
            </g>
          </svg>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
