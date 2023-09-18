import "./AboutStyles.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className="about-background">
        <div className="about-content">
          <div className="intro">
            <h3>About Me</h3>
            <p>
              Hello, I'm Asya, a highly motivated and adaptable professional
              holding a Bachelor's Honours Degree in Economics, along with over
              12 years of dedicated experience as a translator.
            </p>

            <p>
              Currently, I'm making a dynamic shift into the tech industry,
              fueled by a deep passion for forging a successful career in
              Front-End and Mobile App Development.
            </p>

            <p>
              I thrive as a self-starter, enthusiastically embracing new
              challenges, and eagerly contributing to dynamic teams tackling
              complex projects. I'm actively seeking opportunities to kick-start
              my journey as a junior developer in a company that values the
              supports continuous learning, and champions remote work options.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, Python</li>
              <li>React Native, React</li>
              <li>API Integration</li>
              <li>Git, GitHub</li>
              <li>SQL, MySQL</li>
              <li>Visual Studio Code, Node.js</li>
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>
                  Code First Girls - +Masters course in Mobile App Development
                </strong>
                <p>
                  Studying React and React Native for mobile application
                  development.
                </p>
              </li>
              <li>
                <strong>Code First Girls - CFGdegree Bootcamp Software</strong>
                <p>Explored APIs, microservices, data structures, and more.</p>
              </li>
              <li>
                <strong>Code First Girls - Data & SQL Course </strong>
                <p>
                  Acquired skills in SQL and data analysis, data visualization
                  with Tableau.
                </p>
              </li>
              <li>
                <strong>
                  Moscow State Linguistic University - Bachelor (Honours) Degree
                  - Economics{" "}
                </strong>
                <p>
                  Specialized in Accounting, Analysis, and Audit with additional
                  qualification in translation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
