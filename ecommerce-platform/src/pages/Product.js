// src/pages/Product.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = await getDoc(doc(db, 'products', id));
      if (productDoc.exists()) {
        setProduct(productDoc.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}€</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
