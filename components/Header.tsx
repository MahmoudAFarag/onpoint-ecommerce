import { useEffect } from 'react';
import Link from 'next/link';

import { FaSearch, FaShoppingCart, FaBars, FaCircle } from 'react-icons/fa';
import useStore from '../store/useStore';
import styles from '../styles/Header.module.css';

import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const cartTotal = useStore((state) => state.cartTotal);
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const firebaseSignOut = useStore((state) => state.firebaseSignOut);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

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
      {currentUser ? (
        <div className={styles.sign_dev}>
          <a href='#' className={styles.sign}>
            {currentUser.displayName}
          </a>

          <button className={styles.sign} onClick={() => firebaseSignOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className={styles.sign_dev}>
          <Link href='/login'>
            <a className={styles.sign}>Sign In</a>
          </Link>
          <a href='#' className={styles.sign}>
            Sign Up
          </a>
        </div>
      )}
      <div className={styles.icons}>
        <div id={styles.menu_btn}>
          <FaBars />
        </div>
        <div id={styles.cart_btn}>
          <Link href='/shopping_cart'>
            <a>
              <FaShoppingCart />
              <span>{cartTotal}</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
