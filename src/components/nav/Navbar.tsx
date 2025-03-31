import React, { use, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navLink, setNavLink] = useState([
    {
      name: "Home",
      href: "#home",
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
  ]);
  return (
    <nav className="px-2 h-xl">
      <div className="flex flex-wrap items-center p-1">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <img
            src="/image-bw-small.png"
            className="h-10 w-10 md:h-12 md:w-12 border-2 border-red rounded-xl"
            alt="Sayantan Ghosh"
          />
        </a>
        <div className="flex flex-grow justify-end md:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="items-center h-10 w-10 md:h-12 md:w-12 justify-center text-sm text-white rounded-xl md:hidden bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
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
            </svg>
          </button>
        </div>
        <ul
          className="hidden md:flex flex-grow flex-row w-full md:w-auto justify-center text-body"
          id="navbar-default"
        >
          {navLink.map((navItem) => (
            <li className="mx-3 text- px-1 py-2 rounded-xl nav-item">
              <a href={navItem.href} className="color-body" aria-current="page">
                {navItem.name}
              </a>
            </li>
          ))}
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
    </nav>
  );
}

export default Navbar;
