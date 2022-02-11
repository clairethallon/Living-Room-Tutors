import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../HomePage/HomePage.css";
import { Table, Card, Col, Row } from "react-bootstrap";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name HomePage with the name for the new component.
function HomePage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  return (
    <div className="homePage">
      <Row>
        <Col className="registrationTermsCol">
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
        <Col>
          <div className="tutorOrTuteeQuestion">
            <p>
              Are you a student willing to tutor or a student wanting to receive
              tutoring services? *
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
