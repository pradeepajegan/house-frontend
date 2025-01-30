import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login request...");
      const res = await axios.post("https://house-backend-q8qp.onrender.com/api/login", {
        username,
        password,
      });

      console.log("Login response:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Token saved to localStorage:", res.data.token);
      } else {
        console.error("No token received from backend");
        alert("Login failed: No token received.");
        return;
      }

      setIsAuthenticated(true);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;
