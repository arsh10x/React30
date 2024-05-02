//** COUNTDOWN TIMER 
import React, { useEffect } from "react";

const Timer = () => {
  const [time, setTime] = React.useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  const Style = {
    timer: {
      backgroundColor: time > 0 ? "green" : "red",
      fontSize: "28px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
  };
  return (
    <div style={Style.timer}>
      {time > 0 ? <h2>Timer Left {time} sec</h2> : <h2>Timer Finished 💣</h2>}
    </div>
  );
};

export default Timer;
