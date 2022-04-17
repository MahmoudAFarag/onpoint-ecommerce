import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    
    
    <div className='mx-2 max-w-sm overflow-hidden ' >
      <Image src={product.image} alt='product image' width={400} height={300} />
      <div className='px-3'>
        <h3 className='text-xl'>{product.name}</h3>
        <span className='text-sm'>{product.category}</span>
      </div>
      <div className='mb-3 flex items-center p-3'>
        <h3 className='text-md mr-auto'>${product.price}</h3>
        <Link as ={`/product/${product.id}`}  href={{pathname:'/unauthsingleproduct', query:{object:JSON.stringify(product)}}} >
          <a className='bg-amber-400 px-3 py-2'>More Details</a>
        </Link>
      </div>
    </div>
    
  );
};

export default ProductCard;
