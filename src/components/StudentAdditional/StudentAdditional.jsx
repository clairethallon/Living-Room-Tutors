import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ProgressBar from "../ProgressBar/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function StudentAdditional(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const history = useHistory();

  const [newAdditionalInfo, setNewAdditionalInfo] = useState();
  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const changeAdditionalInfo = () => {
    console.log("in any additional info");
    setNewAdditionalInfo(event.target.value);
  };

  const AddNewStudentAdditional = () => {
    //package up new info in object
    const newStudentAdditional = {
      newAdditionalInfo: newAdditionalInfo,
    };
    dispatch({
      type: "ADD_NEW_STUDENT_ADDITIONAL",
      payload: newStudentAdditional,
    });
    history.push("/StudentTerms");
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <div>
          <ProgressBar />
          <div className="formContent">
            <div className="formQandA">
              <p>
                Is there anything else you want us to know about the Student?
              </p>
              <FloatingLabel
                controlId="AdditionalInfo"
                label="Additional Info"
                className="textInput"
                onChange={(event) => changeAdditionalInfo(event)}
              >
                <Form.Control
                  as="textarea"
                  className="additionalTextArea"
                  placeholder="Additional Info"
                />
              </FloatingLabel>
            </div>

            <Button
              className="primaryButton saveAndContinueButton"
              onClick={AddNewStudentAdditional}
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
