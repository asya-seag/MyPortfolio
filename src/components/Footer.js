import "./Footer.css";

import React from "react";
import { ReactComponent as LetterIcon } from "../images/letter.svg";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:asyaseagrave@gmail.com";
  };

  return (
    <footer className="footer">
      <button className="get-in-touch" onClick={handleEmailClick}>
        <LetterIcon icon={LetterIcon} className="icon" />
        Get in touch
      </button>
      <p className="footer-text">
        © 2023 Asya Seagrave Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
