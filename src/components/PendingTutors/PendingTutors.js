import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ActiveTutorsTable from "../ActiveTutorsTable/ActiveTutorsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function PendingTutors(props) {
  const flagIcon = <FontAwesomeIcon icon={faFlag} />;

  const [heading, setHeading] = useState("Functional Component");
  const activeTutors = useSelector((store) => store.activeTutors);

  return (
    <div>
      <h1>Tutors Pending Matches</h1>

      <p>{activeTutors.length} pending tutor(s)</p>
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
      <ActiveTutorsTable />
    </div>
  );
}

export default PendingTutors;
