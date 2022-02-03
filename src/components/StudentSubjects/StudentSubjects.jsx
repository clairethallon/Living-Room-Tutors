import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function StudentSubjects(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const [newPrimarySubject, setNewPrimarySubject] = useState();
  const [changeOtherField, setOtherPrimaryField] = useState(false);

  const [newSecondarySubject, setNewSecondarySubject] = useState();
  const [changeOtherSecondaryField, setOtherSecondaryField] = useState(false);

  const [newTertiarySubject, setNewTertiarySubject] = useState();
  const [changeOtherTertiaryField, setOtherTertiaryField] = useState(false);

  const [newOtherInfo, setNewOtherInfo] = useState();
  const [newDetailedNeeds, setNewDetailedNeeds] = useState();

  // ************ Primary Subject Change ************
  const changePrimarySubject = () => {
    console.log("in new primary");

    if (event.target.value == "Other") {
      setOtherPrimaryField(true);
    } else {
      setOtherPrimaryField(false);
    }

    setNewPrimarySubject(event.target.value);
  };

  const changeOtherPrimarySubject = () => {
    console.log("in other school");
    setNewPrimarySubject(event.target.value);
  };

  // ************ Secondary Subject Change ************
  const changeSecondarySubject = () => {
    console.log("in new secondary");

    if (event.target.value == "Other") {
      setOtherSecondaryField(true);
    } else {
      setOtherSecondaryField(false);
    }

    setNewSecondarySubject(event.target.value);
  };

  const changeOtherSecondarySubject = () => {
    console.log("in other school");
    setNewSecondarySubject(event.target.value);
  };

  // ************ Tertiary Subject Change ************
  const changeTertiarySubject = () => {
    console.log("in new tertiary");

    if (event.target.value == "Other") {
      setOtherTertiaryField(true);
    } else {
      setOtherTertiaryField(false);
    }

    setNewTertiarySubject(event.target.value);
  };

  const changeOtherTertiarySubject = () => {
    console.log("in other school");
    setNewTertiarySubject(event.target.value);
  };

  const changeOtherInfo = () => {
    console.log("in new other info");
    setNewOtherInfo(event.target.value);
  };

  const changeDetailedNeeds = () => {
    console.log("in new detailed needs");
    setNewDetailedNeeds(event.target.value);
  };

  const AddNewStudentSubjects = () => {
    //package up new info in object
    const newStudentSubjects = {
      newPrimarySubject: newPrimarySubject,
      newSecondarySubject: newSecondarySubject,
      newTertiarySubject: newTertiarySubject,
      newOtherInfo: newOtherInfo,
      newDetailedNeeds: newDetailedNeeds,
    };

    if (
      newStudentSubjects.newPrimarySubject == null ||
      newStudentSubjects.newSecondarySubject == null ||
      newStudentSubjects.newTertiarySubject == null ||
      newStudentSubjects.newDetailedNeeds == "" ||
      newStudentSubjects.newDetailedNeeds == null
    ) {
      alert("Please complete all required fields.");
    }

    dispatch({ type: "ADD_NEW_STUDENT_SUBJECTS", payload: newStudentSubjects });
  };

  return (
    <div>
      <div className="maincard">
        <Header />

        <>
          <FloatingLabel
            controlId="primarySubject"
            label="Student's 1st Choice"
            className="selectInput"
            onChange={(event) => changePrimarySubject(event)}
          >
            <Form.Select aria-label="Student's 1st Choice">
              <option>
                In what subject does the student need the most support? (1st
                Choice)
              </option>
              <option value="1">K-5 Math</option>
              <option value="2">K-5 Reading</option>
              <option value="3">K-5 English/Writing</option>
              <option value="5">K-5 Social Studies</option>
              <option value="4">K-5 Science</option>
              <option value="6">6-8th Language Arts</option>
              <option value="7">6-8th Science</option>
              <option value="8">6-8th Social Studies</option>
              <option value="9">Math: Pre-Algebra</option>
              <option value="10">Math: Algebra I/Linear Algebra</option>
              <option value="11">Math: Algebra II</option>
              <option value="12">Math: Geometry</option>
              <option value="13">Math: Precalculus/Trigonometry</option>
              <option value="14">Science: Biology/Life Sciences</option>
              <option value="15">Science: Chemistry</option>
              <option value="16">Science: Physics</option>
              <option value="17">Science: Computer Science</option>
              <option value="18">Language: Chinese </option>
              <option value="20">Language: Spanish</option>
              <option value="21">Language: French</option>
              <option value="19">Language: German</option>
              <option value="22">History: World History</option>
              <option value="23">History: U.S. History</option>
              <option value="24">AP Honors Biology</option>
              <option value="25">AP Honors Chemistry</option>
              <option value="26">AP Honors Physics</option>
              <option value="27">AP Honors Calculus AB</option>
              <option value="28">AP Honors Calculus BC</option>
              <option value="29">AP Honors Statistics</option>
              <option value="30">AP Honors Computer Science</option>
              <option value="31">
                AP Honors English Literature and Composition
              </option>
              <option value="32">
                AP Honors English Language and Composition
              </option>
              <option value="33">AP Honors Macroeconomics</option>
              <option value="34">AP Honors Microeconomics</option>
              <option value="35">AP Honors Psychology</option>
              <option value="36">AP Honors United States History</option>
              <option value="37">AP Honors Government and Politics</option>
              <option value="38">AP Honors Human Geography</option>
              <option value="39">SAT Subject Tests</option>
              <option value="40">SAT Prep</option>
              <option value="41">ACT Prep</option>
              <option value="42">Other</option>
            </Form.Select>
          </FloatingLabel>
          {changeOtherField ? (
            <>
              <FloatingLabel
                controlID="OtherSchool"
                label="Other Subject"
                className="OtherSubject"
                onChange={(event) => changeOtherPrimarySubject(event)}
              >
                <Form.Control type="OtherSubject" placeholder="OtherSubject" />
              </FloatingLabel>
            </>
          ) : (
            <> </>
          )}
        </>

        <>
          <FloatingLabel
            controlId="secondarySubject"
            label="Student's 2nd Choice"
            className="selectInput"
            onChange={(event) => changeSecondarySubject(event)}
          >
            <Form.Select aria-label="Student's 2nd Choice">
              <option>
                In what additional subject does the student need support? (2nd
                Choice)
              </option>
              <option value="1">K-5 Math</option>
              <option value="2">K-5 Reading</option>
              <option value="3">K-5 English/Writing</option>
              <option value="5">K-5 Social Studies</option>
              <option value="4">K-5 Science</option>
              <option value="6">6-8th Language Arts</option>
              <option value="7">6-8th Science</option>
              <option value="8">6-8th Social Studies</option>
              <option value="9">Math: Pre-Algebra</option>
              <option value="10">Math: Algebra I/Linear Algebra</option>
              <option value="11">Math: Algebra II</option>
              <option value="12">Math: Geometry</option>
              <option value="13">Math: Precalculus/Trigonometry</option>
              <option value="14">Science: Biology/Life Sciences</option>
              <option value="15">Science: Chemistry</option>
              <option value="16">Science: Physics</option>
              <option value="17">Science: Computer Science</option>
              <option value="18">Language: Chinese </option>
              <option value="20">Language: Spanish</option>
              <option value="21">Language: French</option>
              <option value="19">Language: German</option>
              <option value="22">History: World History</option>
              <option value="23">History: U.S. History</option>
              <option value="24">AP Honors Biology</option>
              <option value="25">AP Honors Chemistry</option>
              <option value="26">AP Honors Physics</option>
              <option value="27">AP Honors Calculus AB</option>
              <option value="28">AP Honors Calculus BC</option>
              <option value="29">AP Honors Statistics</option>
              <option value="30">AP Honors Computer Science</option>
              <option value="31">
                AP Honors English Literature and Composition
              </option>
              <option value="32">
                AP Honors English Language and Composition
              </option>
              <option value="33">AP Honors Macroeconomics</option>
              <option value="34">AP Honors Microeconomics</option>
              <option value="35">AP Honors Psychology</option>
              <option value="36">AP Honors United States History</option>
              <option value="37">AP Honors Government and Politics</option>
              <option value="38">AP Honors Human Geography</option>
              <option value="39">SAT Subject Tests</option>
              <option value="40">SAT Prep</option>
              <option value="41">ACT Prep</option>
              <option value="42">Other</option>
            </Form.Select>
          </FloatingLabel>
          {changeOtherSecondaryField ? (
            <>
              <FloatingLabel
                controlID="OtherSecondarySchool"
                label="Other Subject (2nd Choice)"
                className="OtherSecondarySchool"
                onChange={(event) => changeOtherSecondarySubject(event)}
              >
                <Form.Control
                  type="OtherSecondarySchool"
                  placeholder="Other Subject (2nd Choice)"
                />
              </FloatingLabel>
            </>
          ) : (
            <> </>
          )}
        </>

        <>
          <FloatingLabel
            controlId="tertiarySubject"
            label="Student's 3rd Choice"
            className="selectInput"
            onChange={(event) => changeTertiarySubject(event)}
          >
            <Form.Select aria-label="Student's 3rd Choice">
              <option>
                In what additional subject does the student need support? (3rd
                Choice)
              </option>
              <option value="1">K-5 Math</option>
              <option value="2">K-5 Reading</option>
              <option value="3">K-5 English/Writing</option>
              <option value="5">K-5 Social Studies</option>
              <option value="4">K-5 Science</option>
              <option value="6">6-8th Language Arts</option>
              <option value="7">6-8th Science</option>
              <option value="8">6-8th Social Studies</option>
              <option value="9">Math: Pre-Algebra</option>
              <option value="10">Math: Algebra I/Linear Algebra</option>
              <option value="11">Math: Algebra II</option>
              <option value="12">Math: Geometry</option>
              <option value="13">Math: Precalculus/Trigonometry</option>
              <option value="14">Science: Biology/Life Sciences</option>
              <option value="15">Science: Chemistry</option>
              <option value="16">Science: Physics</option>
              <option value="17">Science: Computer Science</option>
              <option value="18">Language: Chinese </option>
              <option value="20">Language: Spanish</option>
              <option value="21">Language: French</option>
              <option value="19">Language: German</option>
              <option value="22">History: World History</option>
              <option value="23">History: U.S. History</option>
              <option value="24">AP Honors Biology</option>
              <option value="25">AP Honors Chemistry</option>
              <option value="26">AP Honors Physics</option>
              <option value="27">AP Honors Calculus AB</option>
              <option value="28">AP Honors Calculus BC</option>
              <option value="29">AP Honors Statistics</option>
              <option value="30">AP Honors Computer Science</option>
              <option value="31">
                AP Honors English Literature and Composition
              </option>
              <option value="32">
                AP Honors English Language and Composition
              </option>
              <option value="33">AP Honors Macroeconomics</option>
              <option value="34">AP Honors Microeconomics</option>
              <option value="35">AP Honors Psychology</option>
              <option value="36">AP Honors United States History</option>
              <option value="37">AP Honors Government and Politics</option>
              <option value="38">AP Honors Human Geography</option>
              <option value="39">SAT Subject Tests</option>
              <option value="40">SAT Prep</option>
              <option value="41">ACT Prep</option>
              <option value="42">Other</option>
            </Form.Select>
          </FloatingLabel>
          {changeOtherTertiaryField ? (
            <>
              <FloatingLabel
                controlID="OtherTertiarySchool"
                label="Other Subject (3rd Choice)"
                className="OtherTertiarySchool"
                onChange={(event) => changeOtherTertiarySubject(event)}
              >
                <Form.Control
                  type="OtherTertiarySchool"
                  placeholder="Other Subject (3rd Choice)"
                />
              </FloatingLabel>
            </>
          ) : (
            <> </>
          )}
        </>

        <>
          <h3>
            If you stated "other" for any of your choices, please describe what
            support is needed:
          </h3>
          <FloatingLabel
            controlID="OtherInfo"
            label="Support Needed"
            className="textInput"
            onChange={(event) => changeOtherInfo(event)}
          >
            <Form.Control  
              as="textarea"
              placeholder="Support Needed"
              style={{ height: "100px" }}  />
          </FloatingLabel>
        </>

        <>
          <h3>
            Please describe your needs in detail regarding the subject(s) you
            selected above:
          </h3>
          <p>
            The more detailed you are, the better we can find a tutor to fit
            your needs! For example: (AP Macroeconomics) I need help
            understanding Fiscal Policy; (K-5 math) I need help with
            understanding long division.
          </p>
          <FloatingLabel
            controlId="DetailedNeeds"
            label="Details of tutoring needs"
            className="textInput"
            onChange={(event) => changeDetailedNeeds(event)}
          >
            <Form.Control
              as="textarea"
              placeholder="Details of tutoring needs"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>

        <Link to="/StudentAdditional">
          <Button onClick={AddNewStudentSubjects}>Save and Continue</Button>
        </Link>
      </div>
    </div>
  );
}

export default StudentSubjects;
