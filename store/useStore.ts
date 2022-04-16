import create from 'zustand';
import { devtools } from 'zustand/middleware';

import createCartSlice, { CartSlice } from './createCartSlice';
import createProductSlice, { ProductSlice } from './createProductSlice';

export type MyState = ProductSlice & CartSlice;

const useStore = create<MyState>(
  devtools((set, get) => {
    return {
      ...createProductSlice(set, get),
      ...createCartSlice(set, get),
    };
  })
);

export default useStore;
