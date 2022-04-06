import styles from '../styles/ProductCard.module.css';
import React from 'react';

const ProductCard = (props) => {
  return (
    <div className={styles.product__card}>
      <div className='image'>
        <img src={props.product.image} alt='Product Image' />
      </div>
      <div className='card-body'>
        <h3>{props.product.name}</h3>
        <p>{props.product.category}</p>
      </div>
      <div className={styles.card__foot}>
        <span className='price'>{`$${props.product.price}`}</span>
        <a href='#' className={styles.product__card__button}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
