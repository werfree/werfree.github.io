import { IconType } from "react-icons";
import "./GrayButton.css";
import { RiExternalLinkLine as LinkIcon } from "react-icons/ri";
function GrayButton({
  title,
  Icon = LinkIcon,
  action = () => {},
}: {
  title: string;
  Icon?: IconType;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="flex flex-1 space-x-2 rounded-xl button-gray 
      text-sm tracking-wider text-color-grey-90 p-2  items-center jus font-sans section-button font-button cursor-pointer"
      onClick={() => action}
    >
      <Icon className="flex ml-auto mb-[3px]" size={15} />
      <div className="mr-auto">{title}</div>
    </button>
  );
}

export default GrayButton;
