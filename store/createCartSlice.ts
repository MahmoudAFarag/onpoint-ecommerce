import { GetState, SetState } from 'zustand';
import produce from 'immer';
import { ProductCart } from '../types/Product';
import { MyState } from './useStore';

export interface CartSlice {
  items: ProductCart[];
  cartTotal: number;
  addItem: (item: ProductCart) => void;
  removeItem: (item: ProductCart) => void;
  increaseQuantity: (item: ProductCart) => void;
  decreaseQuantity: (item: ProductCart) => void;
}

const createCartSlice = (set: SetState<MyState>, _get: GetState<MyState>) => {
  return {
    items: [],
    cartTotal: 0,
    addItem: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          item.cartQuantity = 1;
          state.items.push(item);
          state.cartTotal += 1;
        })
      ),

    removeItem: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemIndex = state.items.findIndex((i) => i.id === item.id);

          state.cartTotal -= state.items[itemIndex].cartQuantity;
          state.items.splice(itemIndex, 1);
        })
      ),

    increaseQuantity: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemIndex = state.items.findIndex((i) => i.id === item.id);

          if (itemIndex === -1) {
            return;
          }

          state.items[itemIndex].cartQuantity++;
          state.cartTotal += 1;
        })
      ),

    decreaseQuantity: (item: ProductCart) =>
      set(
        produce((state: MyState) => {
          const itemIndex = state.items.findIndex((i) => i.id === item.id);

          if (itemIndex === -1) {
            return;
          }

          if (state.items[itemIndex]?.cartQuantity > 1) {
            state.items[itemIndex].cartQuantity--;
            state.cartTotal -= 1;
          }
        })
      ),
  };
};

export default createCartSlice;
