import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import StudentModal from "../StudentModal/StudentModal";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentTerms with the name for the new component.
function StudentTerms(props) {
  const dispatch = useDispatch();

  const studentInfo = useSelector(
    (store) => store.newStudent.newstudentInfoReducer
  );

  const studentAdditional = useSelector(
    (store) => store.newStudent.newstudentAdditionalReducer
  );
  
  const studentSubjects = useSelector(
    (store) => store.newStudent.newstudentSubjectReducer
  );

  const [studentterms, setStudentTerms] = useState(false);
  const [ClikcableButton, setClikcableButton] = useState(false);

  const changeStudentTerms = () => {
    console.log('in tutor terms')

    if (event.target.value) {
      setClikcableButton(true);
    } else {
      setClikcableButton(false);
    }

    setStudentTerms(!studentterms);
  };

  //package up new info in object

  const newStudentObject = {
    Spanish: studentInfo.Spanish,
    Somali: studentInfo.Somali,
    Arabic: studentInfo.Arabic,
    Chinese: studentInfo.Chinese,
    Tagalog: studentInfo.Tagalog,
    French: studentInfo.French,
    Vietnamese: studentInfo.Vietnamese,
    Hmong: studentInfo.Hmong,
    Other: studentInfo.otherLanguage,
    firstName: studentInfo.firstName,
    lastName: studentInfo.lastName,
    pronouns: studentInfo.Pronouns,
    studentOrGuardian: studentInfo.submitter,
    emailGuardian: studentInfo.parentEmail,
    emailStudent: studentInfo.email,
    phone: studentInfo.phone,
    gradeLevel: studentInfo.grade,
    school: studentInfo.school,
    subject1: studentSubjects.newPrimarySubject,
    subject2: studentSubjects.newSecondarySubject,
    subject3: studentSubjects.newTertiarySubject,
    subjectDetails: studentSubjects.newDetailedNeeds,
    miscInfo: studentAdditional.newAdditionalInfo,
  };

  // const sendNewStudent = () => {
  //   let termserrors = false;
  //   if (studentterms == false) {
  //     termserrors = true;
  //   }

  return (
    <div>
      <Header />
      <div className="maincard">
        <p>
          Living Room Tutors (LRT) is supporting communities in their efforts to
          mitigate the immediate impact of school closures by facilitating the
          connections between volunteer student mentors/ tutors and students/
          mentees(tutees) who need support. This matching and tutoring service
          is offered at no cost. Once a match is made, it is the responsibility
          of the tutor and tutee to plan a tutoring session via Zoom, Google
          Hangouts, Skype or any other digital conferencing platform. If you, as
          a mentee/ tutee, student requesting tutoring, agree to participate in
          online tutoring, LRT will provide the tutors assigned to conduct the
          tutoring sessions with background information about the nature of the
          tutoring session. This will enable the tutor to prepare for the
          tutoring session. LRT may also provide the tutor with your contact
          information, such as a telephone number or e-mail address, to
          facilitate scheduling a tutoring session. Once the match is made, it
          is the responsibility of the parents of the student mentee to set up
          and oversee any conferences and determine if the tutoring sessions
          should occur. We take safety very seriously and are taking all the
          possible precautions to prioritize the well-being and protection of
          all who use this service. Living Room Tutors does not perform
          background checks on potential mentors or mentees. We do not make any
          guarantees as to the quality of the mentorship/ tutoring provided by
          our mentors. By using this service, you are agreeing to assume all
          risks connected to the participation in the Living Room Tutors program
          match program and agree to not make a claim against Living Room
          Tutors, its directors and volunteers for damages that result from the
          use of our services, however caused, as a result of the student's
          participation.
        </p>

        <div>
          <input
            type="checkbox"
            id="Student Terms"
            name="Student Terms"
            onChange={(event) => changeStudentTerms()}
          />
          <label for="Student Terms">I understand</label>
        </div>
        {/* <p>{JSON.stringify(studentterms)}</p> */}

        {/* <Link to="/StudentInfo">
          <Button onClick={sendNewStudent}>Submit</Button>
        </Link> */}

        <div>
        {ClikcableButton?
        (<>
          <StudentModal newStudentObject={newStudentObject}/>
          </>):(<> 
          <p>Please Agree to continue.</p></>)   
        }
          
        </div>
      </div>
    </div>
  );
}

export default StudentTerms;
