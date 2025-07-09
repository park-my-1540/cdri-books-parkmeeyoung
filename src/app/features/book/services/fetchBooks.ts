import axios from "axios";
import { FetchBooksParams, FetchBooksResponse } from "../type";
import { generateId } from "@/util/util";

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
    return {
      ...data,
      documents: data.documents.map((book) => ({
        ...book,
        id: generateId(book),
      })),
    };
  } catch (error) {
    console.log(error);
    // todo
    throw error;
  }
};
