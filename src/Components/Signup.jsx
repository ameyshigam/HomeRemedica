import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // ✅ import useNavigate
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();                     // ✅ create navigate instance

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Add actual signup logic (API call, Firebase, etc.)
    console.log("Signing up with:", formData);

    // ✅ Redirect to the Home/Landing page on success
    navigate("/home");
  };

  return (
    <div className="auth-page">
      <nav className="navbar">
        <div className="logo">Home Remedica</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
        </div>
      </nav>

      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cta-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
