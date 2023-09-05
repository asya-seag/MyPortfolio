import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import project1 from "../images/cfgsoftware.png";


import "./ProjectsStyles.css";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div class="project-list">
        <h1>Projects</h1>
        <h2>Stock tracker APP</h2>
        <a href="https://github.com/Koko-66/stocks-group-5" className="contact-link-p">
            <GitHubIcon className="github-icon-p" />
            Link for the project repository
          </a> 
          <p>Things I implemented: user database with SQL Alchemy, user Login, Logout, Register functionality using HTML, CSS and Python, Flask session for user session management.</p>
          <img src={project1} className="project1Image" />
          <h2>Gardening App</h2>
        <a href="https://github.com/asya-seag/HomeworkApp" className="contact-link-p">
            <GitHubIcon className="github-icon-p" />
            Link for the project repository
          </a> 
          <img src={project2} className="project2Image" />
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
