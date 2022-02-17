import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActiveTuteesTable from "../ActiveTuteesTable/ActiveTuteesTable";
import DeactivatedTuteesTable from "../DeactivatedTuteesTable/DeactivatedTuteesTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function DeactivatedTutees(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DEACTIVE_TUTEES" });
  }, []);

  const flagIcon = <FontAwesomeIcon icon={faFlag} />;
  const deactiveTutees = useSelector((store) => store.deactiveTutees);

  return (
    <div className="tabContainer">
      <h1>Deactivated Tutees</h1>
      {/* number will be replaced with an actual count from the db */}
      <p>
        {" "}
        <strong>{deactiveTutees.length} </strong>deactivated tutee(s)
      </p>
      <div className="subjectAndLanguageDiv">
        <div className="subjectAndLanguage">
          <p>
            <span className="flag subjectFlag">{flagIcon}</span>subjects
          </p>
          <p>
            <span className="flag languageFlag">{flagIcon}</span>Languages
          </p>
        </div>
      </div>
      <DeactivatedTuteesTable />
    </div>
  );
}

export default DeactivatedTutees;
