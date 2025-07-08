"use client";

import BookListPanel from "@/features/book/components/BookListPanel";
import { Title2 } from "@components/ui/Typography";
export default function SearchPage() {
  return (
    <div className='pt-10'>
      <Title2>내가 찜한 책</Title2>
      <BookListPanel subtitle='찜한책' />
    </div>
  );
}
