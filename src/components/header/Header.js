import React from "react";
import Typist from "react-typist";
import { FadeIn } from "../utils/FadeIn";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/MorfinLuis_Resume.pdf";
import "react-typist/dist/Typist.css";
import "../../styles/query/_header-query.css";
import "../../styles/header.css";


export const Header = () => {
  return (
    <section id="about">
      <div className="header__container">
        <div className="header-typist">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, ").typeString("I'm Luis.").start();
            }}
          />
        </div>

        <FadeIn>
          <div className="header-text">I like creating stuff.</div>

          <div className="intro-text">
            I am a recent grad who majored in computer science, based in
            California. I have a significant interest in full-stack web
            development.
          </div>

          <FadeIn delay={`00ms`}>
            <div className="btn-wrapper">
              <a href={Resume} target="_blank" className="btn">
                Download Resume
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={`750ms`}>
            <a href="about" className="scroll__down">
              Scroll Down
            </a>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
};
