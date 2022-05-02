import ShoppingCart from "../components/cart/ShoppingCart";

import Head from "next/head";

const Cart = () => {
  return (
    <div>
      <Head>
        <title>on point | Cart Page</title>
        <meta name="description" content="on point cart page" />
      </Head>

      <ShoppingCart />
    </div>
  );
};

export default Cart;
