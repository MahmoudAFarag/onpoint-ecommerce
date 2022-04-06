import React, { useEffect, useState } from 'react';
import { getProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = products.slice((currentPage - 1) * 6, currentPage * 6);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <h1>Loading</h1>;
  }

  const handlePageChange = (e, page) => {
    e.preventDefault();

    setCurrentPage(page);
  };

  return (
    <>
      <div className='grid justify-items-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Pagination itemsCount={products.length} pageSize={6} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default HomePage;
