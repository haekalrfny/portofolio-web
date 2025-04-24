import React from "react";
import { BiCheck } from "react-icons/bi"; // Import BiCheck icon
import "../../App.css";

const Language = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Language</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">Indonesia</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiCheck /> {/* Replace with BiCheck */}
            <div>
              <h3 className="skills__name">English</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
