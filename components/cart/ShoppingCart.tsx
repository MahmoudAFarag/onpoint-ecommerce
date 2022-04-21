// Core
import React from 'react';

// Style
import styles from '../../styles/ShoppingCart.module.css';

// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>ShoppingCart</h1>
        {cartItems.length === 0 && <h4 className={styles.header__no_items}>No Items in Cart</h4>}
      </div>

      <div className={styles.cart}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
