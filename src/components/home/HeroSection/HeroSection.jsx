import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const words = ["Tarun", "Agarwal"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 800); // Pause before deleting
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="hero-section">
      <div className="hero-section__info">
        <h1>
          Hi, I'm <span className="animated-text">{displayedText}</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I build clean, responsive, and user-friendly websites using React.
        </p>
        <div className="hero-buttons">
          <a href="/projects" className="btn">
            View My Work
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
        <div className="hero-social-links">
          <a
            href="https://www.linkedin.com/in/tarunaga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/its-tarun-2505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:its.tarun.2505@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        {/* Resume Link */}
        <a 
          href="/resume.pdf" 
          download="Tarun-Agarwal-Resume.pdf" 
          className="download-btn secondary"
            style={{margin:"1rem 0"}}
        >
          🖹 Download Resume
        </a>

      </div>
      <div className="hero-section__image_container">
        <img src="myPhoto.png" alt="Tarun Agarwal Frontend Developer" />
      </div>
    </div>
  );
};

export default HeroSection;
