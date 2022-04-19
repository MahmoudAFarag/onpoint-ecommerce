// Core
import React from 'react';

// Style
import styles from '../../styles/ShoppingCart.module.css';

// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';

const tempItems = [
  {
    id: '1',
    name: 'Test Item',
    price: 200,
    description: "It's a test item",
    category: 'test',
    discount: '0%',
    created_at: '2020-01-01',
    modified_at: '2020-01-01',
    cartQuantity: 1,
    quantity: 1,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: '2',
    name: 'Test Item 2',
    price: 200,
    description: "It's a test item",
    category: 'test',
    discount: '0%',
    created_at: '2020-01-01',
    modified_at: '2020-01-01',
    cartQuantity: 1,
    quantity: 1,
    image: 'https://via.placeholder.com/300',
  },
];

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>ShoppingCart</h1>
        {/* {cartItems.length === 0 && <h4 className={styles.header__no_items}>No Items in Cart</h4>} */}
      </div>

      <div className={styles.cart}>
        {tempItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
