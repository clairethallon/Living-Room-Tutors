import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Link } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function CompleteMatchButton(props) {


  const dispatch = useDispatch();

  const selectedTutee = useSelector((store) => store.selected_tutee);

  const [show, setShow] = useState(false);
  const [tutorEmailText, setTutorEmailText] = useState('false');
  const [tuteeEmailText, setTuteeEmailText] = useState('false');
  const [adultEmailText, setAdultEmailText] = useState('false');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postMatch = () => {
    console.log("in postMatch", props.tutor, selectedTutee);
    dispatch({
      type: "SEND_NEW_MATCH",
      tutor: props.tutor,
      tutee: selectedTutee,
    });

    handleClose();
  };

  const createCopyText = (id) => {
    const from = document.getElementById(id);
    const range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }



  return (
    <>
      {/* {JSON.stringify(selectedTutee)} */}
      <Button className="primaryButton" variant="primary" onClick={handleShow}>
        Complete Match
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ paddingTop: "50px" }}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "20px" }}>
            Match Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "15px", height: "50%" }}>
          <Tabs id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Pending-Tutees" title="Email to Tutor">
              <br></br>
              <Row>
                <Col className="cardHeadCol">
                  <b>To: {props.tutor.tutor_email}</b>
                  <br></br>
                  <br></br>
                </Col>
                <Col className="cardHeadCol">
                  <Button
                    className="primaryButton matchButton"
                    style={{
                      marginLeft: "auto",
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "relative",
                    }}
                    onClick={() => createCopyText("tutorEmail")}
                  >
                    Copy Tutor Email
                    </Button>
                </Col>
              </Row>

              <div id="tutorEmail">
                <p>Dear {props.tutor.tutor_first_name}{" "}
                  {props.tutor.tutor_last_name},</p>
                <p>Great News! You have been matched! We are honored to have you
                join the LRT family as an official Living Room Tutor.</p>
                <p>After careful consideration of your application, we feel that
                your best tutee match is{" "}
                  <b>
                    {selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname}
                  </b>
                . {selectedTutee.tutee_firstname} is in{" "}
                  {selectedTutee.tutee_grade === "prek_kindergarten"
                    ? "Pre-K/Kindergarten"
                    : selectedTutee.tutee_grade + " grade"}{" "}
                and attends {selectedTutee.tutee_school}. Below, you will find{" "}
                  {selectedTutee.tutee_firstname}'s contact information.</p>
                <p>We will also be reaching out to {
                  selectedTutee.tutee_firstname
                }{" "}
                with the news, and we will cc you in that email. From there, you
                may start communication and determine a meeting time with your
                tutee.</p>
                <p>{selectedTutee.tutee_firstname} needs the most help in:{" "}
                  {selectedTutee.subject_1}, {selectedTutee.subject_2}, and{" "}
                  {selectedTutee.subject_3}. Additional comments include:
                {selectedTutee.tutee_misc_info}.</p>
                <p>Don’t worry if you cannot help with all of the subjects listed.
                There will be an LRT guide documents linked below. Please review
                the document thoroughly. As well as guidelines, expectations,
                and resources, it contains information about certifying
                volunteer hours and a tutoring exit form for when you would like
                to discontinue service with your tutee.</p>
                <p>Note: It is the responsibility of the tutor to initiate
                communication with the tutee and/or their family. If your tutee
                does not respond to your message after 7 business days, please
                contact us. Thank you for giving back to your community; you are
                making a vital impact on the future of these bright learners.
                Your influence is truly boundless. If you ever have any
                questions or concerns, do not hesitate to reach out. Email us at
                livingroomtutor@gmail.com.</p>
                <p>Our team at LRT wishes you and {
                  selectedTutee.tutee_firstname
                }{" "}
                the best!</p>
                <p>Take Care,</p>
                <p>Living Room Tutors Team</p>
                <p>Contact Information:</p>

                <p>{selectedTutee.tutee_firstname}'s email:{" "}<br></br>
                  {selectedTutee.email_student}
                  <br></br>
                Guardian's email: {selectedTutee.email_guardian} <br></br>
                phone: {selectedTutee.tutee_phone}</p>

                <p>LRT Tutor Documents:<br></br>
                  <a href="https://docs.google.com/document/d/1iLv0qmxogcVK0bEjOEHcaxGSfnyEhC3dsoOwiO88PyQ/edit?usp=sharing">
                    LRT Tutors Guide
                </a><br></br>
                  <a href="https://docs.google.com/presentation/d/1P2iS4r5KldjDjzYzU3Wy9FOSiFMSmdZBCegxTdIWzrE/edit?usp=sharing">
                    LRT Tutor Trainig Modules
                </a></p>
              </div>
            </Tab>
            {selectedTutee.student_or_guardian == "student" ||
              selectedTutee.student_or_guardian == "Student" ? (
                <Tab eventKey="Email-To-Tutee" title="Email to Tutee">
                  <br></br>
                  <Row>
                    <Col className="cardHeadCol">
                      <b>To: {selectedTutee.email_guardian}</b>
                      <br></br>
                      <b>Cc: {props.tutor.tutor_email}</b>{" "}
                    </Col>
                    <Col className="cardHeadCol">
                      <Button
                        className="primaryButton matchButton"
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "relative",
                        }}
                        onClick={() => createCopyText("tuteeEmail")}

                      >
                        Copy Tutee Email
                    </Button>
                    </Col>
                  </Row>
                  <div id="tuteeEmail">
                    <p>To: {selectedTutee.email_student}</p>
                    <p>Cc: {props.tutor.tutor_email}</p>

                    <p>Dear {selectedTutee.tutee_firstname}{" "}
                      {selectedTutee.tutee_lastname},</p>
                    <p>
                      Congratulations! You have been matched! After careful
                      consideration of your application, we feel your best match is
                  with tutor {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}</p>
                    <p>{props.tutor.tutor_first_name} is in{" "}
                      {props.tutor.tutor_grade === "In College"
                        ? "College"
                        : props.tutor.tutor_grade + " grade"}{" "}
                  and attends {props.tutor.tutor_school}.{" "}
                      {props.tutor.tutor_first_name} is cc'd on this email and will
                  be reaching out to you to schedule a meeting. We will also
                  include {props.tutor.tutor_first_name}’s contact information
                  below.</p>

                    <p>  We recommend using Zoom to conduct the tutoring sessions,
                    however, there are other online conferencing platforms such as
                    Google Meet, or Skype. Please note that Zoom operates best
                    with the Chrome Browser. Please consider either installing
                    Chrome or the Zoom application if you have not done so. We
                    will also attach resources below in case you need assistance
                  joining the meeting.</p>

                    <p>If you ever have any questions or concerns, do not hesitate to
                    reach out. Email us at livingroomtutor@gmail.com. Our team
                    here at LRT understands the difficulty of finding a tutor
                  tailored just for you. Your personalized tutor,{" "}
                      {props.tutor.tutor_first_name}, is going to be a wonderful
                  resource for you.</p>

                    <p>Note: If your tutor does not reach out after 5 business days
                  upon receiving this email, please contact us.</p>

                    <p>There will be an LRT guide document attached below. Please
                  review the document thoroughly.</p>

                    <p>Our team at LRT wishes you and {
                      props.tutor.tutor_first_name
                    }{" "}
                  the best! Thank you for using our service.</p>

                    <p>Sincerely,</p>

                    <p>Living Room Tutors Team</p>

                    <p><b>{props.tutor.tutor_first_name}'s Contact Information:</b></p>
                    <p>email: {props.tutor.tutor_email}</p>

                    <p>phone: {props.tutor.tutor_phone}</p>

                    <p><b>LRT Tutee Guide:</b><br></br>
                      <a href="https://docs.google.com/document/d/1sOTJKTd0vUQGcOqFKAY_WP57xqhRtukZdYaYKfLxUx4/edit?usp=sharing">
                        LRT Tutee Guide
                  </a></p>
                  </div>
                </Tab>
              ) : (
                <Tab eventKey="Email-To-Guardian" title="Email to Adult of Tutee">
                  <br></br>
                  <Row>
                    <Col className="cardHeadCol">
                      <div>
                        <b>To: {selectedTutee.email_guardian}</b>
                        <br></br>
                        <b>Cc: {props.tutor.tutor_email}</b>
                      </div>
                    </Col>
                    <Col className="cardHeadCol">
                      <Button
                        className="primaryButton matchButton"
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "relative",
                        }}
                        onClick={() => createCopyText("adultEmail")}

                      >
                        Copy Tutor Email
                    </Button>
                    </Col>
                  </Row>

                  <div id="adultEmail">
                    <p>Dear Parents/Guardians/Teachers of{" "}
                      {selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname}
                  ,</p>

                    <p>Congratulations! {selectedTutee.tutee_firstname} has been
                  matched!</p>

                    <p>After careful consideration of the application, we
                  feel the best tutor match is{" "}
                      <b>
                        {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
                      </b>
                  . {props.tutor.tutor_first_name} is in{" "}
                      {props.tutor.tutor_grade === "In College"
                        ? "College"
                        : props.tutor.tutor_grade + " grade"}{" "}
                  and attends {props.tutor.tutor_school}.{" "}
                      {props.tutor.tutor_first_name} is cc'd in this email for your
                  convenience. Feel free to begin communication with your tutor.
                  We will also include {props.tutor.tutor_first_name}'s contact
                  information below.</p>

                    <p>We recommend using Zoom to conduct the tutoring sessions,
                    however, there are other online conferencing platforms such as
                    Google Meet, or Skype. Please note that Zoom operates best
                    with the Chrome Browser. Please consider either installing
                    Chrome or the Zoom application if you have not done so. We
                    will also attach resources below in case you need assistance
                  joining the meeting.</p>

                    <p>If you ever have any questions or concerns, do not hesitate to
                    reach out. Email us at livingroomtutor@gmail.com. Our team
                    here at LRT understands the difficulty of finding a tutor
                  tailored just for you. Your personalized tutor,{" "}
                      {props.tutor.tutor_first_name}, is going to be a wonderful
                  resource for {selectedTutee.tutee_firstname}.</p>
                    <p> Note: If your tutor does not reach out after 5 business days
                    upon receiving this email, please contact us. There will be an
                    LRT guide document attached below. Please review the document
                  thoroughly.</p>
                    <p>
                      Our team at LRT wishes {
                        selectedTutee.tutee_firstname
                      } and {props.tutor.tutor_first_name} the best! Thank you for
                  using our service.</p>
                    <p>
                      Sincerely,
                  </p>
                    <p>Living Room Tutors Team</p>
                    <p><b>{props.tutor.tutor_first_name}'s Contact Information:</b>
                      <br></br>
                  email: {props.tutor.tutor_email}
                      <br></br>
                  phone: {props.tutor.tutor_phone}</p>
                    <p> <b>LRT Tutee Guide:</b>
                      <br></br>
                      <a href="https://docs.google.com/document/d/1sOTJKTd0vUQGcOqFKAY_WP57xqhRtukZdYaYKfLxUx4/edit?usp=sharing">
                        LRT Tutee Guide
                  </a></p>
                  </div>
                </Tab>
              )}
          </Tabs>
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
