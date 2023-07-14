import React from "react";
import "../styles/footer.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-context">
        <span>Created and Designed</span>
        <span>by Luis Morfin </span>
        <span className="footer-icons">
          <a
            className="footer-linkedin"
            href="https://www.linkedin.com/in/luis-morfin-/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="footer-mail"
            href="mailto:luismorfin64@gmail.com"
            target="_blank"
            style={{ color: "#64ffda" }}
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            className="footer-gh"
            href="https://github.com/Lmorfin"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
