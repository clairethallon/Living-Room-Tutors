import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';



function TutorModal(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => {setShow (false);}

  const handleShow = () => {
    console.log("closing modal")
    dispatch({ type: "SEND_NEW_TUTOR", payload: props.newTutorObject }); 
    setShow (true);}

  return (
    <div>

      <>
      <Button varient="primary" onClick={handleShow}> Submit + Modal </Button>
        <Modal show ={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Thank you for your application!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Your submitted application will be reviewed by one of our members you will be contacted via email regarding your eligibility.</p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/TutorInfo"><Button variant="primary" onClick={handleClose}>Submit</Button></Link>
        </Modal.Footer>
  
      </Modal>
      </>
    </div>
  ); 
}

export default TutorModal;
