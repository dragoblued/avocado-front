import React from 'react';
import propTypes from 'prop-types';

import './input.scss';

const Input = props => {
  const { label, type, onChange, className, name, value, ...otherProps } = props;
  const classList = 'input ' + className;
  return (
  	<label className='input_label'>{label}
    <input className={classList} name={name} type={type} onChange={onChange} value={value}{...otherProps}>
    </input></label>
  );
};

Input.propTypes = {
  label: propTypes.string,

};

Input.defaultProps = {
  label: 'SUBMIT'
};

export default Input;