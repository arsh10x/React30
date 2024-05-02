//** TOGGLE SWITCH WITH CHECKBOX
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const Style = {
    p: {
      color: isToggled ? "green" : "red",
      fontSize: "28px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "40px",
      height: "30px",
      backgroundColor: "red",
      borderRadius: "50px",
      position: "relative",
      top: "1px",
      left: "10px",
    },
    span: {
      display: "flex",
      fontSize: "28px",
      fontWeight: "bold",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div>
      <label style={Style.label}>
        <span style={Style.span}>Toggle</span>
        <input style={Style.input} type="checkbox" onChange={handleToggle} />
      </label>
      <p style={Style.p}>{isToggled ? "On" : "Off"}</p>
    </div>
  );
};

export default Toggle;
