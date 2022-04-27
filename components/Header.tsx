import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';
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
    <nav className={`${isOpen && 'mb-24'} rounded border-gray-200 bg-white px-2 py-2.5 shadow sm:px-4 md:mb-5`}>
      <div className='container mx-auto flex h-16 flex-wrap items-center justify-between'>
        <div className='order-1 flex items-center'>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden'
            aria-controls='mobile-menu'
            aria-expanded='false'
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg className='hidden h-6 w-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>

          <Link href='/'>
            <a className='self-center whitespace-nowrap text-lg font-extrabold uppercase tracking-wider first-letter:text-yellow-400 md:text-2xl'>
              OnPoint
            </a>
          </Link>
        </div>

        <div className='order-2 block'>
          <form className='flex w-[40vw] items-center' onSubmit={handleSearchSubmit}>
            <FaSearch className='z-10 mr-[-30px]' fill='grey' />
            <input
              className='w-full appearance-none rounded border bg-gray-100 px-10 py-2 text-xs leading-tight text-gray-700 focus:outline-none md:w-full md:text-base'
              type='search'
              placeholder='Search here...'
              aria-label='Search'
            />
            <button
              className='ml-[-3px] bg-yellow-400 py-[0.35rem] px-1 text-sm md:ml-[-6px] md:py-[0.55rem] md:px-5 md:text-base'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>

        <div className={`order-4 ${isOpen ? 'block' : 'hidden'} w-full md:order-3 md:block md:w-auto`}>
          <ul className='mt-8 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-base md:font-medium'>
            <li>
              <Link
                href={{
                  pathname: currentUser ? `/profile/${currentUser.uid}` : '/login',
                  query: {
                    from: router.asPath,
                  },
                }}
              >
                <a className='block rounded p-4 text-gray-700 md:bg-transparent md:p-0' aria-current='page'>
                  {currentUser ? currentUser.name : 'Sign In'}
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: currentUser ? router.asPath : '/signup',
                  query: {
                    from: router.asPath,
                  },
                }}
              >
                <a
                  className='block border-b border-gray-300 px-4 pb-3 text-gray-700 md:border-0 md:p-0'
                  onClick={
                    currentUser
                      ? () => firebaseSignOut()
                      : () => {
                          return;
                        }
                  }
                >
                  {currentUser ? 'Sign Out' : 'Sign Up'}
                </a>
              </Link>
            </li>
          </ul>
        </div>

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
