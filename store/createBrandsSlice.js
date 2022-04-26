import create from "zustand";

const initalState = {
  loading: true,
  brands: [],
};

const useCreateBrandsSlice = create((set) => ({
  value: initalState,

  add: (brand) =>
    set((state) => {
      const isExist = state.value.brands.findIndex(
        (item) => item.id == brand.id
      );

      if (isExist === -1) {
        return {
          value: {
            ...state.value,
            brands: [...state.value.brands, brand],
          },
        };
      }
    }),

  update: (brand) =>
    set((state) => {
      const isExist = state.value.brands.findIndex(
        (item) => item.id == brand.id
      );

      if (isExist !== -1) {
        const newValue = [...state.value.brands];
        newValue[isExist] = brand;

        return { value: { ...state.value, brands: newValue } };
      }
    }),

  delete: (brand) =>
    set((state) => {
      const isExist = state.value.brands.findIndex(
        (item) => item.id == brand.id
      );

      if (isExist !== -1) {
        const newValue = state.value.brands.filter(
          (item) => item.id != brand.id
        );

        return { value: { ...state.value, brands: newValue } };
      }
    }),

  finishLoading: () => {
    set((state) => ({ value: { ...state.value, loading: false } }));
  },
}));

export default useCreateBrandsSlice;
