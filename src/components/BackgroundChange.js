//** CHANGE BACKGROUND COLOR ON CLICK 

import React, { useState } from "react";

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    const newColor = backgroundColor === "green" ? "white" : "green";
    setBackgroundColor(newColor);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "lightgray",
  };

  const boxStyle = {
    backgroundColor: backgroundColor,
    width: "200px",
    height: "200px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    color: backgroundColor === "green" ? "white" : "black",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle} onClick={handleClick}>
        <h2 style={textStyle}>Click Me</h2>
      </div>
    </div>
  );
};

export default BackgroundChange;
