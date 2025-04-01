import { IconType } from "react-icons";
import SectionIcon from "./SectionIcon";
import HeadingText from "./HeadingText";

type SectionHeaderProps = {
  title: string;
  Icon: IconType;
};
function SectionHeader({ title, Icon }: SectionHeaderProps) {
  return (
    <div className="flex text-left flex-col bg-white rounded-t-xl border-1 border-gray gap-5 p-5  pb-10">
      <SectionIcon Icon={Icon} />
      <HeadingText text={title} />
    </div>
  );
}

export default SectionHeader;
