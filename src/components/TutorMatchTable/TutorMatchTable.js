import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import TutorMatchCard from "../TutorMatchCard/TutorMatchCard";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchTable with the name for the new component.
function MatchTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");
  const dispatch = useDispatch();

  const groupAmatches = useSelector((store) => store.groupAmatches);
  const groupBmatches = useSelector((store) => store.groupBmatches);
  const groupCmatches = useSelector((store) => store.groupCmatches);
  const groupDmatches = useSelector((store) => store.groupDmatches);



  return (
    <div>
      <div>
        <Row className="cardHead">
          <Col xs="2" className="cardHeadCol">
            <p>Name</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p>Submission Date</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p>Subject</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p>Flagged</p>
          </Col>
          <Col xs="1" className="cardHeadCol">
            <p>Action</p>
          </Col>
          <Col xs="2"></Col>
        </Row>
      </div>
      {/* <div>
        {activeTutors.map((tutor) => {
          return <TutorMatchCard tutor={tutor} />;
        })}
      </div> */}
      <div>
        {groupAmatches.map((groupATutor) => {
          return <TutorMatchCard tutor={groupATutor} group={'A'} />;
        })}
      </div>
      <div>
        {groupBmatches.map((groupBTutor) => {
          return <TutorMatchCard tutor={groupBTutor} group={'B'} />;
        })}
      </div>
      <div>
        {groupCmatches.map((groupCTutor) => {
          return <TutorMatchCard tutor={groupCTutor} group={'C'} />;
        })}
      </div>
      <div>
        {groupDmatches.map((groupDTutor) => {
          return <TutorMatchCard tutor={groupDTutor} group={'D'} />;
        })}
      </div>
    </div>
  );
}

export default MatchTable;
