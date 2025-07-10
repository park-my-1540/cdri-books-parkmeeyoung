import Button from "@components/ui/Button";
import SelectBox from "@components/common/SelectBox";
import { X } from "lucide-react";
import { useState } from "react";
import { TargetParams } from "@/features/book/type";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";

const filterOptions = [
  { id: "title", name: "제목" },
  { id: "author", name: "저자" },
  { id: "publisher", name: "출판사" },
];

export default function DetailSearchFilter({
  onClose,
}: {
  onClose: () => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<TargetParams>("title");
  const [keyword, setKeyword] = useState("");
  const { submit } = useSearchSubmit();

  return (
    <>
      <button className='absolute top-5 right-5' onClick={onClose}>
        <X className='w-6 h-6 text-textSecondary' />
      </button>
      <div className='flex'>
        <div className='min-w-[100px]'>
          <SelectBox
            className='w-full'
            onChange={(value) => setSelectedFilter(value)}
            value={selectedFilter}
            name='options'
            options={filterOptions.map((opt) => ({
              key: opt.id,
              value: opt.id,
              label: opt.name,
            }))}
          />
        </div>
        <input
          type='search'
          name='search'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          autoComplete='off'
          className='border-b border-primary w-full pl-2'
          placeholder='검색어 입력'
        />
      </div>
      <Button
        size='sm'
        fullWidth
        onClick={() => submit(keyword, selectedFilter)}
      >
        검색하기
      </Button>
    </>
  );
}
