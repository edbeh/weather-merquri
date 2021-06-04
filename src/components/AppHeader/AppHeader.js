import React, { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import ThemeContext from "../../context/ThemeContext";

import "./appHeader.css";

const AppHeader = ({ handleThemeChange }) => {
  const theme = useContext(ThemeContext);

  console.log("get theme", theme);
  return (
    <div className={`app-header ${theme === "dark" && "dark"}`}>
      <h2>Today's Weather</h2>
      <DarkModeToggle
        className="toggle"
        onChange={handleThemeChange}
        checked={theme === "dark"}
        size={40}
      />
    </div>
  );
};

export default AppHeader;
