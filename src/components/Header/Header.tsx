import { MdOutlineMailOutline as EmailIcon } from "react-icons/md";
import { HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import Notify from "../notification/Notify";

function Header({
  email,
  resume,
  name,
  tagline,
}: {
  email: string;
  resume: string;
  name: string;
  tagline: string;
}) {
  return (
    <div className="flex flex-col max-w-[25rem]">
      <div className="flex justify-center bg-white rounded-xl  mx-auto mb-5 border-1 border-gray">
        <Notify />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-black">{name}</h1>
      <p className="text-base/snug md:text-sm/relaxed font header-summary mt-2 color-body font-body">
        {tagline}
      </p>
      <div className="flex flex-col md:flex-row m-5">
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="flex flex-1/2 flex-row rounded-xl bg-black text-white font-sans font-bold p-2 m-2 mx-4  items-center gap-2 justify-center cursor-pointer"
        >
          <EmailIcon className="" size={18} />
          <div className="pt-[2px]">Send Email</div>
        </a>
        <a
          href={`${resume}`}
          target="_blank"
          className="flex flex-1/2 flex-row rounded-xl button-gray text-black  p-2 m-2 mx-4  items-center gap-2 justify-center font-sans cursor-pointer"
        >
          <DownloadIcon className="" size={18} />
          <div className="pt-[2px]">Download CV</div>
        </a>
      </div>
    </div>
  );
}

export default Header;
