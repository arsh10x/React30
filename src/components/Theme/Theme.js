import React from "react";
import "./theme.css";
import { useTheme } from "./ThemeContex";
const Theme = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  return (
    <div className={`container ${themeClass}`}>
      <p>This component is selected</p>
    </div>
  );
};

export default Theme;
