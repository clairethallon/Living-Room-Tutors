import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import TuteeMatchCard from "../TuteeMatchCard/TuteeMatchCard";
import TutorMatchCard from "../TutorMatchCard/TutorMatchCard";
import TutorMatchTable from "../TutorMatchTable/TutorMatchTable";
import { Form, FormText } from "react-bootstrap";
import TuteeMatchTable from "../TuteeMatchTable/TuteeMatchTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchPagePage with the name for the new component.
function MatchPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  const flagIcon = <FontAwesomeIcon icon={faFlag} />;

  const dispatch = useDispatch();

  const changeLang = (event) => {
    dispatch({ type: "SET_LANGUAGE_FILTER", payload: event.target.value });
    console.log(event.target.value);
  };

  return (
    <div className="adminPageContainer">
      <AdminNavBar />
      <h1>Tutee & Tutor Match</h1>
      <div className="tuteeInfoSubjectsAndLanguages">
        <h2>Tutee Information</h2>
      </div>
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
      <TuteeMatchTable />
      <TuteeMatchCard />
      <hr className="tutorTuteeHr"></hr>
      <h2>Available Tutors to Match</h2>
      <Form.Group>
        <Form.Label htmlFor="languageFilter">
          Filter Tutors by Language
        </Form.Label>

        <Form.Select
          id="languageFilter"
          className="languageFilterDropdown"
          aria-label="Default select example"
          onChange={(event) => changeLang(event)}
        >
          <option>View All</option>
          <option value="Arabic">Arabic</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Hmong">Hmong</option>
          <option value="Somali">Somali</option>
          <option value="Spanish">Spanish</option>
          <option value="Tagalog">Tagalog</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>
      <TutorMatchTable />
    </div>
  );
}

export default MatchPage;
