import Image from 'next/image';

import { ProductCart } from '../../types/Product';
import styles from '../../styles/ShoppingCart.module.css';
import { shimmer, toBase64 } from '../../lib/image_placeholder';
import useStore from '../../store/useStore';
import { useState } from 'react';

interface CartItemProps {
  item: ProductCart;
}

const CartItem = ({ item }: CartItemProps) => {
  const [cartQuantity, setCartQuantity] = useState<number>(1);
  const removeItem = useStore((state) => state.removeItem);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  const handleIncreaseQuantity = () => {
    increaseQuantity(item);
    setCartQuantity((prevState) => prevState + 1);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(item);

    if (cartQuantity === 1) {
      return;
    }

    setCartQuantity((prevState) => prevState - 1);
  };

  return (
    <div className={styles.cart_product}>
      <Image
        src={item.image}
        alt='product image'
        height={150}
        width={150}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 150))}`}
      />
      <div className={styles.cart_product_content}>
        <div className={styles.product_description}>
          <h3>{item.name}</h3>
          <p>Price : {item.price}</p>
          <p>Category :{item.category} </p>
        </div>
        <div className={styles.product_amount}>
          <label>Qty:</label>
          <button className={styles.amount_btn} onClick={handleIncreaseQuantity}>
            +
          </button>
          <p>{cartQuantity}</p>
          <button onClick={handleDecreaseQuantity} className={styles.amount_btn}>
            -
          </button>
          <button className={styles.delete_btn} onClick={() => removeItem(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
