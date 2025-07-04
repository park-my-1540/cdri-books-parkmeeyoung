import { Title1 } from "@components/ui/Typography";
import Tab from "@/components/common/Tabs";

export default function Header() {
  return (
    <header className='flex justify-between items-start'>
      <Title1 onClick={() => {}}>CERTICOS BOOKS</Title1>
      <Tab />
    </header>
  );
}
