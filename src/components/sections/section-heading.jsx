/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import PropTypes from 'prop-types';

function SectionHeading({ heading }) {
  return (
    <div className="flex flex-row text-xl mb-10">
      <div className="section-number">{heading?.number}. &nbsp;</div>
      <div className="section-heading">{heading?.text}</div>
      <div className="m-auto md:ml-8 w-auto">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
  );
}

SectionHeading.propTypes = {
  heading: PropTypes.shape({
    number: PropTypes.string,
    text: PropTypes.string,
  }),
};
SectionHeading.defaultProps = {
  heading: {},
};

export default SectionHeading;
