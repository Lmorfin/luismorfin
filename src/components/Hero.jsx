import React from "react";
import "../styles/hero.css";
import { BsDownload } from "react-icons/bs";
import { FadeIn } from "../utils/FadeIn";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Resume from "../assets/MorfinLuis_Resume.pdf";

const Hero = () => {
  return (
    <div className="hero-container">
      <FadeIn>
        <div class="frame">
          <div class="center">
            <div class="ball"></div>
            <div class="ball1"></div>
            <div class="ball2"></div>
            <div class="ball3"></div>
            <div class="ball4"></div>
            <div class="ball5"></div>
            <div class="ball6"></div>
            <div class="ball7"></div>
            <div class="ball8"></div>
            <div class="point1"></div>
            <div class="point2"></div>
            <div class="point3"></div>
            <div class="point4"></div>
            <div class="point5"></div>
            <div class="point6"></div>
            <div class="point7"></div>
            <div class="point8"></div>
            <div class="point9"></div>
            <div class="point10"></div>
          </div>
        </div>
      </FadeIn>

      <h3 className="hero-name">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello, ").typeString("I'm Luis.").start();
          }}
        />
      </h3>
      <p className="hero-role">Software Engineer</p>
      <div className="hero-icons">
        <a
          href="https://github.com/Lmorfin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-gh">
            <AiFillGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/luis-morfin-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-linkedin">
            <AiFillLinkedin />
          </span>
        </a>
      </div>

      <div className="hero-btn-container">
        <a
          className="hero-btn"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
