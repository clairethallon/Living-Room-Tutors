import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import TutorMatchCard from "../TutorMatchCard/TutorMatchCard";

function TuteeMatchTable(props) {
  return (
    <div>
      <div>
        <Row className="cardHead">
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Tutee Name</p>
          </Col>
          <Col xs="2" className="cardHeadCol">
            <p className="tableHeads">Submission Date</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Subjects</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Special Subjects & Languages</p>
          </Col>
          {/* <Col xs="1" className="cardHeadCol">
            <p className="tableHeads">Action</p>
          </Col> */}
          <Col xs="2"></Col>
        </Row>
      </div>
    </div>
  );
}

export default TuteeMatchTable;
