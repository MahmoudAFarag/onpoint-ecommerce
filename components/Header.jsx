import React, {useState} from 'react';

import { 
  FaSearch, 
  FaShoppingCart, 
  FaBars, 
  FaCircle } 
from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <header className={styles.header}>
      <Link href= '/'><a className={styles.logo}>
        <FaCircle className={styles.circle} />
        <span>N Point</span>
      </a></Link>

      <form action='' className={styles.search_form}>
        <label htmlFor='search-box'>
          <FaSearch />
        </label>
        <input type='text' placeholder='search here' id='search-box' />
        <label htmlFor='search-box'>
          <input type='submit' value='search' className={styles.btn} />
        </label>
      </form>
      <nav className={ `${isOpen ? "" : "hidden"}` }>
        <Link  href='/signin'><a className={styles.sign}>
          Sign In
        </a></Link>
        <Link href='/signup'><a className={styles.sign}>
          Sign Up
        </a></Link>
      </nav>
      <div className={styles.icons}>
        <div id={styles.menu_btn}
          onClick = {() =>{
          setOpen(!isOpen);
        }}>
          <FaBars />
        </div>
        <Link href='/'><a id={styles.cart_btn}>
          <FaShoppingCart />
        </a></Link>
      </div>
    </header>
  );
};
export default Header;
