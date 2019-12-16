import React from 'react';
import propTypes from 'prop-types';
import './input.scss';
import './input-radio.css';
const Input = props => {
  const { label, type, onChange, className, name, value, ...otherProps } = props;
  const classDiv = 'div_' + className;
  return (
    <div class={classDiv}>
      <input className={className} name={name} type={type} onChange={onChange} value={value}{...otherProps}>
      </input>
      <label className='input_label'>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  label: propTypes.string,

};

Input.defaultProps = {
  label: 'SUBMIT'
};

export default Input;
