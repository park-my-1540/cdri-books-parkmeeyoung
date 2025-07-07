"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/search/BookSearch";
export default function Home() {
  return (
    <div className='pt-36'>
      <Title2>도서검색</Title2>
      <BookSearch />
    </div>
  );
}
