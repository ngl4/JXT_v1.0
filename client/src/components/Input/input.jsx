import React from "react";
import PropTypes from "prop-types";

function Input({
  className,
  onChange,
  onKeyPress,
  name,
  id,
  type,
  style,
  placeholder,
  value,
  disabled,
  checked,
}) {
  return (
    <input
      className={className}
      onChange={onChange}
      onKeyPress={onKeyPress}
      name={name}
      id={id}
      type={type}
      style={style}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      checked={checked} //only use for checkbox type
    ></input>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  style: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default Input;
