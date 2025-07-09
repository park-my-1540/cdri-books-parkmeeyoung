import { isEmpty } from "@/util/util";
import { useSearchHistory } from "@/features/search/hooks/useSearchHistory";
import SearchHistoryDropdown from "@/features/search/components/SearchHistoryDropdown";
import { useSearchStore } from "@search/stores/useSearchStore";
import { useEffect, useRef } from "react";

export default function SearchInput() {
  const ref = useRef<HTMLDivElement>(null);
  const { addToHistory, removeToHistory } = useSearchStore();
  const { word, history, matchList, isOpen, setIsOpen, filter, setWord } =
    useSearchHistory();

  const listToShow = isEmpty(matchList) && isEmpty(word) ? history : matchList;
  const isListOpen = isOpen && listToShow.length > 0;

  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isEmpty(word)) {
      addToHistory(word);
      setWord("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center gap-2 px-1 bg-lightGray rounded-full w-full cursor-text'>
        <input
          type='text'
          name='search'
          placeholder='검색어를 입력하세요'
          autoComplete='off'
          className='bg-lightGray w-full h-[50px] placeholder:text-textSubtitle'
          onChange={(e) => {
            setWord(e.currentTarget.value);
            filter(e.currentTarget.value);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={submit}
        />
      </div>
      {isListOpen ? (
        <div ref={ref}>
          <SearchHistoryDropdown list={listToShow} onRemove={removeToHistory} />
        </div>
      ) : null}
    </div>
  );
}
