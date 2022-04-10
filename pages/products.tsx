import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { getPaginatedProducts } from '../lib/products';
import { ProductDoc } from '../types/Product';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { QueryDocumentSnapshot } from 'firebase/firestore';

interface ProductsProps {
  products: ProductDoc[];
}

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<ProductDoc[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<ProductDoc>>();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getPaginatedProducts();
      const lastDoc = data?.productsSnapshot.docs[data.productsSnapshot.docs.length - 1];

      setProductsList(data?.products);
      setLastDoc(lastDoc);
    };

    fetchProducts();
  }, []);

  const fetchMore = async () => {
    const data = await getPaginatedProducts(lastDoc);

    setProductsList(data?.products);
    setLastDoc(data?.productsSnapshot.docs[data.productsSnapshot.docs.length - 1]);
  };

  return (
    <div>
      <div className='grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {productsList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination itemsCount={productsList.length} pageSize={6} onPageChange={fetchMore} />
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getPaginatedProducts();
//   const products = JSON.parse(JSON.stringify(data?.products));

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default ProductsPage;
