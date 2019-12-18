import React from "react";
import propTypes from "prop-types";

import "./button.scss";

const Button = props => {
  const { label, type, onClick, className, ...otherProps } = props;
  const classList = "button " + className;
  return (
    <button className={classList} type={type} onClick={onClick} {...otherProps}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string
};

Button.defaultProps = {
  label: ""
};

export default Button;
