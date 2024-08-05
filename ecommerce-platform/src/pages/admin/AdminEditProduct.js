// src/pages/admin/AdminEditProduct.js
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminForm.css';

function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    code: '',
    type: '',
    collection: '',
    price: '',
    discount: 0,
    stock: '',
    description: '',
    mainImage: '',
    secondaryImage: ''
  });
  const [collections, setCollections] = useState([]);
  const [mainImageFile, setMainImageFile] = useState(null);
  const [secondaryImageFile, setSecondaryImageFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, 'products', id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setProduct(productSnap.data());
      }
    };

    const fetchCollections = async () => {
      const collectionsRef = collection(db, 'collections');
      const collectionsSnap = await getDocs(collectionsRef);
      const collectionsList = collectionsSnap.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCollections(collectionsList);
    };

    fetchProduct();
    fetchCollections();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (file) => {
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Upload error: ', error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = { ...product };

      if (mainImageFile) {
        updatedProduct.mainImage = await handleImageUpload(mainImageFile);
      }

      if (secondaryImageFile) {
        updatedProduct.secondaryImage = await handleImageUpload(secondaryImageFile);
      }

      const productRef = doc(db, 'products', id);
      await updateDoc(productRef, updatedProduct);
      navigate('/admin/products'); // Optionally, navigate to the products list
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="admin-edit-product">
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Nome da Peça
          <input type="text" name="name" placeholder="Nome da Peça" value={product.name} onChange={handleChange} required />
        </label>
        <label>
          Código da Peça
          <input type="text" name="code" placeholder="Código da Peça" value={product.code} onChange={handleChange} required />
        </label>
        <label>
          Tipo de Peça
          <input type="text" name="type" placeholder="Tipo de Peça" value={product.type} onChange={handleChange} required />
        </label>
        <label>
          Coleção
          <select name="collection" value={product.collection} onChange={handleChange} required>
            <option value="">Selecione uma coleção</option>
            {collections.map((col) => (
              <option key={col.id} value={col.name}>
                {col.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preço
          <input type="number" name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
        </label>
        <label>
          Desconto em %
          <input type="number" name="discount" placeholder="Desconto em %" value={product.discount} onChange={handleChange} />
        </label>
        <label>
          Quantidade em Stock
          <input type="number" name="stock" placeholder="Quantidade em Stock" value={product.stock} onChange={handleChange} required />
        </label>
        <label>
          Descrição
          <textarea name="description" placeholder="Descrição" value={product.description} onChange={handleChange} />
        </label>
        <label>
          URL da Imagem Principal
          <input type="file" onChange={(e) => setMainImageFile(e.target.files[0])} />
        </label>
        <label>
          URL da Imagem Secundária
          <input type="file" onChange={(e) => setSecondaryImageFile(e.target.files[0])} />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default AdminEditProduct;
