// Core
import React from 'react';

// Style
import style from '../../styles/ShoppingCart.module.css';

// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);

  return (
    <div className={style.cart_home_page}>
      <h1 className={style.cart_title}>ShoppingCart</h1>
      {cartItems.length === 0 && <h4 className={style.no_items_at_cart}>No Items in Cart</h4>}
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
