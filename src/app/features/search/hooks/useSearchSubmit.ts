/**
 * 검색어 submit, 검색어 리스트 열림상태를 관리하는 커스텀 훅
 */
import { TargetParams } from "@/features/book/type";
import { useBookParams } from "@/features/book/hooks/useBookParam";
import { useSearchInput } from "@search/hooks/useSearchInput";
import { useSearchHistory } from "./useSearchHistory";
import { useSearchOpen } from "./useSearchOpen";
import { isEmpty } from "@/util/util";

export function useSearchSubmit() {
  const { addToHistory } = useSearchHistory();
  const { setQuery, setTarget } = useBookParams();
  const { setWord, word } = useSearchInput();
  const { setIsOpen, isOpen } = useSearchOpen();

  const submit = (word: string, target?: TargetParams) => {
    if (isEmpty(word)) return;
    addToHistory(word);
    setQuery(word);
    setWord(word);
    if (target) setTarget(target);
    else setTarget("title");
    setIsOpen(false);
  };

  const updateWord = (word: string) => {
    setWord(word);
  };

  return {
    submit,
    setIsOpen,
    updateWord,
    word,
    isOpen,
  };
}
