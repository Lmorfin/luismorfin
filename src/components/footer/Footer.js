import React from "react";

import "../../styles/footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <hr className="divider" />
      <a href="#" className="footer__logo">
        Developed by Luis Morfin
      </a>

      <div className="socials">
        <a
          className="social"
          href="https://www.linkedin.com/in/luis-morfin-/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a className="social" href="https://github.com/Lmorfin" target="_blank">
          <BsGithub />
        </a>
        <a
          className="social"
          href="mailto:luismorfin64@gmail.com"
          target="_blank"
        >
          <AiOutlineMail />
        </a>
      </div>

      {/* <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul> */}
      <hr className="divider" />
    </footer>
  );
};
