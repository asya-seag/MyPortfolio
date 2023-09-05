import React from "react";
import Navbar from "../components/Navbar";
import { ReactComponent as LinkedinIcon } from "../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../images/github.svg";

import "./ContactStyles.css";

const handleEmailClick = () => {
  window.location.href = "mailto:asyaseagrave@gmail.com";
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="main-contact">
        <div className="contact-left">
          <h1 className="contact-heading">Get in touch</h1>
        </div>

        <div className="contact-right">
          <button className="get-in-touch-button" onClick={handleEmailClick}>
            E-mail: asyaseagrave@gmail.com
          </button>
          <p className="mobile">Mobile: 07770-672-445</p>

          <a
            href="https://www.linkedin.com/in/asya-seagrave/"
            className="contact-link"
          >
            <LinkedinIcon className="linkedin-icon" />
            My LinkedIn profile
          </a>
          <a href="https://github.com/asya-seag" className="contact-link">
            <GitHubIcon className="github-icon" />
            My GitHub page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
