import styles from '../styles/HomePage.module.css';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const renderedContent = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return <div className={styles.home__page}>{renderedContent}</div>;
};

export default HomePage;
