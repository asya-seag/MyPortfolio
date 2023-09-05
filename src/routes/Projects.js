import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import project1 from "../images/cfgsoftware.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";


import "./ProjectsStyles.css";

const Projects = () => {
  const projects = [
    {
      title: "Stock tracker APP",
            description:
        "This is a group project, I implemented user database with SQL Alchemy, user Login, Logout, Register functionality using HTML, CSS and Python, Flask session for user session management.",
      image: project1,
      githubLink: "https://github.com/Koko-66/stocks-group-5",
    },
    {
      title: "Gardening App",
            description:
        "I have created this small app as a learning platform for me to implement concepts we have covered during Mobile App development course, I used React Native and practiced connecting to API, structuring navigation, using hooks and Redux.",
      image: project2,
      githubLink: "https://github.com/asya-seag/HomeworkApp",
    },
    {
      title: "Cocktail App",
            description:
        "This is a group project for Mobile App development course, using React Native we created we added to our app Alcohol Units calculator, Login/Register functionality, search page with API connection and used hooks in a variety of page layouts.",
      image: project3,
      githubLink: "https://github.com/asya-seag/GroupProjectApp",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="project-list">
        <h1>Projects</h1>
        <Carousel showArrows={true}>
          {projects.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>
              <img src={project.image} alt={`Project ${index}`} className="projectImage" />              
              <a href={project.githubLink} className="contact-link-p">
                <GitHubIcon className="github-icon-p" />
                Link for the project repository
              </a>
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};



export default Projects;
