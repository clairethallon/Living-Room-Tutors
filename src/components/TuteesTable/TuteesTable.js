import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import ActivateDeactivateButton from "../ActivateDeactivateButton/ActivateDeactivateButton";
import MatchButton from "../MatchButton/MatchButton";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TuteesTable with the name for the new component.
function TuteesTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutees Pending Matches");

  return (
    <div>
      <h2>tutee table</h2>
      <div>
        <Row className="cardHead">
          <Col xs="3" className="cardHeadCol">
            <p>Name</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p>Submission Date</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p>Grade</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p>Action</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TuteesTable;

{
  /* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submission Date</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <ActivateDeactivateButton />
              <MatchButton />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ActivateDeactivateButton />
              <MatchButton />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ActivateDeactivateButton />
              <MatchButton />
            </td>
          </tr>
        </tbody>
      </table> */
}
