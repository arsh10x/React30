//** COUNTER APP 
import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "lightblue",
      color: "black",
      padding: "15px",
      borderRadius: "5px",
      border: "none",
      margin: "5px",
      cursor: "pointer",
      fontSize: "18px",
    },
    count: {
      fontSize: "28px",
      fontWeight: "bold",
      margin: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Increment and Decrement</h1>

      <button onClick={increment} style={styles.button}>
        +
      </button>
      <span style={styles.count}>{count}</span>
      <button onClick={decrement} style={styles.button}>
        -
      </button>
    </div>
  );
};

export default Two;
