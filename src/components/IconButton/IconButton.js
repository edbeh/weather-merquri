import React from "react";

import "./iconButton.css";

const IconButton = ({ icon, handleClick }) => {
  return (
    <button className="icon-button">
      <img src={icon} alt="icon" onClick={handleClick} />
    </button>
  );
};

export default IconButton;
