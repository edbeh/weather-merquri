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
  error,
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
        style={error && { border: "solid 1px red" }}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

InputField.defaultProps = {
  type: "text",
  className: "",
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
