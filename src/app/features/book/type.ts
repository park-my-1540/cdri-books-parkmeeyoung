export type TargetParams = "title" | "person" | "publisher";
export type FetchBooksParams = {
  query: string;
  page?: number;
  size?: number;
  target?: TargetParams;
};

export type BookItem = {
  id: string;
  url: string;
  title: string;
  authors: string[];
  publisher: string;
  thumbnail: string;
  price: number;
  sale_price: number;
  contents: string;
  datetime: Date;
  isbn: string;
  status: string;
  translators: string[];
};

export type FetchBooksResponse = {
  documents: BookItem[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};
