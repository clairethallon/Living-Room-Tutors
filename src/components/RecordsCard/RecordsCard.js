import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import RecordsTable from "../RecordsTable/RecordsTable";

function RecordsCard(props) {
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
            <p>Parent/Guardian's email (if applicable): </p>
            <p>Student's email:</p>
            <p>tutee.lrtmatching@gmail.com Phone number:</p>
            <p>Grade Level:</p>
            <p>School attending:</p>
            <p>Language preference (if not English): </p>
            <p>1st subject choice: </p>
            <p>2st subject choice:</p>
            <p>3st subject choice: K-5 Math other subject (if applicable): </p>
            <p>Detail description regarding help needed: </p>
            <p>Addition information:</p>
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
