import React from "react";
import {
  AiTwotoneFolderAdd,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";

import "../styles/portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "A.I Workout Generator",
      description:
        "Get your workout plan! This AI-powered tool leverages Gemini's advanced capabilities to create custom routines designed specifically for your body and goals. Enter your details and let the AI do the work.",
      technologies: ["React.js", "Next.js", "Gemini API"],
      liveUrl: "https://ai-workout-generator-gray.vercel.app/",
      githubUrl: null,
    },
    {
      title: "Instruments Bazaar",
      description:
        "This website is an e-commerce platform developed using Next.js and React.js, with Sanity serving as the headless CMS backend.",
      technologies: ["React.js", "Next.js", "Sanity CMS"],
      liveUrl: "https://instrument-bazaar.vercel.app/",
      githubUrl: "https://github.com/Lmorfin/instrument-bazaar",
    },
    {
      title: "Shareable Lists",
      description:
        "Developed a real-time list web application which allows users to collaborate and edit lists simultaneously via shareable URL.",
      technologies: ["React.js", "Node.js", "Supabase"],
      liveUrl: "https://shareable-lists.vercel.app/",
      githubUrl: "https://github.com/Lmorfin/shareable-lists",
    },
    {
      title: "Python Scripts Collection",
      description:
        "A collection of python scripts to perform my everyday tasks and automate various workflows.",
      technologies: ["Python", "Automation", "Scripts"],
      liveUrl: null,
      githubUrl: "https://github.com/Lmorfin/automated-python-scripts",
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="section-title">Featured Projects</h2>
      <div className="divider"></div>

      <div className="portfolio-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card portfolio-fade-in">
              {/* {project.status && (
                <div className="project-status">{project.status}</div>
              )} */}

              <div className="card-header">
                <div className="card-icon">
                  <AiTwotoneFolderAdd />
                </div>
                <div className="card-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <AiFillGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      aria-label={`View ${project.title} live`}
                    >
                      <AiOutlineLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-body">{project.description}</p>

              <div className="card-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
