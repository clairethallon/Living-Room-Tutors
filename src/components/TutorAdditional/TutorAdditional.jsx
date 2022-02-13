

import { Container, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function StudentAdditional(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutor Additional Info");
  const history = useHistory();


  const [newutorAdditionalInfo, setNewTutorAdditionalInfo] = useState();

  useEffect(()=>{ 
    scrollToTop ();
    }, []);

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };


  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const changeTutorAdditionalInfo = () => {
    console.log("in additional info");
    setNewTutorAdditionalInfo(event.target.value);
  };

  const AddTutorAdditionalInfo = () => {
    //package up new info in object
    const additionalInfo = {
      tutorAdditionalInfo: newutorAdditionalInfo,
    };
    dispatch({ type: "ADD_TUTOR_ADITIONAL_INFO", payload: additionalInfo });
    history.push("/TutorTerms");
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <div>
          <TutorProgressBar />
          <div className="formContent">
            <div className="formQandA">
              <p>
                Is there any additional information you would like to provide?
              </p>
              <FloatingLabel
                controlId="AdditionalInfo"
                label="Additional Info"
                className="textInput"
                onChange={(event) => changeTutorAdditionalInfo(event)}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Additional Info"
                  className="additionalTextArea"
                />
              </FloatingLabel>
            </div>

            <Button
              className="primaryButton saveAndContinueButton"
              onClick={AddTutorAdditionalInfo}
            >
              Save and Continue <span className="rightarrow">{rightArrow}</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StudentAdditional;
