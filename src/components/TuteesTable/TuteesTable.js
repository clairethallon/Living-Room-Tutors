import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Table, Card, Col, Row } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import TuteeCard from "../TuteeCard/TuteeCard";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteesTable with the name for the new component.
function TuteesTable(props) {
  const dispatch = useDispatch();

  const activeTutees = useSelector((store) => store.activeTutees);

  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_TUTEES",
    });
  }, []);

  return (
    <div>
      {JSON.stringify(activeTutees)}
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
      {/* map though all active tutees and pass each individual tutee's info via props to tuteeCard */}
      <div>
        {activeTutees.map((tutee) => {
          return <TuteeCard tutee={tutee} />;
        })}
      </div>
    </div>
  );
}

export default TuteesTable;
