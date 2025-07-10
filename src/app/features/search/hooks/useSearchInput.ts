import { useSearchInputStore } from "@search/stores/useSearchInputStore";

export const useSearchInput = () => {
  const word = useSearchInputStore((state) => state.word);
  const isOpen = useSearchInputStore((state) => state.isOpen);
  const setWord = useSearchInputStore((state) => state.setWord);
  const setIsOpen = useSearchInputStore((state) => state.setIsOpen);

  return {
    word,
    isOpen,
    setWord,
    setIsOpen,
  };
};
