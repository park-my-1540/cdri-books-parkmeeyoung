import React from "react";
import Button from "@components/ui/Button";
import SelectBox from "@components/common/SelectBox";
import { useEffect, useState } from "react";
import { TargetParams } from "@/features/book/type";
import { useSearchSubmit } from "@search/hooks/useSearchSubmit";
import { useSearchInput } from "../hooks/useSearchInput";

const filterOptions = [
  { id: "title", name: "제목" },
  { id: "author", name: "저자" },
  { id: "publisher", name: "출판사" },
];

function DetailSearchFilter({ onClose }: { onClose: () => void }) {
  const [selectedFilter, setSelectedFilter] = useState<TargetParams>("title");
  const [keyword, setKeyword] = useState("");
  const { submit } = useSearchSubmit();
  const { setWord } = useSearchInput();

  useEffect(() => {
    setWord("");
  }, []);

  const onSubmit = () => {
    submit(keyword, selectedFilter);
    onClose();
  };

  return (
    <>
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
          type='text'
          name='search'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          autoComplete='off'
          className='border-b border-primary w-full pl-2'
          placeholder='검색어 입력'
        />
      </div>
      <Button size='sm' fullWidth onClick={() => onSubmit()}>
        검색하기
      </Button>
    </>
  );
}

export default React.memo(DetailSearchFilter);
