import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sustainability from '../components/Sustainability';
import ProductSearch from '../components/ProductSearch';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Sustainability />
      <ProductSearch />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
