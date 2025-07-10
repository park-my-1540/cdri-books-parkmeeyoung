/**
 * 검색어 submit, 검색어 리스트 열림상태를 관리하는 커스텀 훅
 */
import { TargetParams } from "@/features/book/type";
import { useBookParams } from "@/features/book/hooks/useBookParam";
import { useSearchInput } from "@search/hooks/useSearchInput";
import { useSearchHistory } from "./useSearchHistory";

export function useSearchSubmit() {
  const { addToHistory } = useSearchHistory();
  const { setQuery, setTarget } = useBookParams();
  const { setIsOpen, isOpen, setWord, word } = useSearchInput();

  const submit = (word: string, target?: TargetParams) => {
    addToHistory(word);
    setQuery(word);
    setWord(word);
    if (target) setTarget(target);
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
