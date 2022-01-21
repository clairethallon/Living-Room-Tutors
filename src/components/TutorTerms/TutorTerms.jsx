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

  const[newTutorTerms, setNewTutorTerms]= useState('False');

  const changeTutorTerms= ()=>{
    console.log('in terms');
    setNewTutorTerms(event.target.value);
  }

  return (
    <div>
      <h2>{heading}</h2>

      <p>Living Room Tutors (LRT) is supporting communities in their efforts to mitigate 
        the immediate impact of school closures by facilitating the connections between 
        volunteer student mentors/ tutors and students/ mentees(tutees) who need support. 
        This matching and tutoring service is offered at no cost. Once a match is made, 
        it is the responsibility of the tutor and tutee to plan a tutoring session via Zoom, 
        Google Hangouts, Skype or any other digital conferencing platform. By agreeing to 
        become a volunteer tutor, you grant permission to allow LRT to share your personal 
        information, such as a telephone number or email, with your tutee in order to 
        facilitate scheduling a tutoring session. Once the match is made, it is the 
        responsibility of the parents of the student mentee to set up and oversee any 
        conferences and determine if the tutoring sessions should occur. We take safety very 
        seriously and are taking all the possible precautions to prioritize the well-being and 
        protection of all who use this service. Living Room Tutors does not perform background 
        checks on potential mentors or mentees. We do not make any guarantees as to the quality 
        of the mentorship/ tutoring provided by our mentors. By using this service, you are 
        agreeing to assume all risks connected to the participation in the Living Room Tutors 
        program match program and agree to not make a claim against Living Room Tutors, its 
        directors and volunteers for damages that result from the use of our services, however 
        caused, as a result of the student participation.</p>

      <input type="radio" id="TutorTerms" name="TutorTerms" value="TutorTerms" onChange={(event)=>changeTutorTerms(event)}/>
        <label for="TutorTerms">I Understand and Agree</label>
      <input type="radio" id="TutorTerms" name="TutorTerms" value="TutorTerms" onChange={(event)=>changeTutorTerms(event)}/>
        <label for="TutorTerms">I do not agree and do not want to provide tutoring services.</label>

    </div>
  );
}

export default StudentTerms;
