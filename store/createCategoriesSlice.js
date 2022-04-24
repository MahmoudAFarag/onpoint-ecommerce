import produce from "immer";

const initalState = {
  loading: true,
  categories: [],
};

const useCreateCategoriesSlice = () => {
  return {
    value: initalState,

    add: (category) =>
      set((state) => {
        const isExist = state.value.categories.findIndex(
          (item) => item.id == category.id
        );

        if (isExist === -1) {
          return {
            value: {
              ...state.value,
              categories: [...state.value.categories, category],
            },
          };
        }
      }),

    update: (category) =>
      set((state) => {
        const isExist = state.value.categories.findIndex(
          (item) => item.id == category.id
        );

        if (isExist !== -1) {
          const newValue = [...state.value.categories];
          newValue[isExist] = category;

          return { value: { ...state.value, categories: newValue } };
        }
      }),

    delete: (category) =>
      set((state) => {
        const isExist = state.value.categories.findIndex(
          (item) => item.id == cart.id
        );

        if (isExist !== -1) {
          const newValue = state.value.categories.filter(
            (item) => item.id != category.id
          );

          return { value: { ...state.value, categories: newValue } };
        }
      }),

    finishLoading: () => {
      set((state) => ({ value: { ...state.value, isLoadding: false } }));
    },
  };
};

export default useCreateCategoriesSlice;
