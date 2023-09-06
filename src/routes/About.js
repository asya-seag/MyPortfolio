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
          <h2>About Me</h2>
          <div className="intro">
            <p>
              Highly motivated and adaptable professional with a Bachelor's
              Honours Degree in Economics and over 12 years of experience working
              as a translator.
            </p>
            <p>
              Currently transitioning into the tech industry with a strong
              interest in building a career in Front-End/Mobile App Development.
            </p>
            <p>
              A self-starter ready to learn new skills and be a part of a dynamic
              team completing challenging projects. Seeking opportunities to
              contribute as a junior developer in a company that values work-life
              balance, provides continuous training, and offers remote work
              options.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, Python, SQL</li>
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
                <strong>Code First Girls - +Masters course in Mobile App Development</strong>
                <p>Studying React and React Native for mobile application development.</p>
              </li>
              <li>
                <strong>Code First Girls - CFGdegree Bootcamp Software</strong>
                <p>Explored APIs, microservices, data structures, and more.</p>
              </li>
              <li>
                <strong>Code First Girls - Data & SQL Course </strong>
                <p>Acquired skills in SQL and data analysis, data visualization with Tableau.</p>
              </li>
              <li>
                <strong>Moscow State Linguistic University - Bachelor (Honours) Degree - Economics </strong>
                <p>Specialized in Accounting, Analysis, and Audit with additional qualification in translation.</p>
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

