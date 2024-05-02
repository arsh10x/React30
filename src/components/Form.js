//** SHOW USER INPUT IN A TEXT BOX AND DISPLAY IT IN A SPAN

import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  const Styles = {
    textBox: {
      width: "50%",
      height: "40px",
      padding: "12px 20px",
      boxSizing: "border-box",
      border: "2px solid #ccc",
      borderRadius: "4px",
      margin: "8px 10px",
      color: "black",
      fontSize: "24px",
    },
    span: {
      color: "red",
      fontSize: "38px",
      display: "block",
      margin: "20px",
    },
  };
  return (
    <div>
      <input
        style={Styles.textBox}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <br />
      <span style={Styles.span}>User Input: {input}</span>
    </div>
  );
};

export default Form;
