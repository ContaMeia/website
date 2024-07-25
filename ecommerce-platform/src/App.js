// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import AboutUs from './pages/AboutUs';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import AdminLayout from './pages/admin/AdminLayout';
import AdminProducts from './pages/admin/AdminProducts';
import AdminNewProduct from './pages/admin/AdminNewProduct';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import TestComponent from './pages/admin/TestComponent';  // Import the TestComponent
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/new" element={<AdminNewProduct />} />
          <Route path="products/edit/:id" element={<AdminEditProduct />} />
        </Route>
        <Route path="/admin/test" element={<TestComponent />} /> {/* Add the TestComponent route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
