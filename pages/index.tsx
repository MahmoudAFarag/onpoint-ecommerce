// Core imports
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// UI imports
import HomePage from '../components/HomePage';

// Utils
import { getProducts } from '../lib/products';
import { ProductDoc } from '../types/Product';

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

      <HomePage products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProducts();
  const products = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products,
    },
  };
};

export default Home;
