import Button from "@components/ui/Button";
import { Search, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";
import SelectBox from "@/components/common/SelectBox";
export default function SearchBox() {
  const options = [
    {
      id: "title",
      name: "제목",
    },
    {
      id: "author",
      name: "저자",
    },
    {
      id: "publish",
      name: "출판사",
    },
  ];
  return (
    <div className='flex flex-row w-full justify-between items-center gap-6 flex-1'>
      <div className='flex flex-row w-full items-center gap-2 px-7 bg-lightGray rounded-[100px]'>
        <Search />
        <input
          id='search'
          name='search'
          type='search'
          required
          autoFocus
          placeholder='검색어를 입력해주세요.'
          className='bg-lightGray w-full h-[50px] pl-1'
        />
      </div>
      <div className='flex-shrink-0'>
        <Popover>
          <PopoverTrigger>
            <Button variant='ghost' size='sm' className='lex-shrink-0'>
              상세검색
            </Button>
          </PopoverTrigger>
          <PopoverContent className='py-10 px-5 space-y-5'>
            {/* <PopoverAnchor
              className='absolute right-3 top-3 text-textSubtitle'
              aria-label='닫기'
            >
              <X className='w-4 h-4' />
            </PopoverAnchor> */}
            <div className='flex'>
              <SelectBox
                name='options'
                defaultValue='제목'
                options={options.map((topic) => ({
                  key: topic.id,
                  value: topic.name,
                }))}
              />
              <input
                className='border-b border-primary'
                placeholder='검색어 입력'
              ></input>
            </div>
            <Button fullWidth>검색하기</Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
