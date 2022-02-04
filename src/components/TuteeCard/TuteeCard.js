import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

function TuteeCard(props) {

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
            <Col xs="2">{props.tutee.tutee_submission_timestamp}</Col>
            {props.tutee.tutee_grade === "prek_kindergarten" ?
              <Col xs="2">Pre-K/Kindergarten</Col> :
              <Col xs="2">{props.tutee.tutee_grade}</Col>}
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
