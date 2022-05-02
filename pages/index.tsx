// Core imports
import { GetStaticProps } from 'next';
import Head from 'next/head';

// UI imports
import HomePage from '../components/HomePage';

// Utils
import { getProducts } from '../lib/products';
import { ProductDoc } from '../types/Product';

interface HomeProps {
  products: ProductDoc[];
  hasHydrated: boolean;
}

const Home = ({ products }: HomeProps) => {
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>onPoint Shop</title>
        <meta name='description' content='E-commerce for selling multi purpose products' />
        <meta name='keywords' content="on point, ecommerce, online shopping" />
        <meta property="og:title" content="On Point" />
        <meta property="og:description" content='E-commerce for selling multi purpose products' />
        <meta property="og:image" content='/favicon.ico' />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}`} />
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
