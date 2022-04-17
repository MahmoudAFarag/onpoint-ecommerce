import Header from '../components/Header';
import ShoppingCart from '../components/cart/ShoppingCart';
import Footer from '../components/Footer';
// import useStore from '../store/useStore';

const Cart = () => {
  // const products = useStore((state) => state.products);
  // console.log(products);

  return (
    <div>
      <Header />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default Cart;
