import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

function TuteeCard(props) {
  return (
    <div>
      {JSON.stringify(props)}
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">
              <p>
                {props.tutee.student_first_name} {props.tutee.student_last_name}
              </p>
            </Col>
            <Col xs="2">{props.tutee.submission_timestamp}</Col>
            <Col xs="2">{props.tutee.grade_level}</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col className="cardButtons" xs="2">
              <ActivateDeactivateButton />
              <MatchPageButton />
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
