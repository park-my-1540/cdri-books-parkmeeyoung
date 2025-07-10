import Image from "next/image";
import emptyImage from "@/assets/icon_book.png";
import Button from "@/components/ui/Button";

export default function Fallback() {
  return (
    <div className='flex flex-col items-center justify-center pt-28'>
      <Image width={80} height={80} src={emptyImage} alt='noResult' />
      <p className='text-textSecondary pt-5'>문제가 발생했습니다.</p>
      <br />
      <Button size='sm' onClick={() => window.location.reload()}>
        새로고침
      </Button>
    </div>
  );
}
