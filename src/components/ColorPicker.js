import React from "react";

const ColorPicker = () => {
  const [color, setColor] = React.useState("black");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const styles = {
    container: {
      margin: "20px",
    },
    heading: {
      fontSize: "20px",
      marginBottom: "10px",
    },
    input: {
      marginBottom: "10px",
    },
    colorBox: {
      width: "100px",
      height: "100px",
      backgroundColor: color,
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ColorPicker</h2>
      <input type="color" onChange={handleColorChange} style={styles.input} />
      <div style={styles.colorBox}></div>
    </div>
  );
};

export default ColorPicker;
