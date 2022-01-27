import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchButton from "../MatchButton/MatchPageButton";
import TuteeCard from "../TuteeCard/TuteeCard";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteesTable with the name for the new component.
function TutorTuteesTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutees Pending Matches");

  return (
    <div>
      <div>
        <Row className="cardHead">
          <Col xs="3" className="cardHeadCol">
            <p>Name</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p>Submission Date</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p>Grade</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p>Flagged</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p>Action</p>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </div>
      {/* the div below is where the mapping through all the tutee cards will take place */}
      <div>
        <TuteeCard />
        <TuteeCard />
      </div>
    </div>
  );
}

export default TutorTuteesTable;
