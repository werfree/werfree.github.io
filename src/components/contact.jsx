import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from './sections/customButton';
import SectionHeading from './sections/section-heading';
import Social from './social';

export default function Contact() {
  return (

    <div id="contact" className="font-sans md:ml-[10%] md:mr-[10%] px-2 md:px-6 flex flex-col space-y-3 snap-start mb-40 lg:mb-0 text-center mx-[20%] h-[350px] lg:h-screen justify-center">
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
      >
        <SectionHeading heading={{ number: '04', text: 'Get In Touch' }} />
        <div className="text-center section-text  ">
          <div className="mb-12">
            I am actively seeking new opportunities in fields that align with my skills.
            If you know of any open positions or have any suggestions please get in touch,
            I would be grateful for your help.
          </div>
        </div>

        <div>
          <div className="mb-20">
            <CustomButton text="Say Hi" link="mailto:gsayantan01@gmail.com" />
          </div>
        </div>
      </motion.div>
      <div className="mt-16 mb-0">
        <Social />
      </div>
    </div>

  );
}
