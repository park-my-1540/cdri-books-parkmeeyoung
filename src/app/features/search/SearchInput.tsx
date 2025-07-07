import { useRef } from "react";
import { isEmpty } from "@/util/util";
import SearchHistoryDropdown from "./RecentResult";
import { useSearchHistory } from "@/hooks/useSearchHistory";

export default function SearchInput() {
  const {
    word,
    history,
    matchList,
    isOpen,
    setIsOpen,
    filter,
    remove,
    setWord,
  } = useSearchHistory(["노르웨이 숲", "무라카미 하루키"]);

  const inputRef = useRef<HTMLInputElement>(null);
  const listToShow = isEmpty(matchList) && isEmpty(word) ? history : matchList;
  const isListOpen = isOpen && listToShow.length > 0;

  return (
    <div className='w-full '>
      <div className='flex flex-row items-center gap-2 px-1 bg-lightGray rounded-full w-full cursor-text'>
        <input
          ref={inputRef}
          type='text'
          name='search'
          placeholder='검색어를 입력하세요'
          autoComplete='off'
          className='bg-lightGray w-full h-[50px] placeholder:text-textSubtitle'
          onChange={(e) => {
            setWord(e.currentTarget.value);
            filter(e.currentTarget.value);
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isListOpen ? (
        <SearchHistoryDropdown list={listToShow} onRemove={remove} />
      ) : null}
    </div>
  );
}
