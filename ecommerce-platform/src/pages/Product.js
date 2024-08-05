// src/pages/Product.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import './Product.css';
import { useCart } from '../contexts/CartContext';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

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

  useEffect(() => {
    if (product) {
      const fetchRelatedProducts = async () => {
        const q = query(collection(db, 'products'), where('type', '==', product.type), where('id', '!=', id));
        const querySnapshot = await getDocs(q);
        setRelatedProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };
      fetchRelatedProducts();
    }
  }, [product, id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleAddToCart = () => {
    const productWithCode = { ...product, id: product.code, quantity };
    dispatch({ type: 'ADD_TO_CART', product: productWithCode });
  };
  
  const handleRelatedProductClick = (type) => {
    navigate(`/shop?type=${type}`);
  };

  if (!product) return <div>Loading...</div>;

  const discountPrice = product.price - (product.price * product.discount / 100);

  return (
    <div className='pagfin'>
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
          {product.stock > 0 ? (
            <div className="quantity-cart-container">
              <div className="quantity-container">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button onClick={handleAddToCart} className="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          ) : (
            <p className="out-of-stock-message">Neste momento este Produto não está disponível</p>
          )}
        </div>
      </div>
      <div className="related-products">
        <div className="related-products-container" onClick={() => handleRelatedProductClick(product.type)}>
          <h2>Encontrar outros {product.type} semelhantes</h2>
          <div className="related-products">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="related-product">
                <img src={relatedProduct.mainImage} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="newsletter">
        <div className="newsletter-container">
          <h2>Queres ficar atualizado? Nós informamos-te as novidades</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Insira aqui o seu Email" />
            <button type="submit">Subscrever</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Product;
