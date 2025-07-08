import { useQuery } from "@tanstack/react-query";
import { useBookStore } from "../stores/useBookStore";
import { fetchBooks } from "../services/fetchBooks";

export const useFetchBookQuery = () => {
  const { query, page, size } = useBookStore();
  const params = {
    query,
    page,
    size,
  };
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => fetchBooks(params),
    select: (res) => res.documents,
  });
};
