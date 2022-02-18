import React, { useEffect, useState } from "react";
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

  const presenting = true;

  useEffect(() => {
    scrollToTop();
    checkReducer(newstudentInfo);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const checkReducer = (newstudentInfo) => {
    console.log("in checkReducer", newstudentInfo);
    if (newstudentInfo.length == 0) {
      console.log("EMPTY");
      return false;
    } else {
      setSubmitter(newstudentInfo.submitter);
      setNewFirstName(newstudentInfo.firstName);
      setNewLastName(newstudentInfo.lastName);
      setNewParentEmail(newstudentInfo.parentEmail);
      setNewEmail(newstudentInfo.email);
      setPronouns(newstudentInfo.Pronouns);
      setNewPhone(newstudentInfo.phone);
      setNewSchool(newstudentInfo.school);
      setNewGrade(newstudentInfo.grade);
      setSpanish(newstudentInfo.Spanish);
      setSomali(newstudentInfo.Somali);
      setArabic(newstudentInfo.Arabic);
      setChinese(newstudentInfo.Chinese);
      setHmong(newstudentInfo.Hmong);
      setFrench(newstudentInfo.French);
      setVietnamese(newstudentInfo.Vietnamese);
      setotherLanguage(newstudentInfo.otherLanguage);
      setTagalog(newstudentInfo.Tagalog);
      if (
        newstudentInfo.otherLanguage != undefined &&
        newstudentInfo.otherLanguage != ""
      ) {
        console.log("WE IN HERE");
        setIsLangChecked(true);
      }
    }
  };
  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const [newSubmitter, setSubmitter] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newParentEmail, setNewParentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [Pronouns, setPronouns] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSchool, setNewSchool] = useState("");
  const [newGrade, setNewGrade] = useState("");

  // ******** LANGUAGE CHECK BOXES **************
  const [Spanish, setSpanish] = useState(false);
  const [Somali, setSomali] = useState(false);
  const [Arabic, setArabic] = useState(false);
  const [Chinese, setChinese] = useState(false);
  const [Tagalog, setTagalog] = useState(false);
  const [French, setFrench] = useState(false);
  const [Vietnamese, setVietnamese] = useState(false);
  const [Hmong, setHmong] = useState(false);
  const [IsLangChecked, setIsLangChecked] = useState(false);
  const [otherLanguage, setotherLanguage] = useState();
  // ******** LANGUAGE CHECK BOXES **************

  // ******** NEWSTUDENTINFO OBJECT **************
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

  const setDefaults = () => {
    if (presenting) {
      setSubmitter("parentOrGuardian");
      setNewFirstName("Molly");
      setNewLastName("Randall");
      setNewParentEmail("mollysmom@molly.com");
      setPronouns("she/her");
      setNewPhone("1234567890");
      setNewSchool("franklin elementary school");
      setNewGrade("2nd");
      setArabic(true);
    }
  };

  const changeSubmitter = () => {
    console.log("in new submitter", event.target.value);
    setSubmitter(event.target.value);
  };

  const changefirstName = () => {
    console.log("in new name", event.target.value);
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

    // if (newStudentInfo.submitter = "ParentOrGuardian" && newStudentInfo.parentEmail === "" ){
    //   return alert("Please include a Parent or Guardian email.")}
    //   else if (newStudentInfo.submitter = "ParentOrGuardian" && newStudentInfo.parentEmail === null ){
    //     return alert("Please include a Parent or Guardian email.")}
    //     else if(newStudentInfo.submitter = "ParentOrGuardian" && newStudentInfo.parentEmail === undefined){
    //       return alert("Please include a Parent or Guardian email.")}

    // let parent = false
    // if (newStudentInfo.submitter = "ParentOrGuardian"){
    //   parent === true }

    // let parentEmail = false
    // if(newStudentInfo.parentEmail === "" || newStudentInfo.parentEmail === null || newStudentInfo.parentEmail === undefined ){
    //   parentEmail === true
    // }

    if (
      newStudentInfo.submitter == "" ||
      newStudentInfo.submitter == null ||
      newStudentInfo.firstName == "" ||
      newStudentInfo.firstName == null ||
      newStudentInfo.lastName == "" ||
      newStudentInfo.lastName == null ||
      // newStudentInfo.email == "" ||
      // newStudentInfo.email == null ||
      newStudentInfo.phone == "" ||
      newStudentInfo.phone == null ||
      newStudentInfo.school == "" ||
      newStudentInfo.school == null ||
      newStudentInfo.grade == "" ||
      newStudentInfo.grade == null ||
      (newStudentInfo.submitter == "ParentOrGuardian" &&
        (newStudentInfo.parentEmail === "" ||
          newStudentInfo.parentEmail === null ||
          newStudentInfo.parentEmail === undefined)) ||
      (newStudentInfo.submitter == "Student" &&
        (newStudentInfo.email === "" ||
          newStudentInfo.email === null ||
          newStudentInfo.email === undefined))
    ) {
      return alert(
        "At least one required field was empty. Please fill in the required fields before continuing."
      );
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
          <div className="formQandA" onClick={setDefaults}>
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
                checked={newSubmitter == "Student"}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={newSubmitter == "ParentOrGuardian"}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
            >
              <Form.Control
                type="GuardianEmail"
                placeholder="GuardianEmail"
                value={newParentEmail}
                defaultValue={newParentEmail}
                onChange={(event) => changeParentEmail(event)}
              />
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
            >
              <Form.Control
                type="StudentEmail"
                placeholder="Student Email"
                value={newEmail}
                defaultValue={newEmail}
                onChange={(event) => changeEmail(event)}
              />
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
            >
              <Form.Control
                type="StudentPhone"
                placeholder="Student's Phone Number"
                defaultValue={newPhone}
                value={newPhone}
                onChange={(event) => changePhone(event)}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>
              What is the student's name?{" "}
              <span className="requiredField"> *</span>
            </p>
            <FloatingLabel
              controlID="StudentFirstName"
              label="Student's First Name"
              className="formInput firstName"
            >
              <Form.Control
                type="StudentFirstName"
                placeholder="Student First Name"
                defaultValue={newFirstName}
                value={newFirstName}
                onChange={(event) => changefirstName(event)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlID="StudentLastName"
              label="Student's Last Name"
              className="formInput"
            >
              <Form.Control
                type="StudentLastName"
                placeholder="Student Last Name"
                defaultValue={newLastName}
                value={newLastName}
                onChange={(event) => changelastName(event)}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <p>What are the Student's pronouns?</p>
            <FloatingLabel
              controlID="Pronouns"
              label="Student's Pronouns Ex:She/Her"
              className="formInput"
            >
              <Form.Control
                type="Pronouns"
                placeholder="Pronouns"
                defaultValue={Pronouns}
                value={Pronouns}
                onChange={(event) => changePronouns(event)}
              />
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
            >
              <Form.Control
                type="StudentSchool"
                placeholder="Student's School"
                defaultValue={newSchool}
                value={newSchool}
                onChange={(event) => changeSchool(event)}
              />
            </FloatingLabel>
          </div>

          <div className="formQandA">
            <label className="customLabel" htmlFor="gradeLevel">
              What is the student's current grade level?{" "}
              <span className="requiredField"> *</span>
            </label>

            <Form.Select
              id="gradeLevel"
              className="selectGradeDropdown"
              aria-label="gradeLevel"
              value={newGrade}
              onChange={(event) => changeGrade(event)}
              defaultValue={newGrade}
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
                checked={Spanish}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Somali}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Arabic}
                onChange={(event) => changeArabic()}
                checked={Arabic}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Chinese}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Tagalog}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={French}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Vietnamese}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={Hmong}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
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
                checked={IsLangChecked}
              />

              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="Other"
              >
                Other
              </Form.Check.Label>

              <fieldset disabled={IsLangChecked == false}>
                <FloatingLabel
                  controlID="OtherLanguage"
                  label="Other Language"
                  className="formInput"
                  onChange={(event) => changeotherLangauge(event)}
                >
                  <Form.Control
                    type="OtherLanguage"
                    placeholder="Other Language"
                    defaultValue={otherLanguage}
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
