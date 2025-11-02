import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiClient';
import Product from '../components/Product'; // ✅ Import Product component
import './Products.css';

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        const data = Array.isArray(response) ? response : response?.data || [];
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error.message}</div>;

  return (
    <div className="products-container">
      <h1>Our Toys</h1>
      <div className="products-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product?.id ?? Math.random()}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
