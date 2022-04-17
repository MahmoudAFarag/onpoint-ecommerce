import create from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addItemToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeAllCartItems: () => set({ cartItems: [] }),
}));

export default useCartStore;