import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TutorActivateDeactivateButton from "../TutorActivateDeactivateButton/TutorActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TutorProfile from "../TutorProfile/TutorProfile";

function TutorCard(props) {
  useEffect(() => {
    makePrettyTime(props.tutor.tutor_submission_timestamp);
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

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">
              {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
            </Col>
            <Col xs="2">
              {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
            </Col>
            <Col xs="2">{props.tutor.tutor_grade}</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col className="cardButtons" xs="2">
              <TutorActivateDeactivateButton active={props.tutor} />
              {/* <--conditionally render the MatchButton to only show up when the Tutor is activated. */}
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TutorProfile tutor={props.tutor} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TutorCard;
