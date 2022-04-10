// Core imports
import { GetStaticProps } from 'next';
import Head from 'next/head';

// Utils
import { getLatestProducts, getProducts } from '../lib/products';
import { ProductDoc } from '../types/Product';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  products: ProductDoc[];
}

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <Head>
        <title>onPoint Shop</title>
        <meta name='description' content='E-commerce for selling multi purpose products' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-8'>
        <h1 className='mb-5 ml-4 text-2xl'>Latest Products</h1>
        <div className='grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getLatestProducts(6);

  const products = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products,
    },
  };
};

export default Home;
