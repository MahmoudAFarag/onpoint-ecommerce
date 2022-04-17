import React from 'react';
import useStore from '../../store/useStore';
import styles from '../../styles/ShoppingCart.module.css';

const AddToCartButton = ({ product }) => {
  const addItemToCart = useStore((state) => state.addItem);

  return (
    <React.Fragment>
      <button onClick={() => addItemToCart(product)} className={styles.add_button}>
        Add To Cart
      </button>
    </React.Fragment>
  );
};

export default AddToCartButton;
