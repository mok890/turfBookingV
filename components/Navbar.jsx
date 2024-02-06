import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">Book your turf </a>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-icon">&#9776;</span>
        </button>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
