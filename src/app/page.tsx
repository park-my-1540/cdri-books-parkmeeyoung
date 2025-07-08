"use client";
import { Title2 } from "@components/ui/Typography";
import BookSearch from "@/features/search/BookSearch";
import BookList from "@/features/list/BookList";
import NoResult from "./components/common/NoResult";
export default function Home() {
  return (
    <div className='pt-10 space-y-6'>
      <Title2>도서 검색</Title2>
      <BookSearch />
      <div className='text-textPrimary'>
        도서 검색 결과 총 <span className='text-primary'>21</span>건
      </div>
      {/* <BookList /> */}
      <NoResult message='검색된 결과가 없습니다.' />
    </div>
  );
}
