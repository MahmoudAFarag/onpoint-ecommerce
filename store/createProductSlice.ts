import { GetState, SetState } from 'zustand';
import { ProductDoc } from '../types/Product';
import { MyState } from './useStore';

export interface ProductSlice {
  products: ProductDoc[];
  setProducts: (products: ProductDoc[]) => void;
}

const createProductSlice = (set: SetState<MyState>, _get: SetState<MyState>) => {
  return {
    products: [],
    setProducts: (products: ProductDoc[]) =>
      set({
        products,
      }),
  };
};

export default createProductSlice;
