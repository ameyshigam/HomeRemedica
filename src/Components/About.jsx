import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="logo">Home Remedica</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
          <Link to="/signup" className="nav-link signup-btn">Signup</Link>
        </div>
      </nav>

      <section className="about-content">
        <h1>About Us</h1>
        <p>
          Home Remedica is a community-driven platform dedicated to safe,
          research-backed home remedies. Our mission is to help people discover
          natural solutions for everyday wellness, guided by medical insights
          and verified information.
        </p>
      </section>

      <footer className="footer">
        <p>Community Guidelines &copy; 2025 Home Remedica</p>
      </footer>
    </div>
  );
};

export default About;
