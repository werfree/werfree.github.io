import React from "react";
import { IconType } from "react-icons";

function GrayButton({
  title,
  Icon,
  action = () => {},
}: {
  title: string;
  Icon: IconType;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="flex flex-1 space-x-2 rounded-xl button-gray text-color-grey-90 p-2  items-center font-sans section-button"
      onClick={() => action}
    >
      <Icon className="flex ml-auto text-black" size={18} />
      <div className="mr-auto text-black">{title}</div>
    </button>
  );
}

export default GrayButton;
