import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useCart } from '../contexts/CartContext';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Header = () => {
  const { cart } = useCart();
  const [collections, setCollections] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionSnapshot = await getDocs(collection(db, 'collections'));
      const collectionsList = collectionSnapshot.docs.map(doc => doc.data());
      setCollections(collectionsList);
    };

    fetchCollections();
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="dropdown-toggle">Coleções</button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {collections.map((collection, index) => (
                  <Link key={index} to={`/shop`} className="dropdown-item">
                    {collection.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/sustainability">Sustentabilidade</Link>
          <Link to="/about-us">Sobre Nós</Link>
          <Link to="/contact">Contactos</Link>
        </div>
        <div className="header-actions">
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
