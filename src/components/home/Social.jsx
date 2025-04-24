import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import "../../App.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/haekalrfny"
        className="home__social-icon"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/haekalrfny"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a href="#" className="home__social-icon" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default Social;
