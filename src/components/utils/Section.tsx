import { ReactNode } from "react";

export const SectionBodyHeader = ({ title }: { title: string }) => {
  return <h3 className="flex font-body text-black text-lg">{title}</h3>;
};

export const SectionBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex color-body font-body text-xs/relaxed items-center  text-left">
      {children}
    </div>
  );
};
