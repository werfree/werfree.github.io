import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './sections/section-heading';
import Technologies from './sections/technologies';
import MyPic from '../assets/myPic.jpg';

export default function About() {
  return (
    <div id="about" className="section-container">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="my-auto"
      >
        <SectionHeading heading={{ number: '01', text: 'About Me' }} />
        <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-4 md:gap-3 justify-between">
          <div className="section-text md:col-span-3">
            Hello! I am a
            {' '}
            <span className="text-color"> full-stack developer </span>
            {' '}
            with 1.5 years of experience in the field. I am
            passionate about creating beautiful, functional, user-friendly websites and mobile
            applications.
            <br />
            <br />
            Fast-forwarding to today, I’ve had the privilege of working at a
            {' '}
            <span className="text-color">start-up </span>
            {' '}
            and a
            {' '}
            <span className="text-color">
              huge
              corporation
            </span>
            . My main focus these days is building accessible, inclusive products and
            digital experiences at
            <span className="text-color"> Infosys </span>
            for a variety of clients.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
            <ul className="grid grid-flow-row grid-cols-2 gap-2 mt-3">
              <Technologies name="Javascript (ES6+)" />
              <Technologies name="TypeScript" />
              <Technologies name="React" />
              <Technologies name="React Native" />
              <Technologies name="Node Js" />
              <Technologies name="Express" />
              <Technologies name="Mongo DB" />
              <Technologies name="Kafka Js" />
            </ul>
          </div>
          <div className="border-b-2 border-r-2 border-[#53a897] section-text m-auto mt-14 md:col-span-1 grayscale hover:grayscale-0 ">
            <img src={MyPic} className="object-cover h-52 w-52 md:h-72 md:w-72 pr-2 pb-2" alt="My" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
