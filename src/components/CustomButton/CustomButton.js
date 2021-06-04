import React from "react";

import "./customButton.css";

const CustomButton = ({ text, handleClick, ...props }) => {
  return (
    <button className="custom-button" onClick={handleClick} {...props}>
      {text}
    </button>
  );
};

export default CustomButton;
