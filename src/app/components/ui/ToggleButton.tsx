import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { Caption } from "./Typography";

type Props = {
  isExpanded: boolean;
  className?: string;
  onClick?: () => void;
};

export default function DetailToggleButton({
  isExpanded,
  onClick,
  className,
}: Props) {
  return (
    <Button
      variant='secondary'
      onClick={onClick}
      className={cn("flex justify-center items-center gap-1 w-full", className)}
    >
      <Caption>상세보기</Caption>
      {isExpanded ? (
        <ChevronUp size={22} className='text-uiGray' />
      ) : (
        <ChevronDown size={22} className='text-uiGray' />
      )}
    </Button>
  );
}
