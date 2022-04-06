import React from 'react';

import { FaSearch, FaShoppingCart, FaBars, FaCircle } from "react-icons/fa";
import styles from '../styles/Header.module.css';


const Header = ()=>{
    // const bar = document.querySelector('.nav');
    const showNav = ()=>{
        bar.classList.add('active')
    }
    return(
        <header className={styles.header}>
            <a href="#" className={styles.logo}><FaCircle className={styles.circle}/><span>N Point</span></a>

            <form action="" className={styles.search_form}>
                    <label htmlFor="search-box"><FaSearch/></label>
                    <input type="text" placeholder="search here" id="search-box"/>
                    <label htmlFor="search-box"><input type="submit" value="search" className={styles.btn}/></label>

            </form>
            <nav className={styles.nav}>
                <a href='#'>Sign In</a>
                <a href='#'>Sign Up</a>
            </nav>
            <div className={styles.sign_dev}>
                <a href='#' className={styles.sign}>Sign In</a>
                <a href='#' className={styles.sign}>Sign Up</a>
            </div>
            <div className={styles.icons}>
                <div id={styles.menu_btn}><FaBars/></div>
                <div id={styles.cart_btn}><FaShoppingCart/></div>
            </div>
        </header>
    );
}
export default Header;