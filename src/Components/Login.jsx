import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";   // ✅ import useNavigate
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();                       // ✅ hook instance

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication logic
    console.log("Logging in with:", formData);

    // After successful login, redirect to home:
    navigate("/home");                                      // ✅ send to Landing page
  };

  return (
    <div className="auth-page">
      <nav className="navbar">
        <div className="logo">Home Remedica</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link signup-btn">Signup</Link>
        </div>
      </nav>

      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cta-btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;
