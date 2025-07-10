/**
 * 검색인풋 상태를 전역에서 관리하기 위한 Zustand Store.
 * -`word`: 현재 인풋에 입력된 검색어
 * -`isOpen` : 검색어 리스트 열림 상태 여부
 * -`setWord` : 인풋값 설정함수
 * -`setIsOpen` : 검색어 리스트 열림상태 설정함수
 */
import { create } from "zustand";

type State = {
  word: string;
  isOpen: boolean;
  setWord: (value: string) => void;
  setIsOpen: (value: boolean) => void;
};

export const useSearchInputStore = create<State>((set) => ({
  word: "",
  isOpen: false,
  setWord: (value) => set({ word: value }),
  setIsOpen: (value) => set({ isOpen: value }),
}));
