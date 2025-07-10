import { Caption } from "@/components/ui/Typography";
import { X } from "lucide-react";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";

type Props = {
  list: string[];
  onRemove: (keyword: string) => void;
};

export default function SearchHistoryDropdown({ list, onRemove }: Props) {
  const { submit } = useSearchSubmit();

  const handleClick = (keyword: string) => () => submit(keyword);
  const handleRemove = (keyword: string) => () => onRemove(keyword);

  return (
    <div className='absolute top-[50px] rounded-b-3xl left-0 w-full py-5 pr-5 pl-[60px] space-y-2 dropdown-container bg-lightGray '>
      {list.map((keyword) => (
        <div key={keyword} className='flex items-center justify-between'>
          <a onClick={handleClick(keyword)} className='cursor-pointer'>
            <Caption>{keyword}</Caption>
          </a>
          <button onClick={handleRemove(keyword)} className='p-1'>
            <X className='w-5 h-5 text-black' />
          </button>
        </div>
      ))}
    </div>
  );
}
