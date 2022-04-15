import React, {useState} from 'react';

import { FaSearch, FaShoppingCart, FaBars, FaCircle } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

// const [isOpen, setOpen] = useState(false);
// const menuToggle = () => {
//   isOpen ? setOpen('') : setOpen(styles.hidden);
// }
// function smallNavBar(){
//   const [active, setActive] = useState('navBar');
//   const menuToggle = () => {
//     active === 'navBar' ? setActive('navBar navActive') : setActive('navBar');
//   } 
// };



const Header = () => {

  const [isOpen, setOpen] = useState(false);
  
  
  return (
    <header className={styles.header}>
      <a href='#' className={styles.logo}>
        <FaCircle className={styles.circle} />
        <span>N Point</span>
      </a>

      <form action='' className={styles.search_form}>
        <label htmlFor='search-box'>
          <FaSearch />
        </label>
        <input type='text' placeholder='search here' id='search-box' />
        <label htmlFor='search-box'>
          <input type='submit' value='search' className={styles.btn} />
        </label>
      </form>

      <nav className={ isOpen ? "" : "hidden" }>
        <a href='#' className={styles.sign}>
          Sign In
        </a>
        <a href='#' className={styles.sign}>
          Sign Up
        </a>
      </nav>
      <div className={styles.icons}>
        <div id={styles.menu_btn} 
          onClick = {() =>{
            setOpen(!isOpen);
          }}>
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
