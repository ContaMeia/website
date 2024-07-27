import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Product.css';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = await getDoc(doc(db, 'products', id));
      if (productDoc.exists()) {
        setProduct(productDoc.data());
        setMainImage(productDoc.data().mainImage);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  if (!product) return <div>Loading...</div>;

  const discountPrice = product.price - (product.price * product.discount / 100);

  return (
    <div className="product-detail">
      <div className="image-gallery">
        <div className="thumbnail-container">
          <img
            className="thumbnail"
            src={product.mainImage}
            alt={product.name}
            onClick={() => handleImageClick(product.mainImage)}
          />
          <img
            className="thumbnail"
            src={product.secondaryImage}
            alt={product.name}
            onClick={() => handleImageClick(product.secondaryImage)}
          />
        </div>
        <div className="main-image-container">
          <img className="main-image" src={mainImage} alt={product.name} />
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.discount > 0 ? (
          <>
            <p className="price">
              <span className="original-price">{product.price}€</span> {discountPrice}€
            </p>
            <p className="discount">{product.discount}% off</p>
          </>
        ) : (
          <p className="price">{product.price}€</p>
        )}

        <div className="quantity-cart-container">
          <div className="quantity-container">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button className="add-to-cart">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
