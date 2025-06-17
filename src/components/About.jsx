import React from "react";
import img from "../assets/about-me.png";
import "../styles/about.css";
import { BiSolidMap } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiDiamondLight } from "react-icons/pi";

const About = () => {
  return (
    <section>
      <h2 className="section-title">About Me</h2>
      <div className="divider"></div>

      <div className="about-container">
        <div className="about-img about-fade-in">
          <img src={img} alt="Luis Morfin - Software Engineer" />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card about-fade-in">
              <FaUserGraduate className="about-icon" />
              <h5>Education</h5>
              <small>
                Computer Science B.S., California State University East Bay
              </small>
            </div>
            <div className="about-card about-fade-in">
              <BiSolidMap className="about-icon" />
              <h5>Located In</h5>
              <small>San Jose, CA</small>
            </div>
            <div className="about-card about-fade-in">
              <HiOutlineDesktopComputer className="about-icon" />
              <h5>Specialized in</h5>
              <small>Full Stack Development</small>
            </div>
          </div>

          <p className="about-text">
            I’m a passionate and driven <strong>Software Engineer</strong> with
            over <strong>2+ years</strong> of industry experience, specializing
            in <strong>Full-stack web development.</strong> I hold a{" "}
            <strong>Bachelor’s degree in Computer Science </strong>from Cal
            State East Bay and am proud to be a{" "}
            <strong>first-generation college graduate.</strong> My career began
            in the e-commerce sector, where I built and maintained robust,
            scalable web platforms using technologies like React.js, Vue.js,
            Node.js, Ruby on Rails, and MySQL.
          </p>

          <p className="about-text">
            I’m currently seeking new opportunities where I can contribute to
            impactful software solutions, collaborate with forward-thinking
            teams, and continue to grow as an engineer. I’m especially excited
            by roles that intersect healthcare, education, or infrastructure,
            and that push the boundaries of technology for good.
          </p>
        </div>
      </div>

      <h2 className="section-title">Technologies I've Worked With</h2>
      <div className="divider"></div>

      <div className="tech-stack">
        <div className="tech-category">
          <h3>Frontend</h3>
          <ul className="tech-list">
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              React.js
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Vue.js
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              HTML5
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              CSS3
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              JavaScript
            </li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Backend</h3>
          <ul className="tech-list">
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Node.js
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Express.js
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Ruby on Rails
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Sanity CMS
            </li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Database</h3>
          <ul className="tech-list">
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              MySQL
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              MongoDB
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              PostgreSQL
            </li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Tools & Languages</h3>
          <ul className="tech-list">
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Ruby
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Python
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Git
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              Postman
            </li>
            <li className="tech-item">
              <PiDiamondLight className="tech-icon" />
              AWS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
