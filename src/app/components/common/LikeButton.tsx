import Image from "next/image";
import unlike from "@/assets/line.png";
import like from "@/assets/fill.png";
import { useWishList } from "@/features/book/hooks/useWishlist";
import { BookItem } from "@/features/book/type";
import { cn } from "@/lib/utils";
import React from "react";

type LikeButtonProps = {
  book: BookItem;
  size?: "sm" | "lg";
};

export default function LikeButton({ size = "sm", book }: LikeButtonProps) {
  const { addToWishlist, removeToWishlist, isInWishlist } = useWishList();
  const dimension = size === "lg" ? 24 : 16;
  const liked = isInWishlist(book.id);

  const handleToggle = (book: BookItem) => {
    if (isInWishlist(book.id)) removeToWishlist(book);
    else addToWishlist(book);
  };
  return (
    <button
      className={cn(
        "absolute",
        size === "lg" ? "top-1 right-1" : "top-0 right-0"
      )}
      onClick={() => handleToggle(book)}
    >
      <Image
        width={dimension}
        height={dimension}
        src={liked ? like : unlike}
        alt={liked ? "찜취소" : "찜하기"}
      />
    </button>
  );
}
