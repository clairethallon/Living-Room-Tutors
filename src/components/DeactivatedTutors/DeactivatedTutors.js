import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeactivatedTutorsTable from "../DeactivatedTutorsTable/DeactivatedTutorsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DeactivatedTutors(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DEACTIVE_TUTORS" });
  }, []);

  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  const deactiveTutors = useSelector((store) => store.deactiveTutors);

  return (
    <div className="tabContainer">
      <h1>Deactivated Tutors</h1>
      <p>
        <strong>{deactiveTutors.length}</strong> deactivated tutor(s)
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
      <DeactivatedTutorsTable />
    </div>
  );
}

export default DeactivatedTutors;
