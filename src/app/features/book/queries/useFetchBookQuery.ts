import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../services/fetchBooks";
import { useBookParams } from "@book/hooks/useBookParam";

export const useFetchBookQuery = () => {
  const { query, page, size, target } = useBookParams();
  const params = {
    query,
    page,
    size,
    target,
  };
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => fetchBooks(params),
    select: (res) => res.documents,
    enabled: !!query,
  });
};
