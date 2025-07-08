import Image from "next/image";
import emptyImage from "@/assets/icon_book.png";

export default function BookNoResult({ message }: { message: string }) {
  return (
    <div className='flex flex-col items-center justify-center pt-28'>
      <Image width={80} height={80} src={emptyImage} alt='noResult' />
      <p className='text-textSecondary pt-5'>{message}</p>
    </div>
  );
}
