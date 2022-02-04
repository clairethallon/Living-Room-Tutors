import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActiveTuteesTable from "../ActiveTuteesTable/ActiveTuteesTable";
import DeactivatedTuteesTable from "../DeactivatedTuteesTable/DeactivatedTuteesTable";

function DeactivatedTutees(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DEACTIVE_TUTEES" });

  }, []);

  const deactiveTutees = useSelector((store) => store.deactiveTutees);


  return (
    <div>
      <h1>Deactivated Tutees</h1>
      {/* number will be replaced with an actual count from the db */}
      <p> {deactiveTutees.length} deactivated tutee(s)</p>
      <DeactivatedTuteesTable />
    </div>
  );
}

export default DeactivatedTutees;
