/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [viewList, setList] = useState(false);

  const changeViewListState = () => {
    setList(!viewList);
  };

  return (
    <nav className={`${viewList ? 'backdrop-blur-sm' : 'bg-[#292929]'} md:bg-[#292929] shadow-2xl px-2 sm:px-4 py-2 md:py-1  fixed w-full z-20 top-0 left-0`}>

      <div className="flex flex-wrap items-center justify-between mx-auto">
        <motion.span
          initial={{
            y: 10,
            x: -10,
            opacity: 0,
          }}
          animate={{
            y: -2,
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="text-xl font-semibold whitespace-nowrap text-[#53a897]"
        >
          HOWDY!

        </motion.span>
        <motion.button
          initial={{
            y: 10,
            x: -10,
            opacity: 0,
          }}
          animate={{
            y: -2,
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="z-20 inline-flex items-center p-2 ml-3 text-2xl text-[#53a897] rounded-lg md:hidden focus:outline-none hover:ring-2 ring-[#53a897]"
          onClick={changeViewListState}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" /></svg>
        </motion.button>

        <div className={`items-center ${!viewList && 'hidden'} justify-between  w-full md:flex md:flex-row md:w-auto md:order-1`} onClick={changeViewListState}>
          <div className="flex">
            <div className="flex-none" />
            <div className="flex-1">
              <ul className="flex flex-col h-screen justify-center ml-[30%] md:h-fit md:ml-auto p-4 bg-[#292929] shadow-yl md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 ">
                <motion.div
                  initial={{
                    y: 10,
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 5,
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0,
                  }}
                  viewport={{ once: true }}
                >
                  <li className="navList">
                    <div className="navNumber text-[#53a897]">
                      01.
                      {' '}
                      {' '}
                    </div>
                    <div
                      className="navText text-gray-300 hover:text-[#53a897] hover:cursor-pointer"
                      aria-current="page"
                      onClick={() => {
                        document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                      }}
                    >
                      About
                    </div>
                  </li>
                </motion.div>

                <motion.div
                  initial={{
                    y: 10,
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 5,
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <li className="navList">
                    <div className="navNumber text-[#53a897]">
                      02.
                      {' '}
                      {' '}
                    </div>
                    <div
                      className="navText text-gray-300 hover:text-[#53a897] hover:cursor-pointer"
                      aria-current="page"
                      onClick={() => {
                        document.getElementById('experience').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                      }}
                    >
                      Experience
                    </div>
                  </li>
                </motion.div>

                <motion.div
                  initial={{
                    y: 10,
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 5,
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                  }}
                >
                  <li className="navList">
                    <div className="navNumber text-[#53a897]">
                      03.
                      {' '}
                      {' '}
                    </div>
                    <div
                      className="navText text-gray-300 hover:text-[#53a897] hover:cursor-pointer"
                      aria-current="page"
                      onClick={() => {
                        document.getElementById('project').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                      }}
                    >
                      Project
                    </div>
                  </li>
                </motion.div>

                <motion.div
                  initial={{
                    y: 10,
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 5,
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                  }}
                >
                  {' '}
                  <li className="navList">
                    <div className="navNumber text-[#53a897]">
                      04.
                      {' '}
                      {' '}
                    </div>
                    <div
                      className="navText text-gray-300 hover:text-[#53a897] hover:cursor-pointer"
                      aria-current="page"
                      onClick={() => {
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                      }}
                    >
                      Contact
                    </div>
                  </li>

                </motion.div>

                <motion.div
                  initial={{
                    y: 10,
                    x: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: -5,
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6,
                  }}
                >
                  <li className="navList">
                    <div className="navNumber text-[#53a897]">
                      {/* 04. */}
                      {' '}
                      {' '}
                    </div>
                    <a target="_blank" href="https://drive.google.com/file/d/19z6Gdy07eNq_3r6L9d5oXKT0eBonBfM8/view?usp=share_link" className="p-2 px-3 text-center rounded-lg md:bg-transparent  md:text-sm font-sans border border-color text-color mt-2" aria-current="page" rel="noreferrer">Resume</a>
                  </li>
                </motion.div>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
