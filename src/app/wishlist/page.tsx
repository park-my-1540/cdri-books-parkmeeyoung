"use client";

import BookListPanel from "@book/components/BookListPanel";
import { useWishListStore } from "@book/stores/useWishListStore";
import { Title2 } from "@components/ui/Typography";
export default function Page() {
  const { wishlist: books = [] } = useWishListStore();
  return (
    <div className='pt-10'>
      <Title2>내가 찜한 책</Title2>
      <BookListPanel subtitle='찜한책' books={books} />
    </div>
  );
}
