import { useCallback, useState } from "react";
import type { BookDetail, BookSummary } from "./type";
import DetailCard from "./DetailCard";
import SummaryCard from "./SummaryCard";

export default function BookCard({ book }: { book: BookSummary | BookDetail }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return isExpanded ? (
    <DetailCard
      book={book as BookDetail}
      onToggle={onToggle}
      isExpanded={isExpanded}
    />
  ) : (
    <SummaryCard
      book={book as BookSummary}
      onToggle={onToggle}
      isExpanded={isExpanded}
    />
  );
}
