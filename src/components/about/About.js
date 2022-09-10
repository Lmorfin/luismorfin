import React from "react";

import "../../styles/query/_about-query.css";
import "../../styles/about.css";
import luisIMG from "../../assets/download.png";
import { FadeIn } from "../utils/FadeIn";

export const About = () => {
  return (
    <section id="about">
      <FadeIn>
        <div className="about-me">
          <h1>
            {"< About me / >"} <hr className="divider"></hr>
          </h1>
        </div>

        <div className="about__description">
          <div className="about-text">
            <p>
              I am a first-generation college graduate. I'm originally from
              Mexico but grew up in the East Side of San Jose, CA. I attended
              Mission College and transferred to Cal State East Bay where I
              completed my undergrad. My passion is Web Development and I am
              looking for opportunities to grow and apply my skills in the
              industry.
            </p>

            <div className="skills-wrapper">
              {"Technologies I have been working with:"}
              <FadeIn delay={`00ms`}>
                <ul className="tech-stack">
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>HTML/CSS</li>
                  <li>Java</li>
                  <li>ChakraUI</li>
                </ul>

                <p>
                  Outside of work, I like to play instruments my favorite being
                  the drums. I also play video games and enjoy weight lifting.
                </p>
              </FadeIn>
            </div>
          </div>

          <img className="about__me-image" alt="luis" src={luisIMG}></img>
        </div>
      </FadeIn>
    </section>
  );
};
