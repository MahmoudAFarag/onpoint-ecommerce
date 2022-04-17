import React from 'react';
import styles from '../styles/SingleProduct.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'next/router';
import Link from 'next/link';
<<<<<<< HEAD
import useStore from '../store/useStore';

const Product = ({ router: { query } }) => {
  const addItem = useStore((state) => state.addItem);

  const product = JSON.parse(query.object);

  const handleAddCart = () => {
    addItem(product);
  };

  return (
    <div>
      <Header />

=======
import AddToCartButton from '../components/cart/AddToCartButton';

const Product = ({ router: { query } }) => {
  const product = JSON.parse(query.object);
  return (
    <div>
      <Header />

>>>>>>> createCart
      <div className={styles.singleproduct}>
        <div className={styles.singleproduct_info}>
          <img src={product.image} className={styles.avatar_product} />
          <div>
            <div>
<<<<<<< HEAD
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
=======
              <strong className={styles.singleproduct_info_text}>
                {product.name}
              </strong>
            </div>
            <div>
              <span className={styles.singleproduct_info_text}>
                Brand: {product.category}
              </span>
            </div>
            <span className={styles.singleproduct_info_text}>
              Price:${product.price}
            </span>
            <div>
              <br></br>
              <div>
                <strong className={styles.singleproduct_info_text}>
                  About This Item
                </strong>
              </div>
              <span className={styles.singleproduct_info_text}>
                {product.description}
              </span>
>>>>>>> createCart
            </div>
            <br></br>
            <div className={styles.buttontwo}>
              <Link href={{ pathname: '/unauthcashout' }}>
                <button className={styles.button}> Buy Now</button>
              </Link>
<<<<<<< HEAD
              <button className={styles.button1} onClick={handleAddCart}>
                {' '}
                Add To Cart
              </button>
=======
              {/* <button className={styles.button1} > Add To Cart</button> */}
              <AddToCartButton className={styles.button1} product={product} />
>>>>>>> createCart
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
<<<<<<< HEAD
              <strong className={styles.singleproduct_info_text}>Steve R</strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card{' '}
=======
              <strong className={styles.singleproduct_info_text}>
                Steve R
              </strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards
              are way overpriced! It’s a great card{' '}
>>>>>>> createCart
            </span>
          </div>
          <br></br>
          <div>
            <div>
<<<<<<< HEAD
              <strong className={styles.singleproduct_info_text}>Marie J</strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card{' '}
=======
              <strong className={styles.singleproduct_info_text}>
                Marie J
              </strong>
            </div>
            <span className={styles.singleproduct_info_text}>
              I’ll start with what I dislike, it’s a real shame, but video cards
              are way overpriced! It’s a great card{' '}
>>>>>>> createCart
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
<<<<<<< HEAD
                You Need To <span className={styles.tex}>Sign In</span> To Tell Us What You Think!{' '}
=======
                You Need To <span className={styles.tex}>Sign In</span> To Tell
                Us What You Think!{' '}
>>>>>>> createCart
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
