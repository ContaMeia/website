import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import './Homepage.css';
import ProductListing from '../components/ProductListing';

const ProductList = () => {
  return (
    <div className="productlist">
      <Header />
      <ProductListing />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
