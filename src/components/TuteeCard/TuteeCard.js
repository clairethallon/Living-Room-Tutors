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

  return (
    <div>
      {/* {JSON.stringify(props)} */}
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">
              {props.tutee.tutee_firstname} {props.tutee.tutee_lastname}
            </Col>
            <Col xs="2">
              {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
            </Col>
            <Col xs="2">{props.tutee.tutee_grade}</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col className="cardButtons" xs="2">
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
