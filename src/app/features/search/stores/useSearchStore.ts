import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchStore {
  search: string[];
  addToHistory: (keyword: string) => void;
  removeToHistory: (keyword: string) => void;
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      search: [],
      addToHistory: (keyword) =>
        set((state) => {
          if (state.search.find((h) => h === keyword)) return state;
          return { search: [...state.search, keyword] };
        }),
      removeToHistory: (keyword) =>
        set((state) => {
          const update = state.search.filter((h) => h !== keyword);
          return { search: [...update] };
        }),
    }),
    {
      name: "search-storage",
    }
  )
);
