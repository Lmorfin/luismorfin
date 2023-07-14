import React from "react";
import img from "../assets/about-me.png";
import "../styles/about.css";
import { BiSolidMap } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiDiamondLight } from "react-icons/pi";

const About = () => {
  return (
    <>
      <h1>{"< About Me / >"}</h1> <div className="divider"></div>
      <div className="about-container">
        <div className="about-img">
          <img src={img} alt="about-me-avatar" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaUserGraduate className="about-icon" />
              <h5>Education</h5>
              <small>
                Computer Science B.S., California State University East Bay
              </small>
            </div>
            <div className="about-card">
              <BiSolidMap className="about-icon" />
              <h5>Located In</h5>
              <small>San Jose, CA</small>
            </div>
            <div className="about-card">
              <HiOutlineDesktopComputer className="about-icon" />
              <h5>Interested In</h5>
              <small>Full Stack Development</small>
            </div>
          </div>
          <p className="about-text">
            I am a passionate and driven Software Engineer with a year of
            valuable industry experience. As a first-generation college
            graduate, I proudly earned my undergraduate degree in Computer
            Science from Cal State East Bay. Throughout my journey, I have honed
            my skills in Full stack development, gaining valuable expertise in
            the dynamic e-commerce sector. My experience in building web
            applications has further solidified my skills and understanding of
            robust and scalable web applications. <br></br> <br></br> As I
            embark on my professional journey, I am actively seeking new
            opportunities that will allow me to apply my skills, contribute to
            meaningful projects, and further elevate my career to new heights. I
            am enthusiastic about joining a team of like-minded individuals who
            share the same drive for innovation and are dedicated to creating
            impactful software solutions.
          </p>
        </div>
      </div>
      <h1> Tech I have worked with:</h1>
      <div className="tech-stack">
        <ul className="frontend-stack">
          <li className="tech-text">Frontend:</li>
          <li className="tech-text">
            <PiDiamondLight /> React.js
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Vue.js
          </li>
          <li className="tech-text">
            <PiDiamondLight /> HTML
          </li>
          <li className="tech-text">
            <PiDiamondLight /> CSS
          </li>
        </ul>
        <ul className="backend-stack">
          <li className="tech-text">Backend:</li>
          <li className="tech-text">
            <PiDiamondLight /> Node.js
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Express.js
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Ruby on Rails
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Sanity CMS
          </li>
        </ul>
        <ul className="Database-stack">
          <li className="tech-text">Database:</li>
          <li className="tech-text">
            <PiDiamondLight /> MySQL
          </li>
          <li className="tech-text">
            <PiDiamondLight /> MongoDB
          </li>
        </ul>
        <ul className="other-stack">
          <li className="tech-text">Other Tools & Languages:</li>
          <li className="tech-text">
            <PiDiamondLight /> Ruby
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Python
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Postman
          </li>
          <li className="tech-text">
            <PiDiamondLight /> Git
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
