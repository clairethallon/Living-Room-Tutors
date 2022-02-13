import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function TutorModal(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const [show, setShow] = useState(false);
  const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />;

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    console.log("closing modal");
    dispatch({ type: "SEND_NEW_TUTOR", payload: props.newTutorObject });
    setShow(true);
  };

  return (
    <div>
      <>
        <Button
          className="primaryButton saveAndContinueButton"
          varient="primary"
          onClick={handleShow}
        >
          {" "}
          Submit{" "}
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            className="submissionModalHeader"
            closeButton
          ></Modal.Header>

          <Modal.Body>
            <div className="checkIcon">{checkIcon}</div>
            <div className="submissionModalTextContainer">
              <center>
                <h1 className="submissionModalH1">
                  Thank you for your submission!
                </h1>
              </center>
              <center>
                <p>
                  You application was submitted successfully and will be
                  reviewed by one of our team members. Once a match is found,
                  you will be notified via email.
                </p>
              </center>
            </div>
          </Modal.Body>

          <Modal.Footer className="submissionModalFooter ">
            <Link to="/Home">
              <Button
                className="primaryButton okButton"
                variant="primary"
                onClick={handleClose}
              >
                OK
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default TutorModal;
