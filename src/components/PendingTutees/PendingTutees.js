import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ActiveTuteesTable from "../ActiveTuteesTable/ActiveTuteesTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name PendingTuteesPage with the name for the new component.
function PendingTutees(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const activeTutees = useSelector((store) => store.activeTutees);


  return (
    <div>
      <h1>Tutees Pending Matches</h1>
      {/* number will be replaced with an actual count from the db */}
      <p>{activeTutees.length} pending tutee(s)</p>
      <ActiveTuteesTable />
    </div>
  );
}

export default PendingTutees;
