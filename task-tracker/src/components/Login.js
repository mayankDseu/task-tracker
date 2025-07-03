import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username.trim());
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-hero">
      <div className="login-left">
        <button
          className="dark-toggle"
          onClick={() =>
            document.body.classList.toggle("dark-mode")
          }
        >
          🌙 Dark
        </button>
        <h1>🚀 Organize your day,<br /> track your focus.</h1>
        <p className="subtitle">Welcome to your personal task tracker.</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Get Started</button>
        </form>
      </div>
      <div className="login-right">
        <img src="/assets/login.jpg" alt="Task preview" />
      </div>
    </div>
  );
};

export default Login;
