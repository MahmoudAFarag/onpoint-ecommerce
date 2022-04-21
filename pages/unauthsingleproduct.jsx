import React from 'react';
import styles from '../styles/SingleProduct.module.css';
import Footer from '../components/Footer';
import { withRouter } from 'next/router';
import Link from 'next/link';
import useStore from '../store/useStore';
import AddToCartButton from '../components/cart/AddToCartButton';
import { shimmer, toBase64 } from '../lib/image_placeholder';
import Image from 'next/image';

const Product = ({ router: { query } }) => {
  const addItem = useStore((state) => state.addItem);

  const product = JSON.parse(query.object);


 
   
  const handleAddCart = () => {
    addItem(product);

  };

  return (
    <div>
      <div className={styles.singleproduct}>
        <div className={styles.singleproduct_info}>
          <Image
            src={product.image}
            alt='product image'
            width={250}
            height={250}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
          />
          <div>
            <div>
              <strong className={styles.singleproduct_info_text}>{product.name}</strong>
            </div>
            <div>
              <span className={styles.singleproduct_info_text}>Brand: {product.category}</span>
            </div>
            <span className={styles.singleproduct_info_text}>Price:${product.price}</span>
            <div>
              <br></br>
              <div>
                <strong className={styles.singleproduct_info_text}>About This Item</strong>
              </div>
              <span className={styles.singleproduct_info_text}>{product.description}</span>
            </div>
            <br></br>
            <div className={styles.buttontwo}>
              <Link href={{ pathname: '/unauthcashout' }}>
                <button className={styles.button}> Buy Now</button>
              </Link>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        <div>
          <div>
            <strong className={styles.singleproduct_info_text}>
              <h3>Reviews</h3>
            </strong>
          </div>
          <div>
            <div>
              <strong className={styles.singleproduct_info_text}>Steve R</strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card{' '}
            </span>
          </div>
          <br></br>
          <div>
            <div>
              <strong className={styles.singleproduct_info_text}>Marie J</strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card{' '}
            </span>
          </div>
          <div>
            <label htmlFor=' text' className={styles.singleproduct_info_text}>
              <h4>
                <strong>TELL US WHAT YOU THINK</strong>
              </h4>
            </label>
          </div>

          <div>
            <div>
              <h2>
                You Need To <span className={styles.tex}>Sign In</span> To Tell Us What You Think!{' '}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(Product);
