import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeactivatedTutorsTable from "../DeactivatedTutorsTable/DeactivatedTutorsTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name DeactivatedTutorsPage with the name for the new component.
function DeactivatedTutors(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DEACTIVE_TUTORS" });
  }, []);

  return (
    <div>
      <h1>Deactivated Tutors</h1>
      {/* number will be replaced with an actual count from the db */}
      <p>3 count of pending tutees</p>
      <DeactivatedTutorsTable />
    </div>
  );
}

export default DeactivatedTutors;
