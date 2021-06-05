import React from "react";
import PropTypes from "prop-types";

import "./errorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
