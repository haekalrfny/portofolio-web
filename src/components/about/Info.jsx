import React from "react";
import { BiBriefcaseAlt, BiAward, BiSupport } from "react-icons/bi";
import "../../App.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box flex flex-col items-center gap-1.5">
        <BiAward className="text-gray-700 text-2xl" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ Years</span>
      </div>
      <div className="about__box flex flex-col items-center gap-1.5">
        <BiBriefcaseAlt className="text-gray-700 text-2xl" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">9+ Projects</span>
      </div>
      <div className="about__box flex flex-col items-center gap-1.5">
        <BiSupport className="text-gray-700 text-2xl" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
