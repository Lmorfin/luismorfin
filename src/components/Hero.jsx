import React from "react";
import "../styles/hero.css";
import { BsDownload } from "react-icons/bs";
import { FadeIn } from "../utils/FadeIn";
import { AiFillLinkedin, AiFillGithub, AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Resume from "../assets/LuisMorfin_Resume.pdf";

const Hero = () => {
  return (
    <div className="hero-container">
      <FadeIn>
        <div className="frame">
          <div className="center">
            <div className="ball"></div>
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
            <div className="ball4"></div>
            <div className="ball5"></div>
            <div className="ball6"></div>
            <div className="ball7"></div>
            <div className="ball8"></div>
            <div className="point1"></div>
            <div className="point2"></div>
            <div className="point3"></div>
            <div className="point4"></div>
            <div className="point5"></div>
            <div className="point6"></div>
            <div className="point7"></div>
            <div className="point8"></div>
            <div className="point9"></div>
            <div className="point10"></div>
          </div>
        </div>
      </FadeIn>

      <h3 className="hero-name hero-fade-in">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello, ").typeString("I'm Luis.").start();
          }}
        />
      </h3>

      <p className="hero-role hero-fade-in">Software Engineer</p>

      <p className="hero-description hero-fade-in">
        I’m driven by curiosity and a commitment to continuous growth, focused
        on building intuitive and efficient solutions to real-world problems.
      </p>

      <div className="hero-icons hero-fade-in">
        <a
          href="https://github.com/Lmorfin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <span className="icon-gh">
            <AiFillGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/luis-morfin-/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <span className="icon-linkedin">
            <AiFillLinkedin />
          </span>
        </a>
      </div>

      <div className="hero-btn-container hero-fade-in">
        <a
          className="hero-btn"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsDownload />
          Download Resume
        </a>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
