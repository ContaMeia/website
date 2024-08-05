// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import ShippingInfo from './pages/ShippingInfo';
import PaymentInfo from './pages/PaymentInfo';
import ThankYou from './pages/ThankYou';

import Sustainability from './pages/Sustainability';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOrders from './pages/admin/AdminOrders';
import AdminProducts from './pages/admin/AdminProducts';
import AdminNewProduct from './pages/admin/AdminNewProduct';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminCollections from './pages/admin/AdminCollections';
import OrderDetails from './pages/admin/OrderDetails';
import Login from './pages/admin/Login';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout'; // Import MainLayout
import './App.css';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shipping" element={<ShippingInfo />} />
          <Route path="payment" element={<PaymentInfo />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="ordersdetail/:orderId" element={<OrderDetails />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/new" element={<AdminNewProduct />} />
          <Route path="products/edit/:id" element={<AdminEditProduct />} />
          <Route path="collections" element={<AdminCollections />} />
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
