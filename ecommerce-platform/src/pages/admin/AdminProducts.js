import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './AdminProducts.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (filterType ? product.type === filterType : true)
    );

  return (
    <div className="admin-products">
      <h1>Produtos</h1>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Procurar por Nome da Peça..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)} 
        >
          <option value="">Filtrar por Tipo de Peça</option>
          <option value="colar">Colar</option>
          <option value="anel">Anel</option>
          {/* Add more options as needed */}
        </select>
        <button className="create-button" onClick={() => navigate('/admin/products/new')}>
          Criar Produto
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nome da Peça</th>
            <th>Tipo de Peça</th>
            <th>Preço</th>
            <th>Disponível</th>
            <th>Codigo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.price}€</td>
              <td>{product.stock}</td>
              <td>{product.code}</td>
              <td>
                <Link to={`/admin/products/edit/${product.id}`} className="edit-button">Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
