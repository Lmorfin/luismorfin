import React from "react";
import "../styles/footer.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/luis-morfin-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="footer-link"
            href="mailto:luismorfin64@gmail.com"
            aria-label="Email Luis"
          >
            <AiOutlineMail />
          </a>
          <a
            className="footer-link"
            href="https://github.com/Lmorfin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <AiFillGithub />
          </a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright footer-fade-in">
          © {currentYear} Luis Morfin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
