import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

// import Form from 'react-bootstrap/Form';

function TutorInfo(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const store = useSelector((store) => store);
  const newtutorInfo = useSelector(
    (store) => store.newtutor.newtutorInfoReducer
  );

  const presenting = false;

  useEffect(() => {
    scrollToTop();
    checkReducer(newtutorInfo);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const checkReducer = (newtutorInfo) => {
    console.log("in checkReducer", newtutorInfo);
    if (newtutorInfo.length == 0) {
      console.log("EMPTY");
      return false;
    } else {
      setNewTutorFirstName(newtutorInfo.firstName);
      setNewTutorLastName(newtutorInfo.lastName);
      setNewEmail(newtutorInfo.email);
      setPronouns(newtutorInfo.pronouns);
      setNewTutorPhone(newtutorInfo.phone);
      setNewGrade(newtutorInfo.grade);
      setNewTutorSchool(newtutorInfo.school);
      if (
        newtutorInfo.school === "Mayo High School" ||
        newtutorInfo.school === "John Marshall High School" ||
        newtutorInfo.school === "Century High School" ||
        newtutorInfo.school === "Lourdes High School" ||
        newtutorInfo.school === "Byron High School" ||
        newtutorInfo.school === "Dover-Eyota High School" ||
        newtutorInfo.school === "Stewartville High School"
      ) {
        setdefaultSchoolVal(newtutorInfo.school);
        setNewTutorSchool(newtutorInfo.school);
      } else {
        setOtherField(true);
        setdefaultSchoolVal("Other");
        setOtherSchool(newtutorInfo.school);
      }
    }
  };

  const [newTutorFirstName, setNewTutorFirstName] = useState("");
  const [newTutorLastName, setNewTutorLastName] = useState("");
  const [newTutorEmail, setNewEmail] = useState("");
  const [Pronouns, setPronouns] = useState("");
  const [newTutorPhone, setNewTutorPhone] = useState("");
  const [newGrade, setNewGrade] = useState("");

  const [newTutorSchool, setNewTutorSchool] = useState("");
  const [defaultSchoolVal, setdefaultSchoolVal] = useState("");
  const [otherSchooldefault, setOtherSchool] = useState("");

  const [changeOtherField, setOtherField] = useState(false);

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const changeTutorFirstName = () => {
    console.log("in new tutor first name");
    setNewTutorFirstName(event.target.value);
  };

  const changeTutorLastName = () => {
    console.log("in new tutor last name");
    setNewTutorLastName(event.target.value);
  };

  const changeTutorEmail = () => {
    console.log("in new tutor email");
    setNewEmail(event.target.value);
  };

  const changePronouns = () => {
    console.log("in new tutor email");
    setPronouns(event.target.value);
  };

  const changeTutorPhone = () => {
    console.log("in new tutor phone");
    setNewTutorPhone(event.target.value);
  };

  const changeTutorGrade = () => {
    console.log("in new tutor grade", event.target.value);
    if (event.target.value === "") {
      setNewGrade(undefined);
      console.log(setNewGrade);
    } else {
      setNewGrade(event.target.value);
    }
  };

  // ***** tutor school select and other input *****
  const changeTutorSchool = () => {
    console.log("in new tutor school");
    if (event.target.value == "Other") {
      setOtherField(true);
      setdefaultSchoolVal(event.target.value);
      setNewTutorSchool("");
      setOtherSchool("");
      return;
    } else {
      setOtherField(false);
    }

    if (event.target.value === "") {
      setNewTutorSchool(undefined);
      setdefaultSchoolVal(event.target.value);
    } else {
      setNewTutorSchool(event.target.value);
      setdefaultSchoolVal(event.target.value);
    }
  };

  const changeOtherSchool = () => {
    console.log("in other school");
    setNewTutorSchool(event.target.value);
  };

  const setDefaults = () => {
    if (presenting) {
      setNewTutorFirstName("Adeline");
      setNewTutorLastName("Chapman");
      setNewEmail("adeline@adelinechapman.com");
      setPronouns("she/they");
      setNewTutorPhone("1234567890");
      setNewGrade("Junior");
      setNewTutorSchool("Century High School");
      setdefaultSchoolVal("Century High School");
    }
  };

  //package up new info in object
  const newTutorInfo = {
    firstName: newTutorFirstName,
    lastName: newTutorLastName,
    email: newTutorEmail,
    pronouns: Pronouns,
    phone: newTutorPhone,
    grade: newGrade,
    school: newTutorSchool,
  };

  const AddNewTutorInfo = () => {
    if (
      newTutorInfo.firstName == "" ||
      newTutorInfo.firstName == null ||
      newTutorInfo.lastName == "" ||
      newTutorInfo.lastName == null ||
      newTutorInfo.email == "" ||
      newTutorInfo.email == null ||
      newTutorInfo.phone == "" ||
      newTutorInfo.phone == null ||
      newTutorInfo.grade == "" ||
      newTutorInfo.grade == null ||
      newTutorInfo.school == "" ||
      newTutorInfo.school == null
    ) {
      alert(
        "At least one required field was empty. Please fill in the required fields before continuing."
      );
    } else {
      dispatch({ type: "ADD_NEW_TUTOR_INFO", payload: newTutorInfo });
      history.push("/tutorSubjects");
    }
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <TutorProgressBar />
        <div className="formContent">
          <div className="formQandA">
            <p onClick={setDefaults}>
              What is your name? <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="FirstName"
              label="First Name"
              className="formInput"
            >
              <Form.Control
                type="FirstName"
                placeholder="First Name"
                value={newTutorFirstName}
                onChange={(event) => changeTutorFirstName(event)}
                defaultValue={newTutorFirstName}
              />
            </FloatingLabel>
            <FloatingLabel
              controlID="LastName"
              label="Last Name"
              className="formInput"
            >
              <Form.Control
                type="LastName"
                placeholder="Last Name"
                value={newTutorLastName}
                onChange={(event) => changeTutorLastName(event)}
                defaultValue={newTutorLastName}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>What are your pronouns?</p>
            <FloatingLabel
              controlID="Pronouns"
              label="Pronouns Ex:She/Her"
              className="formInput"
            >
              <Form.Control
                type="Pronouns"
                placeholder="Pronouns"
                value={Pronouns}
                onChange={(event) => changePronouns(event)}
                defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p className="pWithSubP">
              What is your email address?{" "}
              <span className="requiredField"> *</span>
            </p>
            <p className="subP">
              Please confirm the email address you enter is correct. Email is
              our primary way of communicating with our tutors and tutees, so it
              is crucial that the email address that you provide is correct.
            </p>
            <FloatingLabel
              controlID="Email"
              label="Email"
              className="formInput"
            >
              <Form.Control
                type="Email"
                placeholder="Email"
                value={newTutorEmail}
                onChange={(event) => changeTutorEmail(event)}
                defaultValue={newTutorEmail}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What is your phone number?
              <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="Phone"
              label="Phone Number"
              className="formInput"
            >
              <Form.Control
                type="Phone"
                placeholder="Phone"
                value={newTutorPhone}
                onChange={(event) => changeTutorPhone(event)}
                defaultValue={newTutorPhone}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <label className="customLabel" htmlFor="gradeLevel">
              What is your current grade level?{" "}
              <span className="requiredField"> *</span>
            </label>
            <Form.Select
              className="selectGradeDropdown"
              id="gradeLevel"
              aria-label="gradeLevel"
              value={newGrade}
              onChange={(event) => changeTutorGrade(event)}
              defaultValue={newGrade}
            >
              <option value="">Select your current grade level</option>
              <option value="Freshman">9th</option>
              <option value="Sophomore">10th</option>
              <option value="Junior">11th</option>
              <option value="Senior">12th</option>
              <option value="College">I'm in College</option>
            </Form.Select>
          </div>

          <div className="formQandA">
            <label className="customLabel" htmlFor="schoolAttending">
              Where do you go to school?
              <span className="requiredField"> *</span>
            </label>

            <Form.Select
              id="schoolAttending"
              className="selectGradeDropdown"
              label="Current School"
              value={defaultSchoolVal}
              onChange={(event) => changeTutorSchool(event)}
              aria-label="schoolAttending"
              defaultValue={defaultSchoolVal}
            >
              <option value="">Select where you go to school</option>
              <option value="Mayo High School">Mayo High School</option>
              <option value="John Marshall High School">
                John Marshall High School
              </option>
              <option value="Century High School">Century High School</option>
              <option value="Lourdes High School">Lourdes High School</option>
              <option value="Byron High School">Byron High School</option>
              <option value="Dover-Eyota High School">
                Dover-Eyota High School
              </option>
              <option value="Stewartville High School">
                Stewartville High School
              </option>
              <option value="Other">Other</option>
            </Form.Select>

            {changeOtherField ? (
              <>
                <FloatingLabel
                  controlID="OtherSchool"
                  label="School Name"
                  className="formInput"
                >
                  <Form.Control
                    type="OtherSchool"
                    placeholder="OtherSchool"
                    onChange={(event) => changeOtherSchool(event)}
                    defaultValue={otherSchooldefault}
                  />
                </FloatingLabel>
              </>
            ) : (
                <> </>
              )}
          </div>

          <Button
            className="primaryButton saveAndContinueButton"
            onClick={AddNewTutorInfo}
          >
            Save and Continue <span className="rightarrow">{rightArrow}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default TutorInfo;
