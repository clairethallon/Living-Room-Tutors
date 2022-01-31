import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";

function RecordsCard(props) {
  const [tuteeLanguages, setTuteeLanguages] = useState([]);

  useEffect(() => {
    languageFinder(languages);
  }, []);

  const languages = [
    { name: "Arabic ", status: props.match.tutee_language_arabic },
    { name: "Chinese ", status: props.match.tutee_language_chinese },
    { name: "French ", status: props.match.tutee_language_french },
    { name: "Hmong ", status: props.match.tutee_language_hmong },
    { name: "Somali ", status: props.match.tutee_language_somali },
    { name: "Tagalog ", status: props.match.tutee_language_tagalog },
    { name: "Vietnamese ", status: props.match.tutee_language_vietnamese },
    { name: "Spanish ", status: props.match.tutee_language_spanish },
  ];

  const languageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log("CURRENT LANGUAGES", currentLanguages);
    setTuteeLanguages(currentLanguages);
    return currentLanguages;
  };

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">
              {props.match.tutor_first_name} {props.match.tutor_last_name}
            </Col>
            <Col xs="3">
              {props.match.tutee_firstname} {props.match.tutee_lastname}
            </Col>
            <Col xs="3">{props.match.match_timestamp}</Col>
            <Col className="cardButtons" xs="2"></Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            {JSON.stringify(props.match)}
            <h2>Tutee Information:</h2>
            <h3>
              {props.match.tutee_firstname} {props.match.tutee_lastname} (
              {props.match.tutee_pronouns})
            </h3>
            <p>
              Parent/Guardian's email (if applicable):{" "}
              {props.match.email_guardian}
            </p>
            <p>Student's email: {props.match.email_student}</p>
            <p>Phone number: {props.match.tutee_phone}</p>
            <p>Grade Level: {props.match.tutee_grade}</p>
            <p>School attending: {props.match.tutee_school}</p>
            <p>
              Language preference (if not English):{" "}
              {tuteeLanguages.map((language) => {
                return <p>{language}</p>;
              })}
            </p>
            <p>1st subject choice: {props.match.subject_1}</p>
            <p>2st subject choice: {props.match.subject_2}</p>
            <p>3st subject choice: {props.match.subject_3}</p>
            <p>
              other subject (if applicable): {props.match.tutee_subject_other}
            </p>
            <p>
              Detail description regarding help needed:{" "}
              {props.match.tutee_subject_details}
            </p>
            <p>Addition information: {props.match.tutee_misc_info}</p>
            <hr></hr>
            <h2>Tutor Information:</h2>
            <h3>
              {props.match.tutor_first_name} {props.match.tutor_last_name} (
              {props.match.tutor_pronouns})
            </h3>
            <p>Tutor's email: </p>
            <p>Phone number:</p>
            <p>Grade Level: </p>
            <p>School attending: </p>
            <p>Grades comfortable tutoring:</p>
            <p>Subjects comfortable tutoring:</p>
            <p>Languages comfortable tutoring in: </p>
            <p>Additional information:</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default RecordsCard;
