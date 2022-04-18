import { ProductCart } from '../../types/Product';
import styles from '../../styles/ShoppingCart.module.css';
import useStore from '../../store/useStore';

interface CartItemProps {
  item: ProductCart;
}

const CartItem = ({ item }: CartItemProps) => {
  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className={styles.cart_item}>
      <div className={styles.item_img}>
        <img className={styles.img} src={item.image} alt='product-image' />
      </div>
      <div className={styles.item_content}>
        <h3>{item.name}</h3>
        <p>Price : {item.price}</p>
        <p>Category :{item.category} </p>
        <div>
          <input type='number' value={item.cartQuantity} />
        </div>
        <button onClick={() => removeItem(item)}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
