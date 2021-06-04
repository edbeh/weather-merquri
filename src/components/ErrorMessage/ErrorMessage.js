import React from "react";

import "./errorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
