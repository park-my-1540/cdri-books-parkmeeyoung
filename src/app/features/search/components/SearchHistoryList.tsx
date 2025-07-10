import React from "react";
import { Caption } from "@/components/ui/Typography";
import { X } from "lucide-react";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";

type Props = {
  list: string[];
  onRemove: (keyword: string) => void;
};

type ItemProps = {
  keyword: string;
  onClick: (keyword: string) => void;
  onRemove: (keyword: string) => void;
};

const KeywordItem = ({ keyword, onClick, onRemove }: ItemProps) => {
  return (
    <div className='flex items-center justify-between w-full'>
      <a onClick={() => onClick(keyword)} className='cursor-pointer w-full'>
        <Caption className='hover:text-textPrimary'>{keyword}</Caption>
      </a>
      <button onClick={() => onRemove(keyword)} className='p-1'>
        <X className='w-5 h-5 text-black' />
      </button>
    </div>
  );
};

function SearchHistoryList({ list, onRemove }: Props) {
  const { submit } = useSearchSubmit();
  const handleClick = (keyword: string) => submit(keyword);
  const handleRemove = (keyword: string) => onRemove(keyword);

  return (
    <div className='absolute top-[50px] rounded-b-3xl left-0 w-full py-5 pr-5 pl-[60px] space-y-2 dropdown-container bg-lightGray '>
      {list.map((keyword, index) => (
        <div key={keyword} className='flex items-center justify-between'>
          <KeywordItem
            key={`${keyword}-${index}`}
            keyword={keyword}
            onClick={handleClick}
            onRemove={handleRemove}
          />
        </div>
      ))}
    </div>
  );
}
export default SearchHistoryList;
