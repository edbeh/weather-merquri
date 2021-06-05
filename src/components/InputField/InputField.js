import React from "react";
import PropTypes from "prop-types";

import "./inputField.css";

const InputField = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  children,
  label,
  ...props
}) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        {...props}
      />
    </div>
  );
};

InputField.defaultProps = {
  type: "text",
  className: "",
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  label: PropTypes.string.isRequired,
};

export default InputField;
