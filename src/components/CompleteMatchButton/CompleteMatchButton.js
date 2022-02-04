import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

  const postMatch = () => {
    console.log('in postMatch', props.tutor, selectedTutee);
    dispatch({ type: 'SEND_NEW_MATCH', tutor: props.tutor, tutee: selectedTutee });

    handleClose();
  }

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
          <Link to="/records">
            <Button variant="primary" onClick={postMatch}>
              Confirm Match
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompleteMatchButton;
