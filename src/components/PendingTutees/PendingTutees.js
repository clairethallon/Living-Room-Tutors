import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ActiveTuteesTable from "../ActiveTuteesTable/ActiveTuteesTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function PendingTutees(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  const activeTutees = useSelector((store) => store.activeTutees);

  return (
    <div className="tabContainer">
      <div className="tuteeInfoSubjectsAndLanguages">
        <h1>Tutees Pending Matches</h1>
      </div>
      <p>
        <strong>{activeTutees.length}</strong> pending tutee(s)
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
      <ActiveTuteesTable />
    </div>
  );
}

export default PendingTutees;
