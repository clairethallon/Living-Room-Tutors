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
      <p>Tutor's email:</p>
      <p>Phone number:</p>
      <p>Grade Level:</p>
      <p>School attending:</p>
      <p>Grades comfortable tutoring:</p>
      <p>Subjects comfortable tutoring:</p>
      <p>Languages:</p>
      <p>Additional information:</p>
    </div>
  );
}

export default TuteeProfile;
