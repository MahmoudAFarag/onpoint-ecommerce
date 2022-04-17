// Core
import React from 'react';

// Style
import style from '../../styles/ShoppingCart.module.css';

// Stores
import useCartStore from '../../store/CartStore';

// Components
import Product from './Product';

const ShoppingCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className={style.cart_home_page}>
      <h1 className={style.cart_title}>ShoppingCart</h1>
      {cartItems.length === 0 && (
        <h4 className={style.no_items_at_cart}>No Items in Cart</h4>
      )}
      <ul>
        {cartItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
