import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaSearch, FaShoppingCart, FaBars, FaCircle } from 'react-icons/fa';
import useStore from '../store/useStore';

import styles from '../styles/Header.module.css';

import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const cartTotal = useStore((state) => state.cartTotal);
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const firebaseSignOut = useStore((state) => state.firebaseSignOut);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          name: user.displayName as string,
          email: user.email as string,
          role: 'user',
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    const searchInput = e.target[0];

    router.push(`/search/${searchInput.value}`);
  };

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <FaCircle className={styles.circle} />
          <span>N Point</span>
        </a>
      </Link>

      <form className={styles.search_form} onSubmit={handleSearchSubmit}>
        <label htmlFor='search-box'>
          <FaSearch />
        </label>
        <input type='text' placeholder='search here' id='search-box' />
        <label htmlFor='search-box'>
          <input type='submit' value='search' className={styles.btn} />
        </label>
      </form>
      {currentUser ? (
        <nav>
          <a href='#' className={styles.sign}>
            {currentUser.name}
          </a>

          <button className={styles.sign} onClick={() => firebaseSignOut()}>
            Sign Out
          </button>
        </nav>
      ) : (
        <nav>
          <Link
            href={{
              pathname: '/login',
              query: {
                from: router.asPath,
              },
            }}
          >
            <a className={styles.sign}>Sign In</a>
          </Link>
          <Link
            href={{
              pathname: '/signup',
              query: {
                from: router.asPath,
              },
            }}
          >
            <a className={styles.sign}>Sign Up</a>
          </Link>
        </nav>
      )}
      <div className={styles.icons}>
        <div
          id={styles.menu_btn}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <FaBars />
        </div>
        <div id={styles.cart_btn}>
          <Link href='/shopping_cart'>
            <a>
              <FaShoppingCart />
            </a>
          </Link>
          <span className={styles.cart_total}>{cartTotal}</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
