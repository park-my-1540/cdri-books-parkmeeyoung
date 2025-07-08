export type BookSummary = {
  id: string;
  title: string;
  authors: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  url: string;
};

export type BookDetail = BookSummary & {
  contents: string;
};

export type SummaryCardProps = {
  book: BookSummary;
  onToggle: () => void;
  isExpanded: boolean;
};

export type DetailCardProps = {
  book: BookDetail;
  onToggle: () => void;
  isExpanded: boolean;
};
