import React, { useState } from "react";
import { useSelector } from "react-redux";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteeProfile with the name for the new component.
function TuteeProfile(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  return (
    <div>
      <h2>first name last name (pronouns)</h2>
      <p>Parent/Guardian's email (if applicable):</p>
      <p>Student's email:</p>
      <p>Phone number:</p>
      <p>Grade Level:</p>
      <p>School attending:</p>
      <p>Language preference (if not English):</p>
      <p>1st subject choice: </p>
      <p>2st subject choice:</p>
      <p>3st subject choice:</p>
      <p>other subject (if applicable):</p>
      <p>Detail description regarding help needed:</p>
      <p>Addition information:</p>
    </div>
  );
}

export default TuteeProfile;
