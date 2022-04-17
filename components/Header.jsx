import React from 'react';
import Link from 'next/link';

import { FaSearch, FaShoppingCart, FaBars, FaCircle } from 'react-icons/fa';
import useStore from '../store/useStore';
import styles from '../styles/Header.module.css';

const Header = () => {
  const cartQuantity = useStore((state) => state.cartQuantity);

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <FaCircle className={styles.circle} />
          <span>N Point</span>
        </a>
      </Link>

      <form action='' className={styles.search_form}>
        <label htmlFor='search-box'>
          <FaSearch />
        </label>
        <input type='text' placeholder='search here' id='search-box' />
        <label htmlFor='search-box'>
          <input type='submit' value='search' className={styles.btn} />
        </label>
      </form>
      <nav className={styles.nav}>
        <a href='#'>Sign In</a>
        <a href='#'>Sign Up</a>
      </nav>
      <div className={styles.sign_dev}>
        <a href='#' className={styles.sign}>
          Sign In
        </a>
        <a href='#' className={styles.sign}>
          Sign Up
        </a>
      </div>
      <div className={styles.icons}>
        <div id={styles.menu_btn}>
          <FaBars />
        </div>
        <div id={styles.cart_btn}>
<<<<<<< HEAD
          <FaShoppingCart />
          <span>{cartQuantity}</span>
=======
          <Link href='/shopping_cart'>
            <a>
              <FaShoppingCart />
            </a>
          </Link>
>>>>>>> createCart
        </div>
      </div>
    </header>
  );
};
export default Header;
