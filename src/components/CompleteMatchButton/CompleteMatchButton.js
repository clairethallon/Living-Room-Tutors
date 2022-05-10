import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Col, Row, Overlay, Tooltip } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CompleteMatchButton.css";
import CopyButton from "./copyButton";

import { Link } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function CompleteMatchButton(props) {
  useEffect(() => {
    subjectFinder(subjects);
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const selectedTutee = useSelector((store) => store.selected_tutee);

  const [show, setShow] = useState(false);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showToolTip, setShowToolTip] = useState(false);
  const target = useRef(null);

  const subjects = [
    { name: "K-5 Math", dbname: "K5_Math" },
    { name: "K-5 Reading", dbname: "K5_Reading" },
    { name: "K-5 English/Writing", dbname: "K5_English_Writing" },
    { name: "K-5 Social Studies", dbname: "K5_Science" },
    { name: "K-5 Science", dbname: "K5_social_studies" },
    { name: "6-8th Language Arts", dbname: "6th_to_8th_language_arts" },
    { name: "6-8th Science", dbname: "6th_to_8th_science" },
    { name: "6-8th Social Studies", dbname: "6th_to_8th_social_studies" },
    { name: "Pre-Algebra", dbname: "math_pre_algebra" },
    { name: "Algebra I/ Linear Algebra", dbname: "math_alg1_linear_alg" },
    { name: "Algebra II", dbname: "math_alg2" },
    { name: "Geometry", dbname: "math_geom" },
    { name: "Precalculus/Trigonometry", dbname: "math_precalc_trig" },
    { name: "Biology/Life Sciences", dbname: "sci_bio_life" },
    { name: "Chemistry", dbname: "sci_chem" },
    { name: "Physics", dbname: "sci_physics" },
    { name: "Computer Science", dbname: "sci_comp_sci" },
    { name: "Chinese", dbname: "lang_chinese" },
    { name: "Spanish", dbname: "lang_spanish" },
    { name: "French", dbname: "lang_french" },
    { name: "German", dbname: "lang_german" },
    { name: "World History", dbname: "hist_world" },
    { name: "U.S. History", dbname: "hist_us" },
    { name: "AP/Honors Biology", dbname: "ap_bio" },
    { name: "AP/Honors Chemistry", dbname: "ap_chem" },
    { name: "AP/Honors Physics", dbname: "ap_physics" },
    { name: "AP/Honors Calculus AB", dbname: "ap_calc_AB" },
    { name: "AP/Honors Calculus BC", dbname: "ap_calc_BC" },
    { name: "AP/Honors Statistics", dbname: "ap_stats" },
    { name: "AP/Honors Computer Science", dbname: "ap_comp_sci" },
    {
      name: "AP/Honors English Literature and Composition",
      dbname: "ap_english_lit_comp",
    },
    { name: "AP/Honors Language and Composition", dbname: "ap_lang_comp" },
    { name: "AP/Honors Macroeconomics", dbname: "ap_macro_econ" },
    { name: "AP/Honors Microeconomics", dbname: "ap_micro_econ" },
    { name: "AP/Honors Psychology", dbname: "ap_psyc" },
    { name: "AP/Honors United States History", dbname: "ap_hist_us" },
    {
      name: "AP/Honors Government and Politics (US)",
      dbname: "ap_gov_politics_us",
    },
    { name: "AP/Honors Human Geography", dbname: "ap_human_geog" },
    { name: "SAT Subject Tests", dbname: "sat_subject_tests" },
    { name: "SAT Prep", dbname: "sat_prep" },
    { name: "ACT Prep", dbname: "act_prep" },
  ];

  const subjectFinder = (subjects) => {
    console.log("in subjectFinder");
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].dbname == selectedTutee.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == selectedTutee.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == selectedTutee.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  const postMatch = async () => {
    console.log("in postMatch", props.tutor, selectedTutee);
    await dispatch({
      type: "SEND_NEW_MATCH",
      tutor: props.tutor,
      tutee: selectedTutee,
    });
    await handleClose();
    await history.push("/records");
  };

  const createCopyText = (id) => {
    const from = document.getElementById(id);
    const range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return (
    <>
      {/* {JSON.stringify(selectedTutee)} */}
      <Button className="primaryButton" variant="primary" onClick={handleShow}>
        Complete Match
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          height: "95%",
        }}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "20px" }}>
            Match Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            margin: "15px",
            // height: "80vh",
            overflowy: "auto",
          }}
        >
          <Tabs id="uncontrolled-tab-example" className="mb-3">
            {/* EMAIL TO TUTOR */}
            <Tab eventKey="Pending-Tutees" title="Email to Tutor">
              <br></br>
              <div className="copyButton">
                <div
                  onClick={() => createCopyText("tutorEmail")}
                  className="copyBtnDiv"
                >
                  <CopyButton buttonText="Copy Email to Tutor" />
                </div>
              </div>
              <div id="tutorEmail">
                <p>
                  <b>To: (tutor) {props.tutor.tutor_email}</b>
                </p>
                <p><b>Re: Living Room Tutors Match: Welcome to the LRT Team</b></p>
                <br></br>
                <p>
                  Dear {props.tutor.tutor_first_name}{" "}
                  {props.tutor.tutor_last_name},
                </p>
                <p>
                  Great News! You have been matched! We are honored to have you
                  join the LRT family as an official Living Room Tutor.
                </p>
                <p>
                  After careful consideration of your application, we feel that
                  your best tutee match is{" "}
                  <b>
                    {selectedTutee.tutee_firstname}{" "}
                    {selectedTutee.tutee_lastname}
                  </b>
                  . {selectedTutee.tutee_firstname} is in{" "}
                  {selectedTutee.tutee_grade === "prek_kindergarten"
                    ? "Pre-K/Kindergarten"
                    : selectedTutee.tutee_grade + " grade"}{" "}
                  and attends{" "}
                  <b className="schoolName">{selectedTutee.tutee_school}</b>.
                  Below, you will find {selectedTutee.tutee_firstname}'s contact
                  information.
                </p>
                <p>
                  We will also be reaching out to{" "}
                  {selectedTutee.tutee_firstname} with the news, and we will cc
                  you in that email. From there, you may start communication and
                  determine a meeting time with your tutee.{" "}
                </p>

                <p>
                  <p>
                    {selectedTutee.tutee_firstname} needs the most help in:{" "}
                    <span className="tuteeSubjects">
                      {subject1}, {subject2}, and {subject3}.
                    </span>
                  </p>
                  <p>
                    <span>
                      {selectedTutee.tutee_misc_info === null &&
                        selectedTutee.tutee_subject_details === null
                        ? " "
                        : " Additional comments include: "}
                    </span>
                    <span className="tuteeMisc">
                      {selectedTutee.tutee_misc_info === null
                        ? " "
                        : selectedTutee.tutee_misc_info}
                    </span>
                    <span className="tuteeMisc">
                      {selectedTutee.tutee_subject_details === null
                        ? " "
                        : selectedTutee.tutee_subject_details}
                    </span>
                  </p>
                </p>
                <p>
                  Don’t worry if you cannot help with all of the subjects
                  listed. There will be LRT guide documents linked below. Please
                  review the documents thoroughly. As well as guidelines,
                  expectations, and resources, it contains information about
                  certifying volunteer hours and a tutoring exit form for when
                  you would like to discontinue service with your tutee.
                </p>
                <p>
                  Note: It is the responsibility of the tutor to initiate
                  communication with the tutee and/or their family. If your
                  tutee does not respond to your message after 7 business days,
                  please contact us. Thank you for giving back to your
                  community; you are making a vital impact on the future of
                  these bright learners. Your influence is truly boundless.
                </p>
                <p>
                  {" "}
                  If you ever have any questions or concerns, do not hesitate to
                  reach out. Email us at team@livingroomtutors.com.
                </p>
                <p>
                  Our team at LRT wishes you and {selectedTutee.tutee_firstname}{" "}
                  the best!
                </p>
                <p>Take Care,</p>
                <p>
                  <b>Living Room Tutors Team</b>
                </p>
                <p>
                  <u>Contact Information:</u>
                  <br></br>
                  {selectedTutee.email_student === null
                    ? ""
                    : selectedTutee.tutee_firstname +
                    "'s email: " +
                    selectedTutee.email_student}
                  <br></br>
                  {selectedTutee.email_guardian === null
                    ? ""
                    : "Guardian's email: " + selectedTutee.email_guardian}
                  <br></br>
                  Phone: {selectedTutee.tutee_phone}
                </p>

                <p>
                  <u>LRT Tutor Documents:</u>
                  <br></br>
                  <a href="https://docs.google.com/document/d/1iLv0qmxogcVK0bEjOEHcaxGSfnyEhC3dsoOwiO88PyQ/edit?usp=sharing">
                    Tutor Guide
                  </a>
                  <br></br>
                  <a href="https://docs.google.com/presentation/d/1P2iS4r5KldjDjzYzU3Wy9FOSiFMSmdZBCegxTdIWzrE/edit?usp=sharing">
                    Tutor Training Modules
                  </a>
                </p>
              </div>
            </Tab>
            {selectedTutee.student_or_guardian == "student" ||
              selectedTutee.student_or_guardian == "Student" ? (
                < Tab eventKey="Email-To-Tutee" title="Email to Tutee">

                  {/* EMAIL TO TUTEE */}
                  <br></br>
                  <div className="copyButton">
                    <div
                      onClick={() => createCopyText("tuteeEmail")}
                      className="copyBtnDiv"
                    >
                      <CopyButton buttonText="Copy Email to Tutee" />
                    </div>
                  </div>

                  <div id="tuteeEmail">
                    <p>
                      <b>To: (tutee) {selectedTutee.email_student}</b>
                      <br></br>
                      <b>
                        Cc: (tutor) {props.tutor.tutor_email}{" "}
                        {selectedTutee.email_guardian === null
                          ? ""
                          : " ; (guardian) " + selectedTutee.email_guardian}
                      </b>
                    </p>
                    <p><b>Re: Living Room Tutors Match</b></p>
                    <br></br>

                    <p>
                      Dear {selectedTutee.tutee_firstname} {selectedTutee.tutee_lastname},
                  </p>
                    <p>
                      Congratulations! You have been matched! After careful
                      consideration of your application, we feel your best match
                    is with tutor{" "}
                      <b>
                        {props.tutor.tutor_first_name}{" "}
                        {props.tutor.tutor_last_name}
                      </b>
                    .
                  </p>
                    <p>
                      {props.tutor.tutor_first_name} is in{" "}
                      {props.tutor.tutor_grade === "In College"
                        ? "College"
                        : props.tutor.tutor_grade + " grade "}
                    and attends{" "}
                      <b className="schoolName">{props.tutor.tutor_school}</b>.{" "}
                      {props.tutor.tutor_first_name} is cc'd on this email and
                    will be reaching out to you to schedule a meeting. We will
                    also include {props.tutor.tutor_first_name}’s contact
                    information below.
                  </p>

                    <p>
                      We recommend using Zoom to conduct the tutoring sessions,
                      however, there are other online conferencing platforms such
                      as Google Meet, or Skype. Please note that Zoom operates
                      best with the Chrome Browser. Please consider either
                      installing Chrome or the Zoom application if you have not
                      done so. We will also attach resources below in case you
                      need assistance joining the meeting.
                  </p>

                    <p>
                      If you ever have any questions or concerns, do not hesitate
                      to reach out. Email us at team@livingroomtutors.com. Our
                      team here at LRT understands the difficulty of finding a
                      tutor tailored just for you. Your personalized tutor, {props.tutor.tutor_first_name}, is going to be a wonderful
                    resource for you.
                  </p>
                    <p>
                      Note: If your tutor does not reach out after 5 business days
                      upon receiving this email, please contact us. There will be
                      an LRT guide document attached below. Please review the
                      document thoroughly.
                  </p>
                    <p>
                      Our team at LRT wishes you and{" "}
                      {props.tutor.tutor_first_name} the best! Thank you for using our service.
                  </p>
                    <p>Sincerely,</p>
                    <p>
                      <b>Living Room Tutors Team</b>
                    </p>
                    <p>
                      <u>{props.tutor.tutor_first_name}'s Contact Information:</u>
                      <br></br>
                    email: {props.tutor.tutor_email} <br></br>
                    phone: {props.tutor.tutor_phone}
                    </p>
                    <p>
                      <u>LRT Guide Document:</u>
                      <br></br>
                      <a href="https://docs.google.com/document/d/1sOTJKTd0vUQGcOqFKAY_WP57xqhRtukZdYaYKfLxUx4/edit?usp=sharing">
                        Tutee Guide
                    </a>
                    </p>
                  </div>
                </Tab>
              ) : (
                <Tab eventKey="Email-To-Guardian" title="Email to Guardian">
                  <br></br>

                  <div className="copyButton">
                    <div
                      onClick={() => createCopyText("adultEmail")}
                      className="copyBtnDiv"
                    >
                      <CopyButton buttonText="Copy Email to Guardian" />
                    </div>
                  </div>
                  {/* EMAIL TO GUARDIAN */}

                  <div id="adultEmail">
                    <p>
                      <b>To: (guardian) {selectedTutee.email_guardian}</b>
                      <br></br>
                      <b>
                        Cc: (tutor) {props.tutor.tutor_email}{" "}
                        {selectedTutee.email_student === null
                          ? ""
                          : " ; (tutee) " + selectedTutee.email_student}
                      </b>
                    </p>
                    <p><b>Re: Living Room Tutors Match</b></p>

                    <br></br>
                    <p>
                      Dear Parents/Guardians/Teachers of{" "}
                      {selectedTutee.tutee_firstname}{" "}
                      {selectedTutee.tutee_lastname},
                  </p>

                    <p>
                      Congratulations! {selectedTutee.tutee_firstname} has been
                    matched!
                  </p>

                    <p>
                      After careful consideration of the application, we feel the
                    best tutor match is{" "}
                      <b>
                        {props.tutor.tutor_first_name}{" "}
                        {props.tutor.tutor_last_name}
                      </b>
                    . {props.tutor.tutor_first_name} is in{" "}
                      {props.tutor.tutor_grade === "In College"
                        ? "College"
                        : props.tutor.tutor_grade + " grade "}{" "}
                    and attends{" "}
                      <b className="schoolName">{props.tutor.tutor_school}</b>.{" "}
                      {props.tutor.tutor_first_name} is cc'd in this email for
                    your convenience. Feel free to begin communication with your
                    tutor. We will also include {props.tutor.tutor_first_name}'s
                    contact information below.
                  </p>

                    <p>
                      We recommend using Zoom to conduct the tutoring sessions,
                      however, there are other online conferencing platforms such
                      as Google Meet, or Skype. Please note that Zoom operates
                      best with the Chrome Browser. Please consider either
                      installing Chrome or the Zoom application if you have not
                      done so. We will also attach resources below in case you
                      need assistance joining the meeting.
                  </p>

                    <p>
                      If you ever have any questions or concerns, do not hesitate
                      to reach out. Email us at team@livingroomtutors.com. Our
                      team here at LRT understands the difficulty of finding a
                    tutor tailored just for you. Your personalized tutor,{" "}
                      {props.tutor.tutor_first_name}, is going to be a wonderful
                    resource for {selectedTutee.tutee_firstname}.
                  </p>
                    <p>
                      {" "}
                    Note: If your tutor does not reach out after 5 business days
                    upon receiving this email, please contact us. There will be
                    an LRT guide document attached below. Please review the
                    document thoroughly.
                  </p>
                    <p>
                      Our team at LRT wishes {selectedTutee.tutee_firstname} and{" "}
                      {props.tutor.tutor_first_name} the best! Thank you for using
                    our service.
                  </p>
                    <p>Sincerely,</p>
                    <p>
                      <b>Living Room Tutors Team</b>
                    </p>

                    <p>
                      <u>{props.tutor.tutor_first_name}'s Contact Information:</u>
                      <br></br>
                    email: {props.tutor.tutor_email} <br></br>
                    phone: {props.tutor.tutor_phone}
                    </p>

                    <p>
                      <u>LRT Guide Document:</u>
                      <br></br>
                      <a href="https://docs.google.com/document/d/1sOTJKTd0vUQGcOqFKAY_WP57xqhRtukZdYaYKfLxUx4/edit?usp=sharing">
                        Tutee Guide
                    </a>
                    </p>
                  </div>
                </Tab>
              )}
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomRightRadius: "calc(0.3rem - 1px)",
              borderBottomLeftRadius: "calc(0.3rem - 1px)",
              marginLeft: "25px",
              marginRight: "20px",
            }}
          >
            <p style={{ width: "60%" }}>
              * By clicking "confirm match", you confirm that the tutor and
              tutee have been emailed and notified of the match
            </p>
            <div>
              <Button
                className="secondaryButton"
                variant="secondary"
                onClick={handleClose}
                style={{ marginRight: "5px" }}
              >
                Cancel
              </Button>
              {/* <Link to="/records"> */}
              <Button
                className="primaryButton"
                variant="primary"
                onClick={postMatch}
              >
                Confirm Match
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompleteMatchButton;
