// src/components/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Assume you have a Header component
import Footer from './Footer'; // Assume you have a Footer component

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
