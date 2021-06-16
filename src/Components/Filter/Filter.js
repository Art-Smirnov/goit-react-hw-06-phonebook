import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label>
    Find your contacts by name
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
