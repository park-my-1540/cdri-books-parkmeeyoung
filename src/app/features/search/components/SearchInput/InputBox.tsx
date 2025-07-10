import React from "react";
import { isEmpty } from "@/util/util";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";
import { useSearchOpen } from "@search/hooks/useSearchOpen";

export default function InputBox() {
  const { word, submit, updateWord } = useSearchSubmit();
  const { setIsOpen } = useSearchOpen();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    updateWord(e.currentTarget.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isEmpty(word)) submit(word);
  };

  return (
    <div className='flex flex-row items-center gap-2 px-1 bg-lightGray rounded-full w-full cursor-text'>
      <input
        value={word}
        type='text'
        name='search'
        placeholder='검색어를 입력하세요'
        autoComplete='off'
        className='bg-transparent w-full h-[50px] placeholder:text-textSubtitle pl-2'
        onChange={onChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={onEnter}
      />
    </div>
  );
}
