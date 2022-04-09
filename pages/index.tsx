// Core imports
import type { NextPage } from 'next';
import Head from 'next/head';

// UI imports
import Header from '../components/Header';
import Footer from '../components/Footer';
// import SingleProduct from '../components/SingleProduct';

const Home: NextPage = () => {
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
        <h1>onpoint ecommerce</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
