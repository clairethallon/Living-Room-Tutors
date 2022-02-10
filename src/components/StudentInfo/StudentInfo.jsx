import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ProgressBar from "../ProgressBar/ProgressBar";

function TutorInfo(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const newstudentInfoReducer = useSelector((store)=> store.newstudentInfoReducer);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [newSubmitter, setSubmitter] = useState();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newParentEmail, setNewParentEmail] = useState();
  const [newEmail, setNewEmail] = useState();
  const [Pronouns, setPronouns] = useState(false);
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
    console.log("in new submitter");
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
    console.log("in new grade");
    setNewGrade(event.target.value);
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
    console.log('in AddNewTutorInfo');
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
      alert("Please complete all required fields.");
    }

    // send it all to a reducer
    console.log('in AddNewTutorInfo', newStudentInfo);

    dispatch({ type: "ADD_NEW_STUDENT_INFO", payload: newStudentInfo });
  };

  return (
    <div>
      <ProgressBar/>
      <Header />
      <div className="maincard">
        <div>
          <p>
            Please indicate if you are you a student registering yourself or are
            a parent/guardian/teacher registering on behalf of a student:
          </p>
          <input
            type="radio"
            id="student"
            name="studentOrParent"
            value="Student"
            onChange={(event) => changeSubmitter(event)}
          />
          <label for="Student">I am a student</label>
          <input
            type="radio"
            id="parentGuardian"
            name="studentOrParent"
            value="ParentOrGuardian"
            onChange={(event) => changeSubmitter(event)}
          />
          <label for="ParentOrGuardian">
            I am a Parent or Guardian registering a Student
          </label>
        </div>

        <>
          <h3>
            If you are a Parent/Guardian registering a Student, please enter
            your email:
          </h3>
          <FloatingLabel
            controlID="GuardianEmail"
            label="Parent/Guardian's Email"
            className="formInput"
            onChange={(event) => changeParentEmail(event)}
          >
            <Form.Control type="GuardianEmail" placeholder="GuardianEmail" />
          </FloatingLabel>
        </>

        <>
          <h3>What is the Student's name? (First and Last)</h3>
          <FloatingLabel
            controlID="StudentFirstName"
            label="Student's First Name"
            className="formInput"
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
        </>

        <>
          <h3>What is the Student's email address?</h3>
          <p>
            Please confirm the email address you enter is correct. Email is our
            primary way of communicating with our tutors and tutees, so it is
            crucial that the email address that you provide is correct.
          </p>
          <FloatingLabel
            controlID="StudentEmail"
            label="Student's Email"
            className="formInput"
            onChange={(event) => changeEmail(event)}
          >
            <Form.Control type="StudentEmail" placeholder="Student Email" />
          </FloatingLabel>
        </>

        <>
          <h3>What are the Student's pronouns?</h3>
          <FloatingLabel
            controlID="Pronouns"
            label="Student's Pronouns Ex:She/Her"
            className="formInput"
            onChange={(event) => changePronouns(event)}
          >
            <Form.Control type="Pronouns" placeholder="Pronouns" />
          </FloatingLabel>
        </>

        <>
          <h3>
            What is the best phone number to contact the Student or Guardian?
          </h3>
          <FloatingLabel
            controlID="StudentPhone"
            label="Student's Phone Number"
            className="formInput"
            onChange={(event) => changePhone(event)}
          >
            <Form.Control
              type="StudentPhone"
              placeholder="Student's Phone Number"
            />
          </FloatingLabel>
        </>

        <>
          <h3>What school does the Student attend?</h3>
          <FloatingLabel
            controlID="StudentSchool"
            label="Student's School"
            className="formInput"
            onChange={(event) => changeSchool(event)}
          >
            <Form.Control type="StudentSchool" placeholder="Student's School" />
          </FloatingLabel>
        </>

        <>
          <FloatingLabel
            controlId="gradeLevel"
            label="Student's Current Grade Level"
            onChange={(event) => changeGrade(event)}
            className="selectInput"
          >
            <Form.Select aria-label="gradeLevel">
              <option>Select Student's Current Grade Level:</option>
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
          </FloatingLabel>
        </>

        <div>
          <p>
            Is the student an English language learner? If so, what is their
            preferred language?
          </p>

          <div>
            <input
              type="checkbox"
              id="Spanish"
              name="Spanish"
              onChange={(event) => changeSpanish()}
            />
            <label for="Spanish">Spanish</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Somali"
              name="Somali"
              onChange={(event) => changeSomali()}
            />
            <label for="Somali">Somali</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Arabic"
              name="Arabic"
              onChange={(event) => changeArabic()}
            />
            <label for="Arabic">Arabic</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Chinese"
              name="Chinese"
              onChange={(event) => changeChinese()}
            />
            <label for="Chinese">Chinese</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Tagalog"
              name="Tagalog"
              onChange={(event) => changeTagalog()}
            />
            <label for="Tagalog">Tagalog</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="French"
              name="French"
              onChange={(event) => changeFrench()}
            />
            <label for="French">French</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Vietnamese"
              name="Vietnamese"
              onChange={(event) => changeVietnamese()}
            />
            <label for="Vietnamese">Vietnamese</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Hmong"
              name="Hmong"
              onChange={(event) => changeHmong()}
            />
            <label for="Hmong">Hmong</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="OtherLanguage"
              name="OtherLanguage"
              onChange={(e) => changeIsLangChecked(event.target.checked)}
            />
            <label htmlFor="Other Pronouns">Other</label>
            <>
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
            </>
          </div>
        </div>

        <Link to="/StudentSubjects">

          <Button onClick={AddNewTutorInfo}>Save and Continue</Button>
        </Link>
      </div>
    </div>
  );
}

export default TutorInfo;
