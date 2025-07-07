import BookCard from "./BookCard";

export default function BookList() {
  return (
    <div className=''>
      <div className='text-textPrimary'>
        도서 검색 결과 총 <span className='text-primary'>21</span>건
      </div>
      {Array.from({ length: 8 }).map((item) => (
        <BookCard key={item} />
      ))}
    </div>
  );
}
