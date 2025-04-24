import React from "react";
import "../../App.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Language from "./Language";
import Design from "./Design";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Language />
      </div>
    </section>
  );
};

export default Skills;
