//** Authentication with Login and Register Functionality

import React, { useState } from "react";

const Authentication = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isRegister: false,
    isLoggedIn: false,
    users: JSON.parse(localStorage.getItem("users")) || [],
  });

  const handleAuth = (e) => {
    e.preventDefault();
    const { email, password, isRegister, users } = state;

    if (isRegister) {
      // Login
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setState((prevState) => ({ ...prevState, isLoggedIn: true }));
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      // Register
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      setState((prevState) => ({
        ...prevState,
        users: updatedUsers,
        isLoggedIn: true,
      }));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const handleLogout = () => {
    setState((prevState) => ({
      ...prevState,
      isLoggedIn: false,
      email: "",
      password: "",
    }));
    localStorage.removeItem("user");
  };
  const containerStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const paragraphStyle = {
    marginTop: "10px",
    textAlign: "center",
  };

  const spanStyle = {
    color: "#007bff",
    cursor: "pointer",
  };
  return (
    <div style={containerStyle}>
      {state.isLoggedIn ? (
        <div>
          <h2>Welcome, {state.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{state.isRegister ? "Login" : "Register"}</h2>
          <form style={formStyle}>
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              style={inputStyle}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={state.password}
              style={inputStyle}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            <button onClick={handleAuth} style={buttonStyle}>
              {state.isRegister ? <span>Login</span> : <span>Register</span>}
            </button>
          </form>
          <p style={paragraphStyle}>
            {state.isRegister ? (
              <span style={spanStyle}>Don't have an account? </span>
            ) : (
              <span style={spanStyle}>Already have an account?</span>
            )}
          </p>
          <button
            style={buttonStyle}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                isRegister: !prevState.isRegister,
              }))
            }
          >
            {state.isRegister ? <span>Register</span> : <span>Login</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
