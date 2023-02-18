import React from 'react';
import { motion } from 'framer-motion';

export default function Heading() {
  return (
    <div className="font-sans md:ml-[10%] lg:mr-[15%] px-4 md:px-6 h-screen flex flex-col justify-center text-left overflow-hidden space-y-4 snap-center">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="text-sm text-color pl-1 pb-2"
      >
        Hi, my name is

      </motion.div>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="font-mono text-4xl md:text-6xl font-extrabold text-[#ececec] text-left pb-2"
      >
        Sayantan Ghosh.
      </motion.div>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="font-mono text-3xl md:text-5xl font-extrabold text-[#8892B0] text-left pb-2"
      >
        I turn ideas to real life products.
      </motion.div>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
        className="mt-10 text-base  text-[#8892B0] lg:mr-[42%]"
      >
        I&apos;m a full-stack developer with expertise in  both front-end and back-end development,
        experienced in developing and deploying web applications from scratch to production.
        Proficient in various technologies and able to build dynamic and scalable systems.
      </motion.div>
    </div>
  );
}
