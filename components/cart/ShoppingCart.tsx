// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';
import Link from 'next/link';
import Spinner from '../Spinner';
import useHasHydrated from '../../lib/useHasHydrated';

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);
  const hasHydrated = useHasHydrated();

  // calculations
  const subtotal = +cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.cartQuantity;
    }, 0)
    .toFixed(1);

  const taxEstimate = +(subtotal * 0.05).toFixed(1);

  const shippingEstimate = 10;

  const total = subtotal + taxEstimate + shippingEstimate;

  if (!hasHydrated) {
    return <Spinner />;
  }

  if (cartItems.length === 0) {
    return (
      <div className='flex h-[50vh] flex-col items-center justify-center gap-3 text-xl md:gap-5 md:text-4xl'>
        <h3 className='text-gray-500'>Your cart is empty</h3>
        <Link href='/'>
          <a className='text-base text-gray-500 underline underline-offset-4 md:text-lg'>Continue shopping</a>
        </Link>
      </div>
    );
  }

  return (
    <div className='p-5 md:p-10'>
      <h1 className='mb-4 text-xl md:text-3xl'>ShoppingCart</h1>

      <div className='flex flex-col gap-3'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <div className='mx-auto mt-4 flex w-full flex-col p-4 text-base shadow-md md:w-[85%] md:text-2xl'>
        <h1 className='mb-4'>Order Summary</h1>
        <div className='flex flex-col gap-3 text-xs md:text-base'>
          <div className='flex border-b-2 pb-2'>
            <p className='mr-auto'>Subtotal</p>
            <p>$ {subtotal}</p>
          </div>

          <div className='flex border-b-2 pb-2'>
            <p className='mr-auto'>Tax Estimate</p>
            <p>$ {taxEstimate}</p>
          </div>

          <div className='flex border-b-2 pb-2'>
            <p className='mr-auto'>Shipping Estimate</p>
            <p>$ {shippingEstimate}</p>
          </div>

          <div className='md: flex text-base md:text-xl'>
            <p className='mr-auto'>Order Total</p>
            <p>$ {total}</p>
          </div>

          <div className='my-2 self-center'>
            <Link href='/cashout' passHref>
              <button className='rounded bg-amber-400 py-2 px-4 text-xs font-bold uppercase md:py-3 md:px-5 md:text-lg'>
                Proceed to CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
