import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import TutorCard from "../TutorCard/TutorCard";

// component name TuteesTable with the name for the new component.
function TutorTable(props) {
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
        <TutorCard />
        <TutorCard />
      </div>
    </div>
  );
}

export default TutorTable;