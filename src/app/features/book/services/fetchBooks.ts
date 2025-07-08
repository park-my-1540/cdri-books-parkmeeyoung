import axios from "axios";

export type FetchBooksParams = {
  query: string;
  page?: number;
  size?: number;
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

export const fetchBooks = async (
  params: FetchBooksParams
): Promise<FetchBooksResponse> => {
  try {
    const { data } = await axios.get<FetchBooksResponse>(
      "https://dapi.kakao.com/v3/search/book",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
        params,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    // todo
    throw error;
  }
};
