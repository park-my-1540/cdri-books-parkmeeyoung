import { Caption } from "@/components/ui/Typography";
import { X } from "lucide-react";

type Props = {
  list: string[];
  onRemove: (keyword: string) => void;
};

export default function SearchHistoryDropdown({ list, onRemove }: Props) {
  return (
    <div className='absolute bg-lightGray top-[50px] rounded-b-3xl left-0 w-full py-5 pr-5 pl-[60px] space-y-2 dropdown-container'>
      {list.map((keyword) => (
        <div key={keyword} className='flex items-center justify-between'>
          <a onClick={() => console.log("")}>
            <Caption>{keyword}</Caption>
          </a>
          <button onClick={() => onRemove(keyword)} className='p-1'>
            <X className='w-5 h-5 text-black' />
          </button>
        </div>
      ))}
    </div>
  );
}
