import React from "react";
import { BiCheck } from "react-icons/bi"; // Import BiCheck icon
import "../../App.css";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
