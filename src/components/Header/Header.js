import React, { useContext } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../context/ThemeContext";

import "./header.css";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext);

  return <h2 className={`header ${theme === "dark" && "dark"}`}>{text}</h2>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
