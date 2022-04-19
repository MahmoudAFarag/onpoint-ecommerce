import Image from 'next/image';

import { ProductCart } from '../../types/Product';
import styles from '../../styles/ShoppingCart.module.css';
import { shimmer, toBase64 } from '../../lib/image_placeholder';
import useStore from '../../store/useStore';

interface CartItemProps {
  item: ProductCart | any;
}

const CartItem = ({ item }: CartItemProps) => {
  const removeItem = useStore((state) => state.removeItem);

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
          <input type='number' />
          <button onClick={() => removeItem(item)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
