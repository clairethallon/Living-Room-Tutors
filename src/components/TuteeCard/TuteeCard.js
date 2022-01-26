import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchButton from "../MatchButton/MatchButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteeCard with the name for the new component.
function TuteeCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">Tutee Name</Col>
            <Col xs="2">01.25.2022</Col>
            <Col xs="2">12th Grade</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col className="cardButtons" xs="2">
              <ActivateDeactivateButton />
              <MatchButton />
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TuteeProfile />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeCard;
