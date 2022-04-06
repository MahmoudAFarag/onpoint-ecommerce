import create from 'zustand';
import createProductSlice, { ProductSlice } from './createProductSlice';

export type MyState = ProductSlice;

const useStore = create<MyState>((set, get) => {
  return {
    ...createProductSlice(set, get),
  };
});

export default useStore;
