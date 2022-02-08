import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from 'react-bootstrap/Form';

function TutorInfo(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const newtutorInfo = useSelector((store) => store.newtutorInfo);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [newTutorFirstName, setNewTutorFirstName] = useState();
  const [newTutorLastName, setNewTutorLastName] = useState();
  const [newTutorEmail, setNewEmail] = useState();
  const [Pronouns, setPronouns] = useState("");
  const [newTutorPhone, setNewTutorPhone] = useState();
  const [newGrade, setNewGrade] = useState();

  const [newTutorSchool, setNewTutorSchool] = useState();
  const [changeOtherField, setOtherField] = useState(false);

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
    console.log("in new tutor grade");
    setNewGrade(event.target.value);
  };

  // ***** tutor school select and other input *****
  const changeTutorSchool = () => {
    console.log("in new tutor school");
    if (event.target.value == "Other") {
      setOtherField(true);
    } else {
      setOtherField(false);
    }
    setNewTutorSchool(event.target.value);
  };

  const changeOtherSchool = () => {
    console.log("in other school");
    setNewTutorSchool(event.target.value);
  };

  const AddNewTutorInfo = () => {
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
      alert("problem!");
    } else {
      dispatch({ type: "ADD_NEW_TUTOR_INFO", payload: newTutorInfo });
    }
  };

  return (
    <div>
      <div className="maincard">
        <Header />
        <>
          <h3>What is your name? (First and Last)</h3>
          <FloatingLabel
            controlID="FirstName"
            label="First Name"
            className="formInput"
            onChange={(event) => changeTutorFirstName(event)}
          >
            <Form.Control type="FirstName" placeholder="First Name" />
          </FloatingLabel>
          <FloatingLabel
            controlID="LastName"
            label="Last Name"
            className="formInput"
            onChange={(event) => changeTutorLastName(event)}
          >
            <Form.Control type="LastName" placeholder="Last Name" />
          </FloatingLabel>
        </>

        <>
          <h3>What is your email address?</h3>
          <p>
            Please confirm the email address you enter is correct. Email is our
            primary way of communicating with our tutors and tutees, so it is
            crucial that the email address that you provide is correct.
          </p>
          <FloatingLabel
            controlID="Email"
            label="Email"
            className="formInput"
            onChange={(event) => changeTutorEmail(event)}
          >
            <Form.Control type="Email" placeholder="Email" />
          </FloatingLabel>
        </>

        <>
          <h3>What are your pronouns?</h3>
          <FloatingLabel
            controlID="Pronouns"
            label="Pronouns Ex:She/Her"
            className="formInput"
            onChange={(event) => changePronouns(event)}
          >
            <Form.Control type="Pronouns" placeholder="Pronouns" />
          </FloatingLabel>
        </>

        <>
          <h3>What is your phone number?</h3>
          <FloatingLabel
            controlID="Phone"
            label="Phone Number"
            className="formInput"
            onChange={(event) => changeTutorPhone(event)}
          >
            <Form.Control type="Phone" placeholder="Phone" />
          </FloatingLabel>
        </>

        <>
          <FloatingLabel
            controlId="gradeLevel"
            label="Current Grade Level"
            className="selectInput"
            onChange={(event) => changeTutorGrade(event)}
          >
            <Form.Select aria-label="gradeLevel">
              <option>What is your current grade level?</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="College">I'm in College</option>
            </Form.Select>
          </FloatingLabel>
        </>

        <>
          <FloatingLabel
            controlId="Tutor's Current School"
            label="Current School"
            className="selectInput"
            onChange={(event) => changeTutorSchool(event)}
          >
            <Form.Select aria-label="Tutor's Current School">
              <option>Where do you go to school?</option>
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
              <option value="Stewertville High School">
                Stewertville High School
              </option>
              <option value="College">I'm in College</option>
              <option value="Other">Other</option>
            </Form.Select>
          </FloatingLabel>

          {changeOtherField ? (
            <>
              <FloatingLabel
                controlID="OtherSchool"
                label="School Name"
                className="formInput"
                onChange={(event) => changeOtherSchool(event)}
              >
                <Form.Control type="OtherSchool" placeholder="OtherSchool" />
              </FloatingLabel>
            </>
          ) : (
            <> </>
          )}
        </>

        <Link to="/tutorSubjects">
          <Button onClick={AddNewTutorInfo}>Save and Continue</Button>
        </Link>
      </div>
    </div>
  );
}

export default TutorInfo;
