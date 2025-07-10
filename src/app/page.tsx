"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/search/components/SearchBarContainer";
import BookListPanel from "@book/components/BookListPanel";
import { useFetchBookQuery } from "@book/queries/useFetchBookQuery";

export default function Home() {
  const { data: books = [], isFetching } = useFetchBookQuery();
  return (
    <div className='pt-10'>
      <Title2>도서 검색</Title2>
      <BookSearch />
      <BookListPanel
        subtitle='도서 검색 결과'
        books={books}
        isFetching={isFetching}
      />
    </div>
  );
}
