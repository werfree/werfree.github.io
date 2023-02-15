import React from 'react';
import { string } from 'prop-types';

export default function Technologies({ name }) {
  return (
    <div className="col-span-1 text-sm font-sans font-bold">
      <span className="align-text-bottom text-color">&#9654;</span>
      <span className=" pl-3">{name}</span>
    </div>
  );
}

Technologies.propTypes = {
  name: string,
};
Technologies.defaultProps = {
  name: '',
};
