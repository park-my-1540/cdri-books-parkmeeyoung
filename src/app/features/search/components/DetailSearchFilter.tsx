import Button from "@components/ui/Button";
import SelectBox from "@components/common/SelectBox";
import { X } from "lucide-react";

const filterOptions = [
  { id: "title", name: "제목" },
  { id: "author", name: "저자" },
  { id: "publish", name: "출판사" },
];

type Props = {
  onClose: () => void;
};

export default function DetailSearchFilter({ onClose }: Props) {
  return (
    <>
      <button className='absolute top-5 right-5' onClick={onClose}>
        <X className='w-6 h-6 text-textSecondary' />
      </button>
      <div className='flex'>
        <div className='min-w-[100px]'>
          <SelectBox
            className='w-full'
            name='options'
            defaultValue='제목'
            options={filterOptions.map((opt) => ({
              key: opt.id,
              value: opt.name,
            }))}
          />
        </div>
        <input
          type='search'
          name='search'
          autoComplete='off'
          className='border-b border-primary w-full'
          placeholder='검색어 입력'
        />
      </div>
      <Button size='sm' fullWidth>
        검색하기
      </Button>
    </>
  );
}
