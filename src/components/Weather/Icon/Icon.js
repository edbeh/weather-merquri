import React from "react";
import propTypes from "prop-types";
import Loader from "react-loader-spinner";

const Icon = ({ icon }) => {
  if (!icon)
    return (
      <div style={{ paddingLeft: "20px" }}>
        <Loader type="Puff" color="#000" height={100} width={50} />
      </div>
    );

  return <img src={icon} alt="weather-icon" />;
};

Icon.propTypes = {
  icon: propTypes.node,
};

export default Icon;
