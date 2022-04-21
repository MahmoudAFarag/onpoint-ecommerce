import { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import useStore from '../store/useStore';

const HomePage = ({ products }) => {
  // const products = useStore((state) => state.products);
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
    <>
      <div className='grid min-h-screen justify-items-center gap-12 p-8 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Pagination itemsCount={products.length} pageSize={6} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default HomePage;
