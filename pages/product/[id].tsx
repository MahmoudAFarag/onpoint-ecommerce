import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '../../store/useStore';
import { getProduct, getProducts } from '../../lib/products';
import { ProductDoc } from '../../types/Product';
import { shimmer, toBase64 } from '../../lib/image_placeholder';
import AddToCartButton from '../../components/cart/AddToCartButton';

interface ProductProps {
  product: ProductDoc;
}

const SingleProduct = ({ product }: ProductProps) => {
  const currentUser = useStore((state) => state.currentUser);
  return (
    <>
      <div className='flex gap-7 p-9'>
        <div className='relative mt-8 h-[230px] min-w-[300px]'>
          <Image
            src={product.image}
            alt='product image'
            layout='fill'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='w-[45ch] text-3xl font-bold leading-9'>{product.name}</h1>
          <p className='text-base text-gray-700'>
            Price: ${product.price}
            <span className='text-gray-500'>&nbsp;USD</span>
          </p>
          <h2 className='text-xl'>About this item</h2>
          <p className='w-[80ch] text-base leading-7 text-gray-700'>{product.description}</p>
          <div className='mt-4 flex items-center justify-end gap-3'>
            <Link href={'/authcashout'} passHref>
              <button className='h-[65%] w-[100px] bg-yellow-400 text-xs uppercase'>Buy Now</button>
            </Link>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      <div className='p-9'>
        <h1 className='mb-5 text-2xl'>Reviews</h1>
        <div className='flex flex-col gap-4'>
          {product.reviews?.map((review) => (
            <div className='flex flex-col gap-1' key={review.name}>
              <p className='text-md font-bold'>{review.name}</p>
              <p className='text-base text-gray-700'>{review.review}</p>
            </div>
          ))}
        </div>

        <div className='mt-8'>
          <h1 className='mb-5 text-2xl'>Tell us what you think</h1>
          {currentUser ? (
            <form className='flex flex-col gap-4'>
              <label className='text-sm font-bold'>Name</label>
              <input className='h-[40px] w-[80ch] rounded-md border border-gray-300 p-2' type='text' />
              <label className='text-sm font-bold'>Review</label>
              <textarea className='h-[40px] w-[80ch] rounded-md border border-gray-300 p-2' />
              <button className='h-[2rem] w-[7%] bg-yellow-400 text-xs uppercase'>Submit</button>
            </form>
          ) : (
            <p className='h-10 w-full bg-slate-900 py-2 text-center text-white'>You need to sign in to be able to review</p>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = (await getProducts()) as ProductDoc[];

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProduct(params?.id as string);

  const product = JSON.parse(JSON.stringify(data));

  return {
    props: {
      product: product,
    },
  };
};

export default SingleProduct;
