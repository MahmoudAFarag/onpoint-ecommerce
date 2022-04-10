// Core imports
import { useState } from 'react';
import { GetStaticProps } from 'next';
// Utility imports
import { getProducts } from '../../lib/products';
import { ProductDoc } from '../../types/Product';
// Component imports
import ProductCard from '../../components/ProductCard';
import Pagination from '../../components/Pagination';

interface ProductsProps {
  products: ProductDoc[];
}

const ProductsPage = ({ products }: ProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedProducts = products.slice((currentPage - 1) * 6, currentPage * 6);

  const handlePageChange = (e, page: number) => {
    e.preventDefault();

    setCurrentPage(page);
  };

  return (
    <div className='p-8'>
      <h1 className='mb-5 ml-4 text-2xl'>All Products</h1>{' '}
      <div className='grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination itemsCount={products.length} pageSize={6} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProducts();
  const products = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products,
    },
    revalidate: 1800,
  };
};

export default ProductsPage;
