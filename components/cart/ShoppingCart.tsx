// Core
import React from 'react';

// Style
import styles from '../../styles/ShoppingCart.module.css';

// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';
import Link from 'next/link';
import Spinner from '../Spinner';
import useHasHydrated from '../../lib/useHasHydrated';

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    return <Spinner />;
  }

  return (
    <div className='p-5'>
      <h1 className='mb-4 text-xl'>ShoppingCart</h1>
      {/* <div>{cartItems.length === 0 && <h4 className={styles.header__no_items}>No Items in Cart</h4>}</div> */}

      <div className='flex flex-col gap-3'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      {cartItems.length !== 0 && (
        <div className='my-5 mx-auto w-max'>
          <Link href='/cashout' passHref>
            <button className='rounded bg-amber-400 py-2 px-4  pb-3 text-xs font-bold uppercase '> Proceed to CheckOut</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
