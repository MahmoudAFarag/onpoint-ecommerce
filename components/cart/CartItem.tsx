import Image from 'next/image';

import { ProductCart } from '../../types/Product';
import { shimmer, toBase64 } from '../../lib/image_placeholder';
import useStore from '../../store/useStore';

interface CartItemProps {
  item: ProductCart;
}

const CartItem = ({ item }: CartItemProps) => {
  const cartQuantity = useStore((state) => state.items.find((i) => i.id === item.id)?.cartQuantity);
  const removeItem = useStore((state) => state.removeItem);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  const handleIncreaseQuantity = () => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(item);

    if (cartQuantity === 1) {
      return;
    }
  };

  return (
    <div className='relative flex items-center gap-5 p-4 shadow-md md:mx-auto md:w-[85%] md:p-5'>
      <button className='absolute top-1 right-1' onClick={() => removeItem(item)}>
        <svg className='h-5 w-5 fill-current text-gray-500 md:h-7 md:w-7' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        </svg>
      </button>

      <div className='relative mt-2 h-[100px] w-[70%] md:mt-4 md:h-[200px]'>
        <Image
          src={item.image}
          alt='product image'
          layout='fill'
          objectFit='contain'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 150))}`}
        />
      </div>

      <div className='flex w-full flex-col gap-1 text-xs md:text-2xl'>
        <h3>{item.name}</h3>
        <p className='text-[10px] text-gray-500 md:text-base'>{item.category} </p>
        <div className='mt-2 flex '>
          <p className='mr-auto'>${item.price}</p>
          <div className='flex items-center gap-2 md:gap-4'>
            <button
              onClick={handleIncreaseQuantity}
              disabled={cartQuantity === item.quantity}
              className='bg-yellow-300 py-1 px-2 disabled:bg-yellow-200 md:py-2 md:px-4'
            >
              +
            </button>
            <p>{cartQuantity}</p>
            <button
              onClick={handleDecreaseQuantity}
              disabled={cartQuantity === 1}
              className='bg-yellow-300 py-1 px-2 disabled:bg-yellow-200 md:py-2 md:px-4'
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
