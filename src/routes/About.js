import "./AboutStyles.css";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-background">
        <div className="about-content">
          <h2>Who I am and what I do?</h2>
          <p>
            Highly motivated and adaptable professional with a Bachelor's
            Honours Degree in Economics and over 12 years of experience working
            as a translator.{" "}
          </p>
          <p>
            Currently transitioning into the tech industry, I have interest in
            building a career in Front-End/Mobile App Development.
          </p>
          <p>
            {" "}
            A self-starter ready to learn new skills and be a part of a dynamic
            team completing challenging projects. Seeking opportunities to
            contribute as a junior developer in a company that values work-life
            balance, provides continuous training, and offers remote work
            options.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
