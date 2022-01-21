import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentAdditional with the name for the new component.
function StudentAdditional(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Additional Info');

  const[newTutorReference, setNewTutorReference]= useState();
  const[newTutorSecondaryReference, setNewTutorSecondaryReference]= useState();
  const[newutorAdditionalInfo, setNewTutorAdditionalInfo]= useState();

  const changeTutorReference= ()=>{
    console.log('in time reference');
    setNewTutorReference(event.target.value);
  }

  const changeTutorSecondaryReference= ()=>{
    console.log('in secondary reference');
    setNewTutorSecondaryReference(event.target.value);
  }

  const changeTutorAdditionalInfo= ()=>{
    console.log('in additional info');
    setNewTutorAdditionalInfo(event.target.value);
  }

  return (
    <div>
      <h2>{heading}</h2>

      <h3>Please provide the name and contact information, either phone or email, 
        of someone who can attest to your tutoring ability: </h3>
      <p>LRT is looking for tutors who will represent us in a professional manner, who 
        are flexible and patient, who are comfortable communicating with tutees and their 
        parents, who will encourage and foster the academic advancement of their pupil, 
        and who will show maturity. Your reference can be a parent, teacher, mentor, co-worker, 
        boss, or anyone else who can attest to those qualities.
      </p>
      <input type="text" placeholder="Tutor Reference" onChange={(event)=>changeTutorReference(event)}></input>

      <h3>Please provide the name and contact information, either phone or email, 
        of a second person who can attest to your tutoring ability.</h3>
      <p>LRT is looking for tutors who will represent us in a professional manner, who 
        are flexible and patient, who are comfortable communicating with tutees and their 
        parents, who will encourage and foster the academic advancement of their pupil, 
        and who will show maturity. Your reference can be a parent, teacher, mentor, co-worker, 
        boss, or anyone else who can attest to those qualities.
        </p>
        <input type="text" placeholder="Tutor Secondary Reference" onChange={(event)=>changeTutorSecondaryReference(event)}></input>

      <h3>Is there any additional information you would like to provide?</h3>
      <input type="text" placeholder="Additional Info" onChange={(event)=>changeTutorAdditionalInfo(event)}></input>

      
    </div>
  );
}

export default StudentAdditional;
