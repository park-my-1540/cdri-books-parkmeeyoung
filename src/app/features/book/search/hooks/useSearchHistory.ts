import { useCallback, useState } from "react";
import { isEmpty } from "@/util/util";

export function useSearchHistory(initialHistory: string[] = []) {
  const [history, setHistory] = useState(initialHistory);
  const [word, setWord] = useState("");
  const [matchList, setMatchList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filter = useCallback(
    (word: string) => {
      const lowerWord = word.toLowerCase();
      const matchedSet = new Set<string>(); // 검색 키워드와 매칭된 검색어 리스트

      // 검색어를 포함하는지
      const matchedWords = history.filter((item) =>
        item.toLowerCase().includes(lowerWord)
      );

      if (matchedWords && !isEmpty(word)) {
        setIsOpen(true);

        matchedWords.forEach((match) => {
          if (match.toLowerCase().startsWith(lowerWord, 0))
            matchedSet.add(match); // 해당키워드로 시작한다면 매칭
          setMatchList([...matchedSet]);
        });
      } else {
        setMatchList([]);
      }
    },
    [history]
  );

  const remove = useCallback(
    (keyword: string) => {
      const updated = history.filter((item) => item !== keyword);
      setHistory(updated);
      filter(word);
    },
    [history, word, filter]
  );

  return {
    word,
    history,
    matchList,
    isOpen,
    setIsOpen,
    filter,
    remove,
    setWord,
  };
}
