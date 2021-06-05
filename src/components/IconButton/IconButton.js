import React from "react";
import PropTypes from "prop-types";

import "./iconButton.css";

const IconButton = ({ icon, handleClick }) => {
  return (
    <button className="icon-button">
      <img src={icon} alt="icon" onClick={handleClick} />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IconButton;
