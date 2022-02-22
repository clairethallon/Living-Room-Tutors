import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

function TuteeCard(props) {
  useEffect(() => {
    makePrettyTime(props.tutee.tutee_submission_timestamp);
  }, []);

  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });

  const makePrettyTime = (timestamp) => {
    let newTime = {
      year: "",
      month: "",
      day: "",
    };
    for (let i = 0; i < timestamp.length; i++) {
      if (i < 4) {
        newTime.year += timestamp[i];
      } else if (i > 4 && i < 7) {
        newTime.month += timestamp[i];
      } else if (i > 7 && i < 10) {
        newTime.day += timestamp[i];
      }
      setPrettyTime(newTime);
    }
  };

  const subject1 = props.tutee.subject_1;
  const subject2 = props.tutee.subject_2;
  const subject3 = props.tutee.subject_3;

  const specialSubjects = useSelector((store) => store.specialSubjects);

  const languages = [
    props.tutee.tutee_language_arabic,
    props.tutee.tutee_language_chinese,
    props.tutee.tutee_language_french,
    props.tutee.tutee_language_hmong,
    props.tutee.tutee_language_somali,
    props.tutee.tutee_language_tagalog,
    props.tutee.tutee_language_vietnamese,
    props.tutee.tutee_language_spanish,
    props.tutee.tutee_language_other,
  ];
  const AccordionClose = (e) => {
    console.log('in AccordionClose');
    e.stopPropagation();
  }

  return (
    <div>
      <Accordion className="accordionCard" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3" className="cardFirstLastName">
              {props.tutee.tutee_firstname} {props.tutee.tutee_lastname}
            </Col>
            <Col xs="2">
              {props.tutee.tutee_submission_timestamp[5]}{props.tutee.tutee_submission_timestamp[6]}.
                {props.tutee.tutee_submission_timestamp[8]}{props.tutee.tutee_submission_timestamp[9]}.
                {props.tutee.tutee_submission_timestamp[0]}{props.tutee.tutee_submission_timestamp[1]}
              {props.tutee.tutee_submission_timestamp[2]}{props.tutee.tutee_submission_timestamp[3]}
              {/* {prettyTime.month}.{prettyTime.day}.{prettyTime.year} */}
            </Col>
            {props.tutee.tutee_grade === "prek_kindergarten" ? (
              <Col xs="2">Pre-K/Kindergarten</Col>
            ) : (
                <Col xs="2">{props.tutee.tutee_grade}</Col>
              )}
            <Col xs="2" className="flaggedSubjectLanguage">
              {specialSubjects.map((subject) => {
                if (
                  subject1 === subject ||
                  subject2 === subject ||
                  subject3 === subject
                ) {
                  return <SubjectFlag />;
                }
              })}
              {languages.map((language) => {
                if (language !== false && language !== null) {
                  return <LanguageFlag />;
                }
              })}
            </Col>
            <Col className="cardButtons" xs="2" onClick={(e) => AccordionClose(e)}>
              <TuteeActivateDeactivateButton active={props.tutee} />
              <MatchPageButton tutee={props.tutee} />
              {/* <--conditionally render the MatchButton to only show up when the tutee is activated. */}
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TuteeProfile tutee={props.tutee} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeCard;
