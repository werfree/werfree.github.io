import React from 'react';
import PropTypes from 'prop-types';

export default function CustomButton({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-color text-color rounded-lg px-9 py-4 text-base"
    >
      {text}
    </a>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
CustomButton.defaultProps = {
  text: '', link: '',
};
