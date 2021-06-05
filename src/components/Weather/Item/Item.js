import React from "react";
import PropTypes from "prop-types";

import "./item.css";

const Item = ({ title, content }) => {
  return (
    <div className="weather-item">
      <span>{title}</span>
      <span>{content}</span>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Item;
