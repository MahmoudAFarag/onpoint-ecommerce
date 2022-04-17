import React from 'react';
import useCartStore from '../../store/CartStore';
import styles from '../../styles/ShoppingCart.module.css';

const AddToCartButton = ({ product }) => {
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  return (
    <React.Fragment>
      <button
        onClick={() => addItemToCart(product)}
        className={styles.add_button}
      >
        Add To Cart
      </button>
    </React.Fragment>
  );
};

export default AddToCartButton;
