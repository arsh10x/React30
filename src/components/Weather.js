//** Show Weather information based om user's location

import React, { useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = React.useState({});
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=72087fd4409045cfc0c64fe295b81307`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      });
    }
  }, []);
  const styles = {
    weatherContainer: {
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      textAlign: "center",
    },
    heading: {
      color: "#333",
      fontSize: "24px",
      marginBottom: "20px",
    },
    subheading: {
      color: "#555",
      fontSize: "18px",
      marginBottom: "10px",
    },
    paragraph: {
      color: "#777",
      fontSize: "16px",
      marginBottom: "5px",
    },
    loading: {
      color: "#999",
      fontSize: "16px",
    },
  };
  return (
    <div style={styles.weatherContainer}>
      <h2 style={styles.heading}>Weather App</h2>
      {weather ? (
        <div>
          <h3 style={styles.subheading}>Current Weather</h3>
          <p style={styles.paragraph}>
            Temperature: {weather.main && weather.main.temp} °C
          </p>
          <p style={styles.paragraph}>City: {weather.name}</p>
          <p style={styles.paragraph}>
            Condition: {weather.weather && weather.weather[0].description}
          </p>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
