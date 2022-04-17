import { GetState, SetState } from 'zustand';
import produce from 'immer';
import { ProductCart } from '../types/Product';
import { MyState } from './useStore';

export interface CartSlice {
  items: ProductCart[];
  cartQuantity: number;
  addItem: (item: ProductCart) => void;
}

const createCartSlice = (set: SetState<MyState>, _get: GetState<MyState>) => {
  return {
    items: [],
    cartQuantity: 0,
    addItem: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemsExists = state.items.findIndex((i) => i.id === item.id);

          if (itemsExists === -1) {
            state.items.push(item);
            state.cartQuantity += 1;
          } else {
            state.items[itemsExists].quantity
              ? state.items[itemsExists].quantity++
              : (state.items[itemsExists].quantity = 2);
            state.cartQuantity += 1;
          }
        })
      ),
  };
};

export default createCartSlice;
