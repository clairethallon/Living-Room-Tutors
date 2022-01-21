import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentTerms with the name for the new component.
function StudentTerms(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Terms');

  const[newStudentTerms, setNewStudentTerms]= useState('False');

  const changeStudentTerms= ()=>{
    console.log('in terms');
    setNewStudentTerms(event.target.value);
  }


  return (
    <div>
      <h2>{heading}</h2>

      <p>Living Room Tutors (LRT) is supporting communities in their efforts to mitigate the immediate 
        impact of school closures by facilitating the connections between volunteer student mentors/ tutors 
        and students/ mentees(tutees) who need support. This matching and tutoring service is offered at no 
        cost. Once a match is made, it is the responsibility of the tutor and tutee to plan a tutoring session 
        via Zoom, Google Hangouts, Skype or any other digital conferencing platform. If you, as a mentee/ tutee, 
        student requesting tutoring, agree to participate in online tutoring, LRT will provide the tutors 
        assigned to conduct the tutoring sessions with background information about the nature of the tutoring 
        session. This will enable the tutor to prepare for the tutoring session. LRT may also provide the tutor 
        with your contact information, such as a telephone number or e-mail address, to facilitate scheduling 
        a tutoring session. Once the match is made, it is the responsibility of the parents of the student mentee 
        to set up and oversee any conferences and determine if the tutoring sessions should occur. We take 
        safety very seriously and are taking all the possible precautions to prioritize the well-being and 
        protection of all who use this service. Living Room Tutors does not perform background checks on potential 
        mentors or mentees. We do not make any guarantees as to the quality of the mentorship/ tutoring provided 
        by our mentors. By using this service, you are agreeing to assume all risks connected to the participation 
        in the Living Room Tutors program match program and agree to not make a claim against Living Room Tutors, 
        its directors and volunteers for damages that result from the use of our services, however caused, as 
        a result of the student's participation.</p>

      <input type="radio" id="StudentTerms" name="StudentTerms" value="StudentTerms" onChange={(event)=>changeStudentTerms(event)}/>
        <label for="StudentTerms">I Understand and Agree</label>
      <input type="radio" id="StudentTerms" name="StudentTerms" value="StudentTerms" onChange={(event)=>changeStudentTerms(event)}/>
        <label for="StudentTerms">I do not agree and do not want to recieve tutoring services.</label>
    </div>
  );
}

export default StudentTerms;
