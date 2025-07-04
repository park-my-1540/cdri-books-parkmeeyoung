import type { InputHTMLAttributes } from "react";

export default function InputPair({
  label,
  description,
  ...rest
}: {
  label: string;
  description: string;
  textArea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className='space-y-2 flex flex-col'>
      <label htmlFor={rest.id} className='flex flex-col gap-1'>
        {label}
        <small className='text-muted-foreground'>{description}</small>
      </label>
      <input {...rest} />
    </div>
  );
}
