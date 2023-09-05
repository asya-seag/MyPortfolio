import React from "react";
import { Link } from "react-router-dom";
import "./MyButtonStyles.css";

const MyButton = ({ text, to }) => {
  return (
    <Link to={to} className="arrow-button">
      <span className="text-arrow">{text}</span>
      <span className="arrow">&rarr;</span>
    </Link>
  );
};

export default MyButton;
