import React from "react";
import { IconType } from "react-icons";

function SectionIcon({ Icon }: { Icon: IconType }) {
  return (
    <div className="flex w-[50px] h-[50px] bg-background items-center justify-center rounded-xl border-1 border-gray">
      <Icon className="color-body" size={30} />
    </div>
  );
}

export default SectionIcon;
