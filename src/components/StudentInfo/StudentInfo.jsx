import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useHistory } from "react-router-dom";

function TutorInfo(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const newstudentInfo = useSelector(
    (store) => store.newStudent.newstudentInfoReducer
  );
  const history = useHistory();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const [newSubmitter, setSubmitter] = useState();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newParentEmail, setNewParentEmail] = useState();
  const [newEmail, setNewEmail] = useState();
  const [Pronouns, setPronouns] = useState(null);
  const [newPhone, setNewPhone] = useState();
  const [newSchool, setNewSchool] = useState();
  const [newGrade, setNewGrade] = useState();

  // ******** LANGUAGE CHECK BOXES **************
  const [Spanish, setSpanish] = useState(false);
  const [Somali, setSomali] = useState(false);
  const [Arabic, setArabic] = useState(false);
  const [Chinese, setChinese] = useState(false);
  const [Tagalog, setTagalog] = useState(false);
  const [French, setFrench] = useState(false);
  const [Vietnamese, setVietnamese] = useState(false);
  const [Hmong, setHmong] = useState(false);
  const [IsLangChecked, setIsLangChecked] = useState(true);
  const [otherLanguage, setotherLanguage] = useState();
  // ******** LANGUAGE CHECK BOXES **************

  const changeSubmitter = () => {
    console.log("in new submitter", event.target.value);
    setSubmitter(event.target.value);
  };

  const changefirstName = () => {
    console.log("in new name");
    setNewFirstName(event.target.value);
  };

  const changelastName = () => {
    console.log("in new name");
    setNewLastName(event.target.value);
  };

  const changeParentEmail = () => {
    console.log("in new parent email");
    setNewParentEmail(event.target.value);
  };

  const changeEmail = () => {
    console.log("in new email");
    setNewEmail(event.target.value);
  };

  // ******** PRONOUN CHECK BOXES **************
  const changePronouns = () => {
    setPronouns(event.target.value);
    console.log("pronoun", Pronouns);
  };

  const changePhone = () => {
    console.log("in new phone");
    setNewPhone(event.target.value);
  };

  const changeSchool = () => {
    console.log("in new school");
    setNewSchool(event.target.value);
  };

  const changeGrade = () => {
    console.log("in new grade", event.target.value);
    if (event.target.value === "") {
      setNewGrade(undefined);
      console.log(newGrade);
    } else {
      setNewGrade(event.target.value);
    }
  };

  // ******** LANGUAGE CHECK BOXES **************
  const changeSpanish = () => {
    setSpanish(!Spanish);
    console.log("Spanish", Spanish);
  };

  const changeSomali = () => {
    setSomali(!Somali);
    console.log("Somali", Somali);
  };

  const changeArabic = () => {
    setArabic(!Arabic);
    console.log("Arabic", Arabic);
  };

  const changeChinese = () => {
    setChinese(!Chinese);
    console.log("Chinese", Chinese);
  };

  const changeTagalog = () => {
    setTagalog(!Tagalog);
    console.log("Tagalog:", Tagalog);
  };

  const changeFrench = () => {
    setFrench(!French);
    console.log("French", French);
  };

  const changeVietnamese = () => {
    setVietnamese(!Vietnamese);
    console.log("Vietnamese", Vietnamese);
  };

  const changeHmong = () => {
    setHmong(!Hmong);
    console.log("Hmong", Hmong);
  };

  const changeIsLangChecked = () => {
    setIsLangChecked(!IsLangChecked);
    console.log("is other checked?", IsLangChecked);
  };

  const changeotherLangauge = () => {
    console.log("in other langauge", otherLanguage);
    setotherLanguage(event.target.value);
  };
  // ******** END END END END END **************

  const AddNewStudentInfo = () => {
    console.log("in AddNewTutorInfo");
    //package up new student info in object
    const newStudentInfo = {
      submitter: newSubmitter,
      firstName: newFirstName,
      lastName: newLastName,
      parentEmail: newParentEmail,
      email: newEmail,
      Pronouns: Pronouns,
      phone: newPhone,
      school: newSchool,
      grade: newGrade,
      Spanish: Spanish,
      Somali: Somali,
      Arabic: Arabic,
      Chinese: Chinese,
      Tagalog: Tagalog,
      French: French,
      Vietnamese: Vietnamese,
      Hmong: Hmong,
      otherLanguage: otherLanguage,
    };

    // checks that all input feild have student info added!
    if (
      newStudentInfo.submitter == "" ||
      newStudentInfo.submitter == null ||
      newStudentInfo.firstName == "" ||
      newStudentInfo.firstName == null ||
      newStudentInfo.lastName == "" ||
      newStudentInfo.lastName == null ||
      newStudentInfo.email == "" ||
      newStudentInfo.email == null ||
      newStudentInfo.phone == "" ||
      newStudentInfo.phone == null ||
      newStudentInfo.school == "" ||
      newStudentInfo.school == null ||
      newStudentInfo.grade == "" ||
      newStudentInfo.grade == null
    ) {
      return alert("Please complete all required fields.");
    }
    // send it all to a reducer
    else {
      console.log("in AddNewTutorInfo", newStudentInfo);
      dispatch({ type: "ADD_NEW_STUDENT_INFO", payload: newStudentInfo });
      history.push("/StudentSubjects");
    }
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <ProgressBar />
        <div className="formContent">
          <div className="formQandA">
            <p>
              Please indicate if you are you a student registering yourself or
              are a parent/guardian/teacher registering on behalf of a student:
              <span className="requiredField"> *</span>
            </p>

            <Form.Check type="radio">
              <Form.Check.Input
                type="radio"
                id="student"
                name="studentOrParent"
                value="Student"
                onChange={(event) => changeSubmitter(event)}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="student"
              >
                I am a student
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="radio"
                id="ParentOrGuardian"
                name="studentOrParent"
                value="ParentOrGuardian"
                onChange={(event) => changeSubmitter(event)}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="ParentOrGuardian"
              >
                I am a parent or guardian registering a student
              </Form.Check.Label>
            </Form.Check>
          </div>

          <div className="formQandA">
            <p>
              If you are a parent/guardian registering a student, please enter
              your email: <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="GuardianEmail"
              label="Parent/Guardian's Email"
              className="formInput"
              onChange={(event) => changeParentEmail(event)}
            >
              <Form.Control type="GuardianEmail" placeholder="GuardianEmail" />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p className="pWithSubP">
              What is the Student's email address?
              <span className="requiredField"> *</span>
            </p>
            <p className="subP">
              Please confirm the email address you enter is correct. Email is
              our primary way of communicating with our tutors and tutees, so it
              is crucial that the email address that you provide is correct.
            </p>
            <FloatingLabel
              controlID="StudentEmail"
              label="Student's Email"
              className="formInput"
              onChange={(event) => changeEmail(event)}
            >
              <Form.Control type="StudentEmail" placeholder="Student Email" />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What is the best phone number to contact the student or guardian?
              <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="StudentPhone"
              label="Student/Guardian Phone Number"
              className="formInput"
              onChange={(event) => changePhone(event)}
            >
              <Form.Control
                type="StudentPhone"
                placeholder="Student's Phone Number"
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What is the student's name?{" "}
              <span className="requiredField"> *</span>
            </p>
            <div className="firstLastName">
              <FloatingLabel
                controlID="StudentFirstName"
                label="Student's First Name"
                className="formInput firstName"
                onChange={(event) => changefirstName(event)}
              >
                <Form.Control
                  type="StudentFirstName"
                  placeholder="Student First Name"
                />
              </FloatingLabel>
              <FloatingLabel
                controlID="StudentLastName"
                label="Student's Last Name"
                className="formInput"
                onChange={(event) => changelastName(event)}
              >
                <Form.Control
                  type="StudentLastName"
                  placeholder="Student Last Name"
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="formQandA">
            <p>What are the Student's pronouns?</p>
            <FloatingLabel
              controlID="Pronouns"
              label="Student's Pronouns Ex:She/Her"
              className="formInput"
              onChange={(event) => changePronouns(event)}
            >
              <Form.Control type="Pronouns" placeholder="Pronouns" />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What school does the Student attend?{" "}
              <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="StudentSchool"
              label="Student's School"
              className="formInput"
              onChange={(event) => changeSchool(event)}
            >
              <Form.Control
                type="StudentSchool"
                placeholder="Student's School"
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What is the student's current grade level?{" "}
              <span className="requiredField"> *</span>
            </p>

            <Form.Select
              className="selectGradeDropdown"
              aria-label="gradeLevel"
              onChange={(event) => changeGrade(event)}
            >
              <option value="">Select Student's Current Grade Level</option>
              <option value="prek_kindergarten">Pre-K/Kindergarten</option>
              <option value="1st">1st Grade</option>
              <option value="2nd">2nd Grade</option>
              <option value="3rd">3rd Grade</option>
              <option value="4th">4th Grade</option>
              <option value="5th">5th Grade</option>
              <option value="6th">6th Grade</option>
              <option value="7th">7th Grade</option>
              <option value="8th">8th Grade</option>
              <option value="9th">9th Grade</option>
              <option value="10th">10th Grade</option>
              <option value="11th">11th Grade</option>
              <option value="12th">12th Grade</option>
            </Form.Select>
          </div>

          <div className="formQandA">
            <p>
              Is the student an English language learner? If so, what is their
              preferred language?
            </p>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Spanish"
                name="Spanish"
                onChange={(event) => changeSpanish()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Spanish"
              >
                Spanish
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Somali"
                name="Somali"
                onChange={(event) => changeSomali()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Somali"
              >
                Somali
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Arabic"
                name="Arabic"
                onChange={(event) => changeArabic()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Arabic"
              >
                Arabic
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Chinese"
                name="Chinese"
                onChange={(event) => changeChinese()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Chinese"
              >
                Chinese
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Tagalog"
                name="Tagalog"
                onChange={(event) => changeTagalog()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Tagalog"
              >
                Tagalog
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="French"
                name="French"
                onChange={(event) => changeFrench()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="French"
              >
                French
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Vietnamese"
                name="Vietnamese"
                onChange={(event) => changeVietnamese()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Vietnamese"
              >
                Vietnamese
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="Hmong"
                name="Hmong"
                onChange={(event) => changeHmong()}
              />
              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Hmong"
              >
                Hmong
              </Form.Check.Label>
            </Form.Check>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="OtherLanguage"
                name="OtherLanguage"
                onChange={(e) => changeIsLangChecked(event.target.checked)}
              />

              <Form.Check.Label
                className="customeCheckandRedioOptions"
                htmlFor="Other"
              >
                Other
              </Form.Check.Label>

              <fieldset disabled={IsLangChecked}>
                <FloatingLabel
                  controlID="OtherLanguage"
                  label="Other Language"
                  className="formInput"
                  onChange={(event) => changeotherLangauge(event)}
                >
                  <Form.Control
                    type="OtherLanguage"
                    placeholder="Other Language"
                  />
                </FloatingLabel>
              </fieldset>
            </Form.Check>
          </div>

          <Button
            className="primaryButton saveAndContinueButton"
            onClick={AddNewStudentInfo}
          >
            Save and Continue <span className="rightarrow">{rightArrow}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default TutorInfo;
