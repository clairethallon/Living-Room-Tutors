import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Table, Card, Col, Row } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import TuteeCard from "../TuteeCard/TuteeCard";

function DeactivatedTuteesTable(props) {
  const dispatch = useDispatch();

  const deactiveTutees = useSelector((store) => store.deactiveTutees);

  useEffect(() => {
    dispatch({
      type: "FETCH_DEACTIVE_TUTEES",
    });
  }, []);

  return (
    <div>
      <div>
        <Row className="cardHead">
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Name</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Submission Date</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Grade</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Special Subjects & Languages</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Action</p>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </div>
      {/* map though all active tutees and pass each individual tutee's info via props to tuteeCard */}
      <div>
        {deactiveTutees.map((tutee) => {
          return <TuteeCard tutee={tutee} />;
        })}
      </div>
    </div>
  );
}

export default DeactivatedTuteesTable;
