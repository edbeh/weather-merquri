import React from "react";

import "./item.css";

const Item = ({ title, content }) => {
  return (
    <div className="weather-item">
      <span>{title}</span>
      <span>{content}</span>
    </div>
  );
};

export default Item;
