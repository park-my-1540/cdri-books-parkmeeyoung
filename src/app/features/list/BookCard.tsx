import Image from "next/image";
import Button from "@/components/ui/Button";
import { Title3, Body2, Body2Bold, Small } from "@components/ui/Typography";
import DetailToggleButton from "@/components/ui/ToggleButton";
import { useCallback, useState } from "react";

type BookSummary = {
  id: string;
  title: string;
  author: string;
  price: string;
  imageUrl: string;
};

type BookDetail = BookSummary & {
  originalPrice?: string;
  description: string;
};

type BookCardProps = {
  book: BookSummary | BookDetail;
  onToggle: () => void;
  isExpanded: boolean;
};

export default function BookCard({ book }: { book: BookSummary | BookDetail }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return isExpanded ? (
    <DetailCard book={book} onToggle={onToggle} isExpanded={isExpanded} />
  ) : (
    <SummaryCard book={book} onToggle={onToggle} isExpanded={isExpanded} />
  );
}

function SummaryCard({ book, onToggle, isExpanded }: BookCardProps) {
  return (
    <div className='border-b border-border grid grid-cols-[auto_1fr_240px] gap-[60px] py-2 pl-5 mt-6'>
      <div className='rounded-full'>
        <Image
          width={48}
          height={68}
          alt='image'
          className='size-full object-cover'
          src='https://picsum.photos/200/300'
        />
      </div>
      <div className='grid grid-cols-[1fr_3fr_auto] items-center'>
        <Title3>혼모노</Title3>
        <Body2>성해나</Body2>
        <Title3>13,320원</Title3>
      </div>
      <div className='w-full flex flex-row gap-2 items-center'>
        <Button className='flex-1'>구매하기</Button>
        <DetailToggleButton
          className='flex-1'
          isExpanded={isExpanded}
          onClick={onToggle}
        />
      </div>
    </div>
  );
}

function DetailCard({ book, onToggle, isExpanded }: BookCardProps) {
  return (
    <div className='border-b border-border grid grid-cols-[auto_1fr_240px] gap-8 py-5 pl-5'>
      <div className='rounded-full'>
        <Image
          width={210}
          height={280}
          alt='image'
          className='size-full object-cover'
          src='https://picsum.photos/200/300'
        />
      </div>
      <div className='flex flex-col justify-center gap-5'>
        <div className='flex justify-start items-center gap-2'>
          <Title3>혼모노</Title3>
          <Body2 className='text-textSubtitle'>성해나</Body2>
        </div>
        <div>
          <Body2Bold className='mb-3'>책소개</Body2Bold>
          <Small>
            “나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.” 하루키
            월드의 빛나는 다이아몬드 무라카미 하루키를 만나기 위해 가장 먼저
            읽어야 할 책! 페이지를 처음 펼치는 오늘의 젊음들에게, 그리고 오랜
            기억 속에 책의 한 구절을 간직하고 있는 어제의 젊음들에게, 한결같은
            울림으로 예민하고 섬세한 청춘의 감성을 전하며 영원한 필독서로
            사랑받고 있는 무라카미 하루키의 대표작 『노르웨이의 숲』. 1989년
            『상실의 시대』라는 제명으로 처음 출간된 이래 우리 출판 사상 최장기
            베스트셀러를 기록하며 하나의 사건으로 남은 소설, 『노르웨이의 숲』이
            민음사 세계문학전집에 이어 단행본으로 출간되었다.
          </Small>
        </div>
      </div>
      <div className='flex flex-col items-end justify-between gap-5'>
        <DetailToggleButton
          className='flex-1 w-1/2'
          isExpanded={isExpanded}
          onClick={onToggle}
        />
        <div className='w-full'>
          <div className='flex justify-end items-center gap-3'>
            <Small className='text-textSubtitle'>원가</Small>
            <p className='text-lg text-textPrimary line-through'>16,000원</p>
          </div>
          <div className='flex justify-end items-center gap-3 mb-[30px]'>
            <Small className='text-textSubtitle'>할인가</Small>
            <Title3>216,000원</Title3>
          </div>
          <Button className='flex-1' fullWidth>
            구매하기
          </Button>
        </div>
      </div>
    </div>
  );
}
