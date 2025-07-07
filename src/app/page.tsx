"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/search/BookSearch";
import BookList from "@/features/list/BookList";
export default function Home() {
  return (
    <div className='pt-10 space-y-6'>
      <Title2>도서 검색</Title2>
      <BookSearch />
      <BookList />
    </div>
  );
}
