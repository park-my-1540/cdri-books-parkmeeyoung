"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/book/search/components/BookSearch";
import BookListPanel from "./features/book/components/BookListPanel";

export default function Home() {
  return (
    <div className='pt-10'>
      <Title2>도서 검색</Title2>
      <BookSearch />
      <BookListPanel subtitle='도서 검색 결과' />
    </div>
  );
}
