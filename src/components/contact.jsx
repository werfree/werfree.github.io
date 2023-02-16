import React from 'react';
import CustomButton from './sections/customButton';
import SectionHeading from './sections/section-heading';
import Social from './social';

export default function Contact() {
  return (
    <div id="contact" className="section-container h-[350px] lg:h-[700px] text-center mx-[20%]">
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
      <div className="mt-16 mb-0">
        <Social />
      </div>
    </div>
  );
}
