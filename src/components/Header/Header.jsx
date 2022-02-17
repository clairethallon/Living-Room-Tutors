import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
      <Container className="headerContainer">
        <div className="brandNameHeader">
          <img alt="logo" style={{ maxWidth: "65px" }} src={Logo} />
          <h1 className="headingLRT">LIVING ROOM TUTORS</h1>
        </div>
        <div className="LTRRegFormHeader">
          <h2>Living Room Tutors K-12 Registration Form</h2>
        </div>
      </Container>
    </div>
  );
}

export default Header;
