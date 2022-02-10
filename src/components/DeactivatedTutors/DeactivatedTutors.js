import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeactivatedTutorsTable from "../DeactivatedTutorsTable/DeactivatedTutorsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function DeactivatedTutors(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DEACTIVE_TUTORS" });
  }, []);

  const flagIcon = <FontAwesomeIcon icon={faFlag} />;

  const deactiveTutors = useSelector((store) => store.deactiveTutors);

  return (
    <div>
      <h1>Deactivated Tutors</h1>
      <p>{deactiveTutors.length} deactivated tutor(s)</p>
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
      <DeactivatedTutorsTable />
    </div>
  );
}

export default DeactivatedTutors;
