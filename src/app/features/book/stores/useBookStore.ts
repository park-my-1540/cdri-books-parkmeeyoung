import { create } from "zustand";

type BookStore = {
  query: string;
  page: number;
  size: number;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
};

export const useBookStore = create<BookStore>((set) => ({
  query: "미움받을 용기",
  page: 1,
  size: 10,
  setQuery: (query) => set({ query }),
  setPage: (page) => set({ page }),
}));
