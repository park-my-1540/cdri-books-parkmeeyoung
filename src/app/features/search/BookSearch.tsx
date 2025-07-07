import Button from "@components/ui/Button";
import { Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import SearchInput from "./SearchInput";
import DetailSearchFilter from "./DetailSearchFilter";

export default function BookSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-row w-full md:w-2/3 justify-between items-center gap-6 flex-1'>
      <div className='relative flex flex-row w-full items-center gap-2 px-7 bg-lightGray rounded-[100px]'>
        <Search />
        <SearchInput />
      </div>
      <div className='flex-shrink-0'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant='ghost' size='sm'>
              상세검색
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='py-10 px-5 space-y-5 w-[360px]'
            sideOffset={15}
          >
            <DetailSearchFilter onClose={() => setOpen(false)} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
