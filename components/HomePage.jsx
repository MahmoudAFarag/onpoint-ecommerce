import { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const HomePage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = products.slice((currentPage - 1) * 6, currentPage * 6);

  if (products.length === 0) {
    return <h1>Loading</h1>;
  }

  const handlePageChange = (e, page) => {
    e.preventDefault();

    setCurrentPage(page);
  };

  return (
    <div className='mx-auto max-w-xl px-4 pt-5 pb-5 lg:max-w-full lg:px-8 lg:pb-4'>
      <h2 className='mb-5 text-2xl'>Latest Products</h2>

      <div className='grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
        {paginatedProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Pagination itemsCount={products.length} pageSize={6} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
