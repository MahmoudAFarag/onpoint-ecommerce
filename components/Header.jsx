import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaBars, FaCircle } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <FaCircle className={styles.circle} />
        <Link href='/' passHref>
          <a className={styles.logo}>N Point</a>
        </Link>
      </div>

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
        <Link href='#'>Sign In</Link>
        <Link href='#'>Sign Up</Link>
      </nav>
      <div className={styles.sign_dev}>
        <Link href='#' className={styles.sign}>
          Sign In
        </Link>
        <Link href='#' className={styles.sign}>
          Sign Up
        </Link>
      </div>
      <div className={styles.icons}>
        <div id={styles.menu_btn}>
          <FaBars />
        </div>
        <div id={styles.cart_btn}>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};
export default Header;
