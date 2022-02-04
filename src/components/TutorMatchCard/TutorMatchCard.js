import React, { useState, useEffect } from "react";
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

  const languageFilter = useSelector((store) => store.languageFilter);
  const selected_tutee = useSelector((store) => store.selected_tutee);

  useEffect(() => {
    console.log('in useEffect');
    languageCheck();
  }, []);

  const languageCheck = () => {
    console.log('in lang check', languageFilter);
  }

  return (
    <div>

      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="2">
              {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
            </Col>
            <Col xs="2">{props.tutor.submission_timestamp}</Col>
            <Col xs="3">{selected_tutee.subject_1}</Col>
            <Col xs="1" className="flaggedSubjectLanguage">
              <SubjectFlag />
              <LanguageFlag />
            </Col>
            <Col xs="2"></Col>
            <Col>
              <CompleteMatchButton tutor={props.tutor} />
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            {/* {JSON.stringify(props.tutor)} */}
            <TutorProfile tutor={props.tutor} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TutorMatchCard;
