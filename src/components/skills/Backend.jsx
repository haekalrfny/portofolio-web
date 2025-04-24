import React from "react";
import { BiCheck } from "react-icons/bi"; // Import BiCheck icon
import "../../App.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">ExpressJS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
