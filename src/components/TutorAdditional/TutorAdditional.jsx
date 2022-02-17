import { Container, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function StudentAdditional(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Tutor Additional Info");
  const history = useHistory();

  const presenting = true;

  const [newutorAdditionalInfo, setNewTutorAdditionalInfo] = useState(" ");

  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const setDefaults = () => {
    if (presenting) {
      setNewTutorAdditionalInfo(
        "I took AP US History last year and scored a 4 on the test, so I would be useful in providing thorough explanations and tips on how the test will go. I am verbally fluent in Arabic and can communicate with multiple dialects. If I do run into some difficulty somehow, my mother is 100% fluent in Arabic (verbal/reading/writing), so there will always be help."
      );
    }
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
              <p onClick={setDefaults}>
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
                  value={newutorAdditionalInfo}
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
