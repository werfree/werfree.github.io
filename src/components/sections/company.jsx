import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string, bool, func } from 'prop-types';

export default function Company({ name, isActive, setActiveCompany }) {
  return (
  // eslint-disable-next-line max-len
  //  eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`col-span-1 text-lg font-sans font-extrabold shadow-sm  text-center md:text-left border-b md:border-l md:border-b-[#292929]  ${isActive ? 'border-color' : 'border-[#8892B0]'} space-x-2`}
    >
      <button type="button" className="md:hover:bg-[#4D4D4D] p-2" onClick={() => setActiveCompany(name)}>
        {/* <span
          className={`text-sm align-text-bottom text-color invisible md:visible
             ${isActive ? 'text-color' : 'section-text'}`}
        >
          &#8594;
        </span> */}
        <span className={`text-sm ${isActive ? 'text-color' : 'section-text'} px-2 md:px-1`}>{name}</span>
      </button>
    </div>
  );
}

Company.propTypes = {
  name: string,
  isActive: bool,
  setActiveCompany: func,
};
Company.defaultProps = {
  name: '',
  isActive: false,
  setActiveCompany: () => {},
};
