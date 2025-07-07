import BookCard from "./BookCard";

export default function BookList({}) {
  return (
    <>
      {Array.from({ length: 8 }).map((item) => (
        <BookCard key={item} />
      ))}
    </>
  );
}
