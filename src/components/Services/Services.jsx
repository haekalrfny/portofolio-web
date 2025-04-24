import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import { BiCode, BiRightArrowAlt, BiCarousel } from "react-icons/bi";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const modalRef = useRef(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setToggleState(0);
    }
  };

  useEffect(() => {
    if (toggleState !== 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleState]);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {/* Web Development */}
        <div className="services__content">
          <div>
            <BiCode className="services__icon" />
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <BiRightArrowAlt className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content" ref={modalRef}>
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close "
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                I use ReactJS for frontend development and Tailwind CSS for
                styling, with Shadcn as an additional option if needed. For the
                backend, I utilize Express and Node.js. My database solutions
                include both MySQL and MongoDB.
              </p>
              <ul className="services__modal-services grid">
                {/* isi listnya tetap */}
              </ul>
            </div>
          </div>
        </div>

        {/* UI/UX Designer */}
        <div className="services__content">
          <div>
            <BiCarousel className="services__icon" />
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More <BiRightArrowAlt className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content" ref={modalRef}>
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close "
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                I have proficiency in using Figma for design, and I have
                experience in independently designing website projects.
              </p>
              <ul className="services__modal-services grid">
                {/* isi listnya tetap */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
