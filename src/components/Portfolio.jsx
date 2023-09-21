import React from "react";
import {
  AiTwotoneFolderAdd,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";

import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>{"< Portfolio / >"}</h1> <div className="divider"></div>
      <div className="portfolio-container">
        <ul className="projects-grid">
          <div className="card">
            <div className="card-header">
              <div className="card-icon folder">
                <AiTwotoneFolderAdd />
              </div>
              <div className="card-link gh">
                <a
                  href="https://github.com/Lmorfin/instrument-bazaar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://instrument-bazaar.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              </div>
            </div>
            <div className="card-title">Instruments Bazaar</div>
            <div className="card-body">
              This website is an e-commerce platform developed using Next.js and
              React.js, with Sanity serving as the headless CMS backend.
            </div>
            <div className="card-tech">React.js, Next.js, Sanity CMS</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon folder">
                <AiTwotoneFolderAdd />
              </div>
              <div className="card-link gh">
                <a
                  href="https://github.com/Lmorfin/shareable-lists"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://shareable-lists.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              </div>
            </div>
            <div className="card-title">Shareable Lists</div>
            <div className="card-body">
              Developed a real-time list web application which allows users to
              collaborate and edit lists simultaneously Via shareable URL.
            </div>
            <div className="card-tech">React.js, Node.js, SupaBase</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon folder">
                <AiTwotoneFolderAdd />
              </div>
              <div className="card-link gh">
                <a
                  href="https://github.com/Lmorfin/automated-python-scripts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                {/* <a
                  href="https://shareable-lists.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a> */}
              </div>
            </div>
            <div className="card-title">Python Scripts Collection</div>
            <div className="card-body">
              A collection of python scripts to perform my everyday tasks
            </div>
            <div className="card-tech">Python</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
