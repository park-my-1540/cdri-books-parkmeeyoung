"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/book/search/components/BookSearch";
import BookListPanel from "@book/components/BookListPanel";
import { useFetchBookQuery } from "@book/queries/useFetchBookQuery";

export default function Home() {
  const { data: books = [], isLoading, isError } = useFetchBookQuery();

  return (
    <div className='pt-10'>
      <Title2>도서 검색</Title2>
      <BookSearch />
      <BookListPanel
        subtitle='도서 검색 결과'
        books={books}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}
