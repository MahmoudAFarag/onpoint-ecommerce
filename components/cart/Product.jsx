import React from 'react';
import useCartStore from '../../store/CartStore';

const Product = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt='item image' />
    </div>
  );
};

export default Product;
