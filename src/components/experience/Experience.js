import React from 'react'
import "../../styles/experience.css";
import "../../styles/query/_experience-query.css";
import { FadeIn } from '../utils/FadeIn';

export const Experience = () => {
  return (
    <section id="experience">
      <FadeIn>
        <div className="experience-header">
          <h1>
            {"< Experience / >"} <hr className="divider"></hr>
          </h1>
        </div>

        <div className="work-experience">
          <div className="work-content">
            <div className="position">
              <h3>
                Frontend Developer @ Inkfluencer | San Jose CA June 2022 -
                present
              </h3>
            </div>
            <article className="work__details">
              <FadeIn delay={`00ms`}>
                <ul>
                  <li>
                    Developed code to convert design wireframes into website
                    components.
                  </li>
                  <li>
                    Used the React framework and Chakra UI as the component
                    library.
                  </li>
                  <li>
                    Collaborated with web designers and other developers in an
                    agile team environment using Git version control.
                  </li>
                  <li>
                    <b>Technologies:</b> HTML/CSS, JavaScript, React.js, Git,
                    ChakraUI, Figma
                  </li>
                </ul>
              </FadeIn>
            </article>

            <div className="position">
              <h3>
                Research Assistant and Developer @ Mission College | Santa Clara
                CA July 2020 - Sept 2020
              </h3>
            </div>
            <article className="work__details">
              <h4>Wind Turbine Adventure Game</h4>
              <FadeIn delay={`00ms`}>
                <ul>
                  <li>
                    Developed a first person 3D educational game to teach
                    students about wind power engineering concepts.
                  </li>
                  <li>
                    Implemented C# scripts that handled button pressing and game
                    interactions.
                  </li>
                  <li>
                    <b>Technologies:</b> Unity Game Engine, C#, Microsoft Visual
                    Studio, SketchUp, Blendr
                  </li>
                </ul>
              </FadeIn>

              <h4>VR Game Development Tutorials</h4>
              <FadeIn delay={`00ms`}>
                <ul>
                  <li>
                    Created VR project based tutorial videos that covered
                    collision detection and user interactions.
                  </li>
                  <li>
                    Explained step by step how to create a Crosshair UI used in
                    the popular FPS games.
                  </li>
                  <li>
                    Demonstrated how to create a World Space UI similar to
                    VRChat.
                  </li>
                  <li>
                    <b>Technologies:</b> Unity Game Engine, C#, Microsoft Visual
                    Studio, Adobe Premiere Pro, OBS Studio
                  </li>
                </ul>
              </FadeIn>
            </article>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

