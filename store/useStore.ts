import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

import createCartSlice, { CartSlice } from './createCartSlice';
import createProductSlice, { ProductSlice } from './createProductSlice';
import createAuthSlice, { IAuthSlice } from './createAuthSlice';

export type MyState = ProductSlice & CartSlice & IAuthSlice;

const useStore = create<MyState>(
  devtools(
    persist<MyState>(
      (set, get) => {
        return {
          ...createProductSlice(set, get),
          ...createCartSlice(set, get),
          ...createAuthSlice(set, get),
        };
      },
      {
        name: 'zustand store',
      }
    ),
    {
      name: 'ecommerce store',
    }
  )
);

export default useStore;
