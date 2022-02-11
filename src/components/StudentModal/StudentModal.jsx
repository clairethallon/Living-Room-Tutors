import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function StudentModal(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const history = useHistory();

  const [show, setShow] = useState(false);
  const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />;

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    console.log("closing modal");
    dispatch({ type: "ADD_NEW_STUDENT", payload: props.newStudentObject });
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
        <Modal className="submissionModal" show={show} onHide={handleClose}>
          <Modal.Header
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

          <Modal.Footer className="submissionModalFooter">
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

export default StudentModal;
