import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import TutorActivateDeactivateButton from "../TutorActivateDeactivateButton/TutorActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import TutorCard from "../TutorCard/TutorCard";

// component name TuteesTable with the name for the new component.
function ActiveTutorsTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const [heading, setHeading] = useState("Tutees Pending Matches");

  const activeTutors = useSelector((store) => store.activeTutors);

  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_TUTORS",
    });
  }, []);


  return (
    <div>
      {JSON.stringify(activeTutors)}

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
        {activeTutors.map((tutor) => {
          return <TutorCard tutor={tutor} />;
        })}
      </div>
    </div>
  );
}

export default ActiveTutorsTable;
