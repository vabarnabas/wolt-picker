import { create } from "zustand";

interface CategoryStore {
  selectedCategories: string[];
  selectCategory: (category: string) => void;
}

const useCategoryStore = create<CategoryStore>()((set) => ({
  selectedCategories: [],
  selectCategory: (category) =>
    set((state) => {
      if (state.selectedCategories.includes(category)) {
        return {
          selectedCategories: state.selectedCategories.filter(
            (c) => c !== category
          ),
        };
      }

      return {
        selectedCategories: [...state.selectedCategories, category],
      };
    }),
}));

export default useCategoryStore;
