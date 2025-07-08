import { useFetchBookQuery } from "../queries/useFetchBookQuery";
import BookCard from "./BookCard";
import BookNoResult from "./BookNoResult";

export default function BookListSection({ subtitle }: { subtitle: string }) {
  const { data: books, isLoading } = useFetchBookQuery();

  return (
    <>
      <div className='text-textPrimary mb-2'>
        {subtitle} 총 <span className='text-primary'>{books?.length}</span>건
      </div>

      {isLoading ? <div>로딩중입니다...</div> : null}
      {!books?.length ? (
        <BookNoResult message='검색된 결과가 없습니다.' />
      ) : (
        <>
          {books.map((book, index) => (
            <BookCard key={`${index}-${book.title}`} book={book} />
          ))}
        </>
      )}
    </>
  );
}
