import Image from "next/image";
import emptyImage from "@/assets/icon_book.png";

type Props = {
  message: string;
};

export default function NoResult({ message }: Props) {
  return (
    <div className='flex flex-col items-center justify-center pt-28'>
      <Image width={80} height={80} src={emptyImage} alt='noResult' />
      <p className='text-textSecondary pt-5'>{message}</p>
    </div>
  );
}
