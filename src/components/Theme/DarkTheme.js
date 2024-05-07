import React from "react";
import { useTheme } from "./ThemeContex";

const DarkTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <h2>Dark Theme</h2>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        Dark Mode
      </label>
    </div>
  );
};

export default DarkTheme;
