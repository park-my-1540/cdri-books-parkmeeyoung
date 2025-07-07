import { Title2 } from "@components/ui/Typography";
import SearchBox from "@/features/search/BookSearch";
export default function SearchPage() {
  return (
    <div className='pt-36'>
      <Title2>도서검색</Title2>
      <SearchBox />
    </div>
  );
}
