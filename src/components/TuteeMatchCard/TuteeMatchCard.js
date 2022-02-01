import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

function TuteeMatchCard(props) {
  const selectedTutee = useSelector((store) => store.selected_tutee);

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">Tutee Name</Col>
            <Col xs="2">01.25.2022</Col>
            <Col xs="2">12th Grade</Col>
            <Col xs="3">1st subject choice</Col>
            <Col xs="1" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TuteeProfile tutee={selectedTutee} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeMatchCard;
