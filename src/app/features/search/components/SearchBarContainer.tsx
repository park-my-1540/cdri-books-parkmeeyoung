import React, { useCallback } from "react";
import Button from "@components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import SearchDetailFilter from "@/features/search/components/SearchDetailFilter";
import SearchInput from "@/features/search/components/SearchInput";
import { X } from "lucide-react";

export default function BookSearch() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (value: boolean) => setOpen(value);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className='relative flex flex-row w-full md:w-2/3 justify-between items-center gap-6 flex-1 my-6 z-10'>
      <SearchInput />
      <div className='flex-shrink-0'>
        <Popover open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <Button variant='ghost' size='sm'>
              상세검색
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='py-10 px-5 space-y-5 w-[360px]'
            sideOffset={15}
          >
            <CloseButton onClick={handleClose} />
            <SearchDetailFilter onClose={handleClose} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className='absolute top-5 right-5' onClick={onClick}>
      <X className='w-6 h-6 text-textSecondary' />
    </button>
  );
}
