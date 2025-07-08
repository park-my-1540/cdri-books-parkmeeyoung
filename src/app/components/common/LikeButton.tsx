import Image from "next/image";
import unlike from "@/assets/line.png";
import like from "@/assets/fill.png";

type LikeButtonProps = {
  size?: "sm" | "lg";
};

export default function LikeButton({ size = "sm" }: LikeButtonProps) {
  const dimension = size === "lg" ? 24 : 16;
  return (
    <button className='absolute top-0 right-0'>
      <Image width={dimension} height={dimension} src={unlike} alt='noResult' />
    </button>
  );
}
