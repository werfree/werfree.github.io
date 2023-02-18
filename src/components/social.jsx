import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropType from 'prop-types';
import Phone from '../assets/phone.png';

export function CustomSocialIcon({ link, className }) {
  return <div className={className}><SocialIcon style={{ width: '35px' }} className="justify-around " bgColor="transparent" fgColor="#8892B0" url={link} /></div>;
}
export default function Social() {
  return (
    <>
      <div
        className="flex flex-row justify-evenly md:mb-0 md:flex-col md:fixed md:left-[6%] md:bottom-0"
      >
        <div className="justify-center align-middle my-auto">
          <img
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              position: 'relative',
              overflow: 'hidden',
              verticalAlign: 'middle',
            }}
            src={Phone}
            className="md:my-3"
            alt=""
          />
        </div>
        <CustomSocialIcon link="https://github.com/jaketrent" />
        <CustomSocialIcon link="https://www.linkedin.com/in/werfree" />
        <CustomSocialIcon link="https://instagram.com/werfree_" />
        <div className="hidden md:block  md:m-auto md:w-[1px] md:h-[90px]  bg-[#8892B0] " />
      </div>
      <div
        className="flex flex-row justify-evenly mt-10 md:flex-col md:fixed md:right-[.5%] md:bottom-0"
      >
        <div className="hidden md:block ">
          <div className="md:rotate-90 mb-5 text-sm md:mb-[95px] tracking-wide">
            <a href="mailto:gsayantan01@gmail.com" className="text-[#8892B0] ">
              gsayantan01@gmail.com
            </a>
          </div>
          <div className="md:m-auto md:w-[1px] md:h-[90px]  bg-[#8892B0] " />
        </div>
      </div>
    </>
  );
}

CustomSocialIcon.propTypes = {
  link: PropType.string,
  className: PropType.string,
};
CustomSocialIcon.defaultProps = {
  link: '',
  className: '',
};
