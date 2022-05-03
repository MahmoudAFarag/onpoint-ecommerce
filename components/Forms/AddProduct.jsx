import React from 'react';
import addProduct from '../../lib/products'
// import {useState} from  'react';
import Link from 'next/dist/client/link';

const AddProduct = () => {

  "const [product,setProduct]=useState({})"

  const product={
    cartQuantity: 1,
    category: "women's clothing",
    
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
   
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99
   

  }
const handleClick = async()=>{
   await addProduct(product)
}
   
   
  return (
    <div>
      <h1 className='bg-white pb-4 font-bold '>Add Product</h1>

      <form className='pb-4'>
        <div className='flex pb-4  '>
          <div className='flex flex-col'>
            <label className='pb-2'>Title</label>
            <input type='text' name='name' placeholder='Title' className='resize rounded-md bg-slate-400' />
          </div>
          <div className='flex flex-col pl-5 pb-4 '>
            <label>Price</label>
            <div className='flex '>
              <input type='text' name='name' placeholder='Price' className='resize rounded-md bg-slate-400 ' />
              <h4 className='resize rounded-md bg-slate-900 pl-1 pr-1 text-white '>$</h4>
            </div>
          </div>
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2'>Description</label>

          <textarea type='text' name='name' placeholder='Description' className='w-1/3 resize rounded-md bg-slate-400' />
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2'>Images</label>

          <input type='file' name='upload' placeholder='Upload' accep='image/*' />
        </div>
        <div className='flex flex-col pb-4'>
          <label className='pb-2'>Choose a Catagory</label>

          <select id='catagory' name='catagory' className='w-1/6'>
            <option value='cloth'>Cloth</option>
            <option value='cloth'>Games</option>
          </select>
        </div>

        <div className='flex flex-col pb-4'>
          <label className='pb-2'>Choose a Brand</label>

          <select id='catagory' name='catagory' className='w-1/6'>
            <option value='LG'>LG</option>
            <option value='SONY'>SONY</option>
          </select>
        </div>
      </form>
      <Link href={'/'}>
      <button className='rounded bg-amber-400 py-2 px-4 font-bold' onClick={handleClick}> Add</button>
      </Link>
    </div>
  );
};

export default AddProduct;
