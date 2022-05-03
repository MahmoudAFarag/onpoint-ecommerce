import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '../../store/useStore';
import { getProduct, getProducts } from '../../lib/products';
import { ProductDoc, ProductCart } from '../../types/Product';
import { shimmer, toBase64 } from '../../lib/image_placeholder';
import useHasHydrated from '../../lib/useHasHydrated';
import Spinner from '../../components/Spinner';

interface ProductProps {
  product: ProductCart;
}

const SingleProduct = ({ product }: ProductProps) => {
  const itemExists = useStore((state) => state.items.find((item) => item.id === product.id));
  const currentUser = useStore((state) => state.currentUser);
  const addItemToCart = useStore((state) => state.addItem);
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    return <Spinner />;
  }

  return (
    <>
      <div className='bg-white'>
        <div className='flex flex-col pt-2 md:p-4'>
          <div className='md:flex md:items-center md:justify-center md:gap-20'>
            <div className='aspect-w-3 aspect-h-4 relative block h-[250px] w-full overflow-hidden rounded-lg p-6 md:h-[350px] md:max-w-[50%]'>
              <Image
                src={product.image}
                alt='Two each of gray, white, and black shirts laying flat.'
                layout='fill'
                objectFit='contain'
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
              />
            </div>

            <div className='max-w-2xl px-4 py-6 md:m-0 '>
              <div>
                <h1 className='text-xl font-extrabold tracking-tight text-gray-900 md:text-3xl'>{product.name}</h1>
                <p className='mt-3 text-base text-gray-500'>{product.category}</p>
              </div>

              <div className='mt-4 lg:row-span-3 lg:mt-0'>
                <h2 className='sr-only'>Product information</h2>
                <p className='text-2xl text-gray-900 md:mt-2'>$192</p>

                <div className='mt-6'>
                  <h3 className='sr-only'>Reviews</h3>
                  <div className='flex items-center'>
                    <div className='flex items-center'>
                      <svg
                        className='h-5 w-5 flex-shrink-0 text-gray-900'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>

                      <svg
                        className='h-5 w-5 flex-shrink-0 text-gray-900'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>

                      <svg
                        className='h-5 w-5 flex-shrink-0 text-gray-900'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>

                      <svg
                        className='h-5 w-5 flex-shrink-0 text-gray-900'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>

                      <svg
                        className='h-5 w-5 flex-shrink-0 text-gray-200'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    </div>
                    <p className='sr-only'>4 out of 5 stars</p>
                    <span className='ml-3 text-sm font-medium text-gray-600'>{product.reviews?.length} reviews</span>
                  </div>
                </div>

                <div className='flex items-center justify-center gap-5 md:justify-end'>
                  <Link href='/cashout' passHref>
                    <button
                      type='button'
                      className='mt-10 rounded-md border border-transparent bg-yellow-400 py-3 px-10 text-base font-medium uppercase text-black'
                      onClick={() => addItemToCart(product)}
                    >
                      Buy Now
                    </button>
                  </Link>
                  <button
                    type='button'
                    className='mt-10 rounded-md border border-transparent bg-gray-800 py-3 px-10 text-base font-medium text-white disabled:bg-gray-600'
                    disabled={itemExists ? true : false}
                    onClick={() => addItemToCart(product)}
                  >
                    {itemExists ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-4 p-5 md:w-[110ch] md:p-8'>
            <div>
              <h3 className='mb-2 text-lg font-extrabold uppercase text-yellow-600 md:mb-4 md:text-2xl'>Description</h3>

              <p className='text-xs leading-8 text-gray-900 md:text-lg'>{product.description}</p>
            </div>

            <div>
              <h1 className='mt-6 mb-4 text-lg font-extrabold uppercase text-yellow-600 md:text-2xl'>Reviews</h1>
              <div className='flex flex-col gap-4'>
                {product.reviews?.map((review) => (
                  <div className='flex flex-col gap-1 border-b p-3' key={review.name}>
                    <p className='text-sm font-bold md:text-xl'>{review.name}</p>
                    <p className='text-sm text-gray-700 md:text-lg'>{review.review}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-8'>
              <h1 className='mb-5 text-lg font-extrabold uppercase md:text-2xl'>Tell us what you think</h1>
              {currentUser ? (
                <form className='flex flex-col gap-4'>
                  <label className='text-sm font-bold md:text-lg'>Name</label>
                  <input className='h-[40px]  rounded-md border border-gray-300 p-2' type='text' />
                  <label className='text-sm font-bold md:text-lg'>Review</label>
                  <textarea className='h-[40px]  rounded-md border border-gray-300 p-2' />
                  <button
                    type='button'
                    className='mt-10 w-52 rounded-md border border-transparent bg-yellow-500 py-3 px-10 text-base font-bold text-black'
                  >
                    Submit Review
                  </button>
                </form>
              ) : (
                <p className='h-10 w-full bg-slate-900 py-2 text-center text-white'>You need to sign in to be able to review</p>
              )}
            </div>
          </div>
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
