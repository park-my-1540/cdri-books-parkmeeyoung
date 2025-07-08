import Image from "next/image";
import LikeButton from "@/components/common/LikeButton";

type BookThumbnailProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  size?: "sm" | "lg";
};

export default function BookThumbnail({
  src,
  alt,
  width = 48,
  height = 68,
  size = "sm",
}: BookThumbnailProps) {
  const fallback =
    "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http://search1.daumcdn.net/search/statics/common/img/noimg/4grid.png";

  return (
    <div className='relative' style={{ maxWidth: width, maxHeight: height }}>
      <Image
        width={width}
        height={height}
        alt={alt}
        className='size-full object-cover'
        src={src === "" ? fallback : src}
      />
      <LikeButton size={size} />
    </div>
  );
}
