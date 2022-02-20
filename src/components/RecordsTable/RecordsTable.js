import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Table, Card, Col, Row } from "react-bootstrap";
import RecordsCard from "../RecordsCard/RecordsCard";

function RecordsTable(props) {
  const dispatch = useDispatch();

  const matches = useSelector((store) => store.matches);

  useEffect(() => {
    dispatch({
      type: "FETCH_MATCHES",
    });
  }, []);

  return (
    <div>
      <div>
        <Row className="cardHead">
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Tutee Name</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Tutor Name</p>
          </Col>
          <Col xs="3" className="cardHeadCol">
            <p className="tableHeads">Matched Date</p>
          </Col>

          <Col xs="1"></Col>
        </Row>
      </div>
      <div>
        {matches.map((match) => {
          return <RecordsCard match={match} year={props.year} />;
        })}
      </div>
    </div>
  );
}

export default RecordsTable;
