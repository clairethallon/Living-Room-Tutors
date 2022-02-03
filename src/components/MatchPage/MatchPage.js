import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import TuteeMatchCard from "../TuteeMatchCard/TuteeMatchCard";
import TutorMatchCard from "../TutorMatchCard/TutorMatchCard";
import TutorMatchTable from "../TutorMatchTable/TutorMatchTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchPagePage with the name for the new component.
function MatchPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  const flagIcon = <FontAwesomeIcon icon={faFlag} />;

  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h1>Tutee & Tutor Match</h1>
      <div className="tuteeInfoSubjectsAndLanguages">
        <h2>Tutee Information:</h2>

        <div className="subjectAndLanguage">
          <p>
            <span className="flag subjectFlag">{flagIcon}</span>subjects
          </p>
          <p>
            <span className="flag languageFlag">{flagIcon}</span>Languages
          </p>
        </div>
      </div>
      <TuteeMatchCard />
      <h3>Select Tutor to Complete Match</h3>
      <TutorMatchTable />
    </div>
  );
}

export default MatchPage;
