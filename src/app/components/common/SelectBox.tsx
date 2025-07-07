import { Body2Bold } from "@components/ui/Typography";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type selectProps = {
  name: string;
  placeholder?: string;
  defaultValue: string;
  className?: string;
  options: {
    key: string;
    value: string;
  }[];
};

export default function SelectBox({
  name,
  placeholder = "",
  className = "",
  defaultValue,
  options,
}: selectProps) {
  const [open, setOpen] = useState(false);

  return (
    <Select
      name={name}
      open={open}
      defaultValue={defaultValue}
      onOpenChange={setOpen}
    >
      <SelectTrigger className={`${className} border-b shadow-none`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.key} value={option.value}>
              <Body2Bold>{option.value}</Body2Bold>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
