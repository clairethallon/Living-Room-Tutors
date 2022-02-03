import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MatchButton with the name for the new component.
function CompleteMatchButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Complete Match
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Match Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          * By clicking "confirm match", you confirm that the tutor and tutee
          have been emailed and notified of the match
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm Match
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompleteMatchButton;
