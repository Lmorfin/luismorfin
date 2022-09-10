import React from "react";
import "../../styles/portfolio.css";
import "../../styles/query/_portfolio-query.css";
import { FadeIn } from "../utils/FadeIn";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <FadeIn>
        <div className="projects-header">
          <h1>
            {"< Projects / >"} <hr className="divider"></hr>
          </h1>
        </div>

        <FadeIn delay={`00ms`}>
          <div className="projects__container">
            <div className="project-card">
              <div className="project-content">
                <div className="links">
                  <a
                    href="https://github.com/Lmorfin/filmlens/tree/main"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a href="https://lmorfin.github.io/filmlens/" target="_blank">
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <div className="desc">
                  <h2>FilmLens</h2>
                  <p>
                    A web app that displays the current list of movies playing
                    in theaters.
                  </p>
                  <p>HTML/CSS, Javascript, React.JS</p>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <div className="links">
                  <a
                    href="https://github.com/Lmorfin/TwitterClone"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                </div>

                <div className="desc">
                  <h2>Twitter Clone</h2>
                  <p>
                    An iOS app that uses the Twitter API to view, compose,
                    favorite, and retweet tweets.
                  </p>
                  <p>Swift, XCode, Back4App</p>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <div className="links">
                  <a
                    href="https://github.com/Reci-Pie-Team/Reci-Pie"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                </div>

                <div className="desc">
                  <h2>Reci-Pie</h2>
                  <p>
                    An iOS app that will make deciding what to cook more
                    efficient. The app will show a list of recipes depending on
                    the ingredients you have searched for.
                  </p>
                  <p>Swift, XCode, Back4App, RESTAPI</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeIn>
    </section>
  );
};
