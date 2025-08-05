import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbars = React.forwardRef((_, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header ref={ref} className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container className="nav-container">
        <a href="/home" className="brand">Tarun Agarwal</a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/home">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact" className="text-nowrap">Contact Me</a>
          <a href="/resume">Resume</a>
          {/* <a href="/dashboard" className="dashboard-btn">Dashboard</a> */}
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </Container>
    </header>
  );
});

export default Navbars;
