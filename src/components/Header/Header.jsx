import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../images/logoCrop.png";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name Header with the name for the new component.
function Header(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  return (
    <div className="headerDiv">
      <div>
        <img style={{ maxWidth: "100px" }} src={Logo} />
        <span className="headingLRT">LIVING ROOM TUTORS</span>
      </div>
      <div className="LTRRegFormHeader">
        <p>Living Room Tutors K-12 Registration Form</p>
      </div>
    </div>
  );
}

export default Header;
