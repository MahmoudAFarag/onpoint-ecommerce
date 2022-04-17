import React from 'react';
import useCartStore from '../../store/CartStore';
import styles from '../../styles/ShoppingCart.module.css';

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.cart_item}>
      <div className={styles.item_img}>
        <img className={styles.img} src={item.image} alt='product-image' />
      </div>
      <div className={styles.item_content}>
        <h3>{item.name}</h3>
        <p>Price : {item.price}</p>
        <p>Category :{item.category} </p>
        <p>Qty : {item.quantity}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
