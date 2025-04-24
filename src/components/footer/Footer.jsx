import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Haekal</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="#" className="footer__social-link" target="_blank">
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/haekalrfny/"
            className="footer__social-link"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://t.me/haekalrfny"
            className="footer__social-link"
            target="_blank"
          >
            <FaTelegramPlane />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
