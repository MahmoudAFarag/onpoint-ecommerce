import Image from 'next/image';
import Link from 'next/link';
import { shimmer, toBase64 } from '../lib/image_placeholder';

const ProductCard = ({ product }) => {
  return (
    <div className='group w-full p-5 shadow-md'>
      <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
        <div className='relative h-[220px] w-full'>
          <Image
            src={product.image}
            alt='product image'
            layout='fill'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 300))}`}
          />
        </div>
      </div>
      <h3 className='mt-4 text-base text-black'>{product.name}</h3>
      <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
      <div className='mt-1 flex items-center'>
        <p className='mr-auto text-lg font-medium text-gray-900'>${product.price}</p>
        <Link href={`/product/${product.id}`}>
          <a className='bg-amber-400 px-3 py-2'>More Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
