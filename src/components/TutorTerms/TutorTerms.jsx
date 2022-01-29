import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentTerms with the name for the new component.
function StudentTerms(props) {
  
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Terms');

  const[tutorterms, setTutorTerms]= useState( false );

  const changeTutorTerms= ()=>{
    setTutorTerms(!tutorterms);
    console.log('in terms', tutorterms);
  }

  const AddTutorTerms =()=>{
    //package up new info in object
    const newTutorTerms = {
      tutorTerms: tutorterms,
    }

    let termserrors = false;
    if( (newTutorTerms.tutorTerms == false )){
      termserrors = true;
    }

    if (termserrors){alert('Please agree to the terms to submit your application.')}
    dispatch( {type:'ADD_TUTOR_TERMS', payload: newTutorTerms})
  }

  return (
    <div>
      <Header/>
      <div className= 'maincard'>
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

        <div>
          <input type="checkbox" id="Tutor Terms" name="Tutor Terms" onChange={(event)=>changeTutorTerms()}/>
          <label for="Tutor Terms">I understand</label>
        </div>
        {/* <p>{JSON.stringify(tutorterms)}</p> */}

        <Link to="/TutorInfo"><Button onClick={AddTutorTerms}>Submit</Button></Link>
        </div>
    </div>
  );
}

export default StudentTerms;
