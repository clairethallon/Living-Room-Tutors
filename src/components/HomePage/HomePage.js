import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../HomePage/HomePage.css";
import { Table, Card, Col, Row, Button, ButtonGroup } from "react-bootstrap";
import logo from "../../images/logoCrop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HomePage(props) {

  useEffect(() => {
    dispatch({
      type: "UNSET_ADD_NEW_TUTOR_INFO",
    });
    dispatch({
      type: "UNSET_ADD_NEW_TUTOR_SUBJECTS",
    });
    dispatch({
      type: "UNSET_ADD_TUTOR_ADITIONAL_INFO",
    });
    dispatch({
      type: "ADD_TUTOR_TERMS", payload: false
    });
    dispatch({
      type: "UNSET_ADD_NEW_SUBJECTS_INFO",
    });
    dispatch({
      type: "UNSET_ADD_NEW_STUDENT_SUBJECTS",
    });
    dispatch({
      type: "UNSET_ADD_NEW_STUDENT_ADDITIONAL",
    });
    dispatch({
      type: "ADD_STUDENT_TERMS", payload: false
    });

  }, []);

  const dispatch = useDispatch();

  const store = useSelector((store) => store);
  const history = useHistory();

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div className="homePage">
      <img className="homeLogo" src={logo} />
      <Row>
        <Col lg="6" xs="12" className="registrationTermsCol">
          <div className="registrationTermsContainer">
            <h1>K-12 Registration Form</h1>
            <p>
              Communities across the nation have been experiencing prolonged
              school shutdowns due to COVID-19. As a result, many students are
              finding it difficult to maintain their educational trajectories as
              they adjust to distance learning. LRT is supporting communities in
              their efforts to mitigate the immediate impact of school closures
              by facilitating the connections between volunteer student mentors
              and students who need support. Simply fill out this form, and we
              will do our best to match you with an appropriate mentor/mentee.
              This service is offered at no cost to you; after registration, we
              will be reaching out to connect you with a fitting mentor/mentee.
              Once a match is made, it is the responsibility of the tutor and
              tutee to plan a tutoring session via Zoom, Google Hangouts, or
              Skype.
            </p>
            <p>*PLEASE BE AWARE THAT THIS IS A VIRTUAL TUTORING SERVICE*</p>
          </div>
        </Col>
        <Col lg="6" xs="12" className="tutorOrTuteeQuestionCol">
          <div className="tutorOrTuteeQuestion">
            <div>
              <p>
                Are you a student willing to tutor or a student wanting to
                receive tutoring services? *
              </p>
              <ButtonGroup className="tutorTuteeButtonGroup" vertical>
                <Button
                  onClick={() => history.push(`/TutorInfo`)}
                  className="tutorButton"
                >
                  I want to become a volunteer tutor
                  {rightArrow}
                </Button>
                <Button
                  onClick={() => history.push(`/StudentInfo`)}
                  className="tuteeButton"
                >
                  I want to receive tutoring {rightArrow}
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
