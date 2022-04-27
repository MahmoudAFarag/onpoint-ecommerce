import React from 'react';
import addProduct from '../../lib/products'

const AddProduct = () => {

  const [product,setProduct]=useState([])
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
      <button className='rounded bg-amber-400 py-2 px-4 font-bold'> Add</button>
    </div>
  );
};

export default AddProduct;
