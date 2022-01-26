import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchButton from "../MatchButton/MatchButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeCard;
