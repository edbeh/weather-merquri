import React from "react";
import PropTypes from "prop-types";

import "./customButton.css";

const CustomButton = ({ text, handleClick, ...props }) => {
  return (
    <button className="custom-button" onClick={handleClick} {...props}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  props: PropTypes.array,
};

export default CustomButton;
