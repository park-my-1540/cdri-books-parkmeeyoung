"use client";
import { Title2 } from "@components/ui/Typography";
import BookList from "@/features/list/BookList";
export default function SearchPage() {
  return (
    <div className='pt-10 space-y-6'>
      <Title2>내가 찜한 책</Title2>
      <div className='text-textPrimary'>
        찜한책 총 <span className='text-primary'>21</span>건
      </div>
      <BookList />
    </div>
  );
}
