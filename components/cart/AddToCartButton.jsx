import React, { useEffect, useState } from 'react';
import useStore from '../../store/useStore';
import styles from '../../styles/ShoppingCart.module.css';

const AddToCartButton = ({ product }) => {
  const addItemToCart = useStore((state) => state.addItem);
  const cartItems = useStore((state) => state.items);
  const [isExist, setIsExist] = useState(false);
  const [buttonClasses, setButtonClasses] = useState([styles.add_button]);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      const isItemExist = cartItems.filter((item) => item.id === product.id);
      if (isItemExist.length > 0) {
        setIsExist(true);
        setButtonClasses([...buttonClasses, styles.disable_after_click]);
      } else {
        setButtonClasses([styles.add_button]);
      }
    }
  }, [cartItems]);

  return (
    <React.Fragment>
      <button onClick={addItemToCartHandler} className={buttonClasses.join(' ')}>
        {isExist ? 'Added' : 'Add To Cart'}
      </button>
    </React.Fragment>
  );
};

export default AddToCartButton;
