import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import useStore from '../store/useStore';

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
    <nav className={`${isOpen && 'mb-24'} h-16 rounded border-gray-200 bg-white py-4 shadow md:mb-5 md:h-20 md:p-4.5`}>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        {/* brand name and hamburger menu (mobile) */}
        <div className='order-1 flex items-center'>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='mx-2 inline-flex items-center rounded-lg text-sm text-gray-500 focus:outline-none md:hidden'
            aria-controls='mobile-menu'
            aria-expanded='false'
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className='sr-only'>Open main menu</span>
            <GiHamburgerMenu className='h-5 w-5' />
          </button>

          <Link href='/'>
            <a className='self-center whitespace-nowrap text-lg font-extrabold uppercase tracking-wider first-letter:text-yellow-400 md:text-2xl'>
              OnPoint
            </a>
          </Link>
        </div>

        {/* search input */}
        <div className='order-2 block'>
          <form className='ml-6 flex w-[50vw] items-center md:m-0 md:w-[40vw]' onSubmit={handleSearchSubmit}>
            <FaSearch className='z-10 mr-[-25px] h-3 w-3 md:mr-[-30px] md:h-4 md:w-4' fill='grey' />
            <input
              className='w-full appearance-none rounded border bg-gray-100 px-10 py-1 text-xs leading-tight text-gray-700 focus:outline-none md:w-full md:py-2 md:text-base'
              type='search'
              placeholder='Search here...'
              aria-label='Search'
            />
            <button
              className='ml-[-3px] hidden bg-yellow-400 py-[0.35rem] px-1 text-sm md:ml-[-6px] md:block md:py-[0.55rem] md:px-5 md:text-base'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>

        {/* Auth (sign in/out) */}
        <div className={`order-4 ${isOpen ? 'block' : 'hidden'} w-full md:order-3 md:block md:w-auto`}>
          <ul className='mt-4 flex flex-col md:m-0 md:flex-row md:space-x-8 md:text-base md:font-medium'>
            <li>
              {currentUser ? (
                <Link href={`/profile/${currentUser.uid}`}>
                  <a
                    className='block rounded p-4 text-sm text-gray-700 md:bg-transparent md:p-0 md:text-base'
                    aria-current='page'
                  >
                    {currentUser.name}
                  </a>
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: '/login',
                    query: { from: router.asPath },
                  }}
                >
                  <a
                    className='block rounded p-4 text-sm text-gray-700 md:bg-transparent md:p-0 md:text-base'
                    aria-current='page'
                  >
                    Sign In
                  </a>
                </Link>
              )}
            </li>

            <li>
              {currentUser ? (
                <button
                  className='block border-b border-gray-300 px-4 pb-3 text-sm text-gray-700 md:border-0 md:p-0 md:text-base'
                  onClick={() => firebaseSignOut()}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href={{
                    pathname: '/signup',
                    query: {
                      from: router.asPath,
                    },
                  }}
                >
                  <a className='block border-b border-gray-300 px-4 pb-3 text-sm text-gray-700 md:border-0 md:p-0 md:text-base'>
                    Sign Up
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Shopping cart  */}
        <Link href='/shopping_cart'>
          <a className='relative order-3 mr-4 flex md:order-4'>
            <FaShoppingCart className='w-5 md:h-6 md:w-6' />
            <span className='absolute right-[-8px] top-4 text-sm text-gray-600 md:top-6 md:text-base'>{cartTotal}</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
