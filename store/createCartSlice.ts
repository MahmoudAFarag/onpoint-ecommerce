import { GetState, SetState } from 'zustand';
import produce from 'immer';
import { ProductCart } from '../types/Product';
import { MyState } from './useStore';

export interface CartSlice {
  items: ProductCart[];
  cartTotal: number;
  addItem: (item: ProductCart) => void;
  removeItem: (item: ProductCart) => void;
}

const createCartSlice = (set: SetState<MyState>, _get: GetState<MyState>) => {
  return {
    items: [],
    cartTotal: 0,
    addItem: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemsExists = state.items.findIndex((i) => i.id === item.id);

          if (itemsExists === -1) {
            item.cartQuantity = 1;
            state.items.push(item);
            state.cartTotal += 1;
          } else {
            state.items[itemsExists].cartQuantity
              ? state.items[itemsExists].cartQuantity++
              : (state.items[itemsExists].cartQuantity = 2);
            state.cartTotal += 1;
          }
        })
      ),
    removeItem: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemsExists = state.items.findIndex((i) => i.id === item.id);

          if (itemsExists === -1) {
            return;
          }

          if (state.items[itemsExists]?.cartQuantity === 1) {
            state.items.splice(itemsExists, 1);
            state.cartTotal -= 1;
          }

          if (state.items[itemsExists]?.cartQuantity > 1) {
            state.items[itemsExists].cartQuantity--;
            state.cartTotal -= 1;
          }
        })
      ),
  };
};

export default createCartSlice;
