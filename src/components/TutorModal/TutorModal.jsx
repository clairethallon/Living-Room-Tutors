import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorModal with the name for the new component.
function TutorModal(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);

  return (
    <div>
     
      <p>Modal Content below...</p>

      <>
      <Button varient="primary" onClick={handleShow}> Launch Demo </Button>
        <Modal show ={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>oh man I hope this works.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save changes</Button>
        </Modal.Footer>
  
      </Modal>
      </>
    </div>
  );
}

export default TutorModal;
