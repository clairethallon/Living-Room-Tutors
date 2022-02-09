import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";


import { Link } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function CompleteMatchButton(props) {
  const dispatch = useDispatch();

  const selectedTutee = useSelector((store) => store.selected_tutee);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullscreen, setFullscreen] = useState(true);


  const postMatch = () => {
    console.log("in postMatch", props.tutor, selectedTutee);
    dispatch({
      type: "SEND_NEW_MATCH",
      tutor: props.tutor,
      tutee: selectedTutee,
    });

    handleClose();
    setFullscreen(breakpoint);

  };

  return (
    <>
      {JSON.stringify(selectedTutee)}
      <Button className="primaryButton" variant="primary" onClick={handleShow}>
        Complete Match
      </Button>

      <Modal show={show} onHide={handleClose}
        size="lg"
        fullscreen={fullscreen}
      >
        <Modal.Header closeButton>
          <Modal.Title>Match Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="cardHead">
            <Col className="cardHeadCol">
              <p className="tableHeads">Email to Tutor</p>
            </Col>
            <Col className="cardHeadCol">
              <p className="tableHeads">Email to Tutee</p>
            </Col>
          </Row>

          <Row >
            <Col>
              <b>To: {props.tutor.tutor_email}</b><br></br><br></br>

              Dear {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}, <br></br><br></br>

          Great News! You have been matched! We are honored to have you join the LRT family as an official Living Room Tutor.<br></br><br></br>
          After careful consideration of your application, we feel that your best match is <b>{selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname}</b>. {selectedTutee.tutee_firstname} is in {selectedTutee.tutee_grade === 'prek_kindergarten' ? 'Pre-K/Kindergarten' : selectedTutee.tutee_grade + ' grade'} and attends {selectedTutee.tutee_school}. Below, you will find {selectedTutee.tutee_firstname}'s contact information.
           <br></br><br></br>
          We will also be reaching out to {selectedTutee.tutee_firstname} with the news, and we will CC you in that email. From there, you may start communication and determine a meeting time with your tutee.
          <br></br><br></br>
              {selectedTutee.tutee_firstname} needs the most help in: {selectedTutee.subject_1}, {selectedTutee.subject_2}, and {selectedTutee.subject_3}. Additional comments include:{selectedTutee.tutee_misc_info}.
           <br></br><br></br>
          Don’t worry if you cannot help with all of the subjects listed.
          There will be an LRT guide document attached below. Please review the document thoroughly. As well as guidelines, expectations, and resources, it contains information about certifying volunteer hours and a tutoring exit form for when you would like to discontinue service with your tutee.
          <br></br><br></br>
          Note: It is the responsibility of the tutor to initiate communication with the tutee and/or their family. If your tutee does not respond to your message after 7 business days, please contact us.
          Thank you for giving back to your community; you are making a vital impact on the future of these bright learners. Your influence is truly boundless. If you ever have any questions or concerns, do not hesitate to reach out. Email us at livingroomtutor@gmail.com.
          <br></br><br></br>

          Our team at LRT wishes you and {selectedTutee.tutee_firstname} the best!

          <br></br><br></br>
          Take Care,
          <br></br><br></br>
          Living Room Tutors Team

          </Col>
            <Col>

              <b>To: {selectedTutee.email_student}</b><br></br>
              <b>Cc: {props.tutor.tutor_email}</b><br></br><br></br>
              Dear {selectedTutee.tutee_firstname},

Congratulations! You have been matched! After careful consideration of your application, we feel your best match is {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}.
<br></br><br></br>
              {props.tutor.tutor_first_name} is in {props.tutor.tutor_grade} grade and attends ________. ----- is cc'd in this email and will be reaching out to you to schedule a meeting. We will also include -----’s contact information below.
<br></br><br></br>
We recommend using Zoom to conduct the tutoring sessions, however, there are other online conferencing platforms such as Google Meet, or Skype. Please note that Zoom operates best with the Chrome Browser. Please consider either installing Chrome or the Zoom application if you have not done so. We will also attach resources below in case you need assistance joining the meeting.
<br></br><br></br>
If you ever have any questions or concerns, do not hesitate to reach out. Email us at livingroomtutor@gmail.com.
Our team here at LRT understands the difficulty of finding a tutor tailored just for you. Your personalized tutor, --------, is going to be a wonderful resource for you.
<br></br><br></br>
Note: If your tutor does not reach out after 5 business days upon receiving this email, please contact us.
<br></br><br></br>
There will be an LRT guide document attached below. Please review the document thoroughly.
<br></br><br></br>
Our team at LRT wishes you and -------- the best!
Thank you for using our service.
<br></br><br></br>
Sincerely,
<br></br><br></br>
Living Room Tutors Team


            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          * By clicking "confirm match", you confirm that the tutor and tutee
          have been emailed and notified of the match
          <Button
            className="secondaryButton"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Link to="/records">
            <Button
              className="primaryButton"
              variant="primary"
              onClick={postMatch}
            >
              Confirm Match
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompleteMatchButton;
