import React from "react";
import { MdOutlineMailOutline as EmailIcon } from "react-icons/md";
import { HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import Notify from "../notification/Notify";

function Header() {
  return (
    <div className="flex flex-col max-w-[25rem]">
      <div className="flex justify-center bg-white rounded-xl  mx-auto mb-5 border-1 border-gray">
        <Notify />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-black">
        Sayantan Ghosh
      </h1>
      <p className="text-base/snug md:text-sm/relaxed font header-summary mt-2 color-body font-body">
        Software Engineer specializing in UI Architecture & System Optimization{" "}
      </p>
      <div className="flex flex-col md:flex-row m-5">
        <button className="flex flex-1/2 flex-row rounded-xl bg-black text-white font-sans font-bold p-2 m-2 mx-4  items-center gap-2 justify-center ">
          <EmailIcon className="" size={18} />
          <div className="pt-[2px]">Send Email</div>
        </button>
        <button className="flex flex-1/2 flex-row rounded-xl button-gray text-black  p-2 m-2 mx-4  items-center gap-2 justify-center font-sans">
          <DownloadIcon className="" size={18} />
          <div className="pt-[2px]">Download CV</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
