import React, { useState } from "react";
import { useSelector } from "react-redux";
import TutorsTable from "../TutorsTable/TutorsTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name PendingTutorsPage with the name for the new component.
function PendingTutors(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  return (
    <div>
      <h1>Tutees Pending Matches</h1>
      {/* number will be replaced with an actual count from the db */}
      <p>3 count of pending tutees</p>
      <TutorsTable />
    </div>
  );
}

export default PendingTutors;
