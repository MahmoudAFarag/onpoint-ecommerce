import Image from 'next/image';
import Link from 'next/link';
import { shimmer, toBase64 } from '../lib/image_placeholder';

const ProductCard = ({ product }) => {
  return (
    <div className='flex max-w-md flex-col gap-5'>
      <div className='relative min-h-[330px] min-w-full'>
        <Image
          src={product.image}
          alt='product image'
          layout='fill'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 300))}`}
        />
      </div>

      <div className='px-3'>
        <h3 className='text-xl'>{product.name}</h3>
        <span className='text-sm'>{product.category}</span>
      </div>
      <div className='mb-3 flex items-center p-3'>
        <h3 className='text-md mr-auto'>${product.price}</h3>
        <Link href={`/product/${product.id}`}>
          <a className='bg-amber-400 px-3 py-2'>More Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
