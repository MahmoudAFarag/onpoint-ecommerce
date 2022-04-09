// Core imports
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// UI imports
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
// import SingleProduct from '../components/SingleProduct';

// Utils
import { getProducts } from '../lib/products';
import { ProductDoc } from '../types/Product';
import useStore from '../store/useStore';

interface HomeProps {
  products: ProductDoc[];
}

const Home = ({ products }: HomeProps) => {
  const setProducts = useStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(products);
  }, [setProducts, products]);

  return (
    <>
      <Head>
        <title>onPoint Shop</title>
        <meta name='description' content='E-commerce for selling multi purpose products' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
     {/* <SingleProduct/> */}
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
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
