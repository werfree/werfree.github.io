import { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu as HamburgerIcon } from "react-icons/rx";
import { IoClose as CloseIcon } from "react-icons/io5";
import NavLink from "./NavLink";
function Navbar() {
  const [navLink] = useState([
    {
      name: "Home",
      href: "#",
      current: true,
    },
    {
      name: "Profile",
      href: "#profile",
      current: false,
    },
    {
      name: "Experience",
      href: "#experience",
      current: false,
    },
    {
      name: "Skills",
      href: "#skills",
      current: false,
    },
    {
      name: "Awards",
      href: "#awards",
      current: false,
    },
    {
      name: "Contact",
      href: "#contact",
      current: false,
      hiddenInMd: true,
    },
  ]);

  const [openModal, setOpenModal] = useState(true);

  const MenuIcon = openModal ? CloseIcon : HamburgerIcon;
  return (
    <nav className="">
      <div className="px-2 h-xl rounded-xl bg-white flex flex-wrap items-center p-1 shadow-[0_6px_10px_rgba(29,29,38,0.04)]">
        <a href="/" className="flex items-center rtl:space-x-reverse max-w-sm">
          <img
            src="/image-bw-small.png"
            className="h-10 w-10 md:h-12 md:w-12 border-1 border-red rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            alt="Sayantan Ghosh"
          />
        </a>
        <div className="flex flex-grow justify-end md:hidden">
          <button
            onClick={() => setOpenModal(!openModal)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="items-center h-10 w-10 md:h-12 md:w-12 justify-center text-sm text-white rounded-xl md:hidden bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <svg
              className="w-5 h-10 m-auto items-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg> */}
            <MenuIcon
              size={20}
              className="w-5 h-10 m-auto items-center"
              aria-hidden="true"
            />
          </button>
        </div>
        <ul
          className={`hidden md:flex flex-grow flex-row w-full md:w-auto justify-start md:justify-center text-body`}
          id="navbar-default"
        >
          <NavLink openModal={setOpenModal} navItem={navLink} />
        </ul>
        <a
          href="#contact"
          className="flex-row items-end hidden md:flex w-full md:w-auto bg-black p-2 rounded-xl text-white font-bold px-4"
          id="navbar-default"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <img src="pen.svg" className="h-4" />
            <div>Contact Me</div>
          </div>
        </a>
      </div>
      <div
        className={`absolute w-full max-container-width ${
          openModal ? "md:hidden" : "hidden"
        }  mt-2 mr-56 px-2  rounded-xl bg-white flex flex-wrap items-center p-1 shadow-[0_6px_10px_rgba(29,29,38,0.04)]`}
      >
        <ul className={`font-body color-body mt-5`} id="navbar-default">
          <NavLink openModal={setOpenModal} navItem={navLink} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
