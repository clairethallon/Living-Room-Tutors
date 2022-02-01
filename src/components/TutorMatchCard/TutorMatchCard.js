import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import CompleteMatchButton from "../CompleteMatchButton/CompleteMatchButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TutorProfile from "../TutorProfile/TutorProfile";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorCard with the name for the new component.
function TutorMatchCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  return (
    <div>
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">Tutor Name</Col>
            <Col xs="2">01.25.2022</Col>
            <Col xs="2">12th Grade</Col>
            <Col xs="3">AP/Honors English Literature and Composition</Col>
            <Col xs="1" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col>
              <CompleteMatchButton />
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

export default TutorMatchCard;
