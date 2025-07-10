import { isEmpty } from "@/util/util";
import SearchHistoryDropdown from "@/features/search/components/SearchHistoryList";
import { useEffect, useRef } from "react";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";
import { useMatchHistory } from "../hooks/useMatchHistory";
import { useSearchHistory } from "../hooks/useSearchHistory";

export default function SearchInput({ open }: { open: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, word, submit, setIsOpen, updateWord } = useSearchSubmit();
  const { matchList } = useMatchHistory(word);
  const { removeToHistory, history } = useSearchHistory();

  const listToShow = isEmpty(matchList) && isEmpty(word) ? history : matchList;
  const isListOpen = isOpen && listToShow?.length > 0;

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isEmpty(word)) submit(word);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    updateWord(e.currentTarget.value);
  };

  useEffect(() => {
    if (open) updateWord("");
  }, [open]);

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
    <div className='w-full' ref={ref}>
      <div className='flex flex-row items-center gap-2 px-1 bg-lightGray rounded-full w-full cursor-text'>
        <input
          value={word}
          type='text'
          name='search'
          placeholder='검색어를 입력하세요'
          autoComplete='off'
          className='bg-lightGray w-full h-[50px] placeholder:text-textSubtitle pl-2'
          onChange={onChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={onEnter}
        />
      </div>
      {isListOpen ? (
        <div>
          <SearchHistoryDropdown list={listToShow} onRemove={removeToHistory} />
        </div>
      ) : null}
    </div>
  );
}
