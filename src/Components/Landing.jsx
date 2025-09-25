import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Home Remedica</div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
          <Link to="/signup" className="nav-link signup-btn">Signup</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Home Remedica</h1>
          <p>Discover handpicked and research-backed home cures by top clinics. Join our community to share, learn, and grow together in health and wellness.</p>
          <Link to="/home" className="cta-btn">Get Started</Link>
        </div>
        <div className="hero-image">
          <img src="/src/assets/rr.png" alt="Home Remedies" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Join our professional community of health enthusiasts, experts, and caregivers.</p>
        <p>Community Guidelines &copy; 2025 Home Remedica</p>
      </footer>
    </div>
  );
};

export default Landing;
