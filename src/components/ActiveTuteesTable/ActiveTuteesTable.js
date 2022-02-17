import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Table, Card, Col, Row } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import TuteeCard from "../TuteeCard/TuteeCard";

function ActiveTuteesTable(props) {
  const dispatch = useDispatch();

  const activeTutees = useSelector((store) => store.activeTutees);

  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_TUTEES",
    });
  }, []);

  return (
    <div>
      {/* {JSON.stringify(activeTutees)} */}
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
        {activeTutees.map((tutee) => {
          return <TuteeCard tutee={tutee} />;
        })}
      </div>
    </div>
  );
}

export default ActiveTuteesTable;
