import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorAvailability with the name for the new component.
function TutorAvailability(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Availability');

  const[newTimeCommitments, setNewTimeCommitment]= useState();
  const[newTuteeAmount, setNewTuteeAmount]= useState();

  const changeTimeCommitment= ()=>{
    console.log('in time commitment');
    setNewTimeCommitment(event.target.value);
  }

  const changeTuteeAmount= ()=>{
    console.log('in tutee amount');
    setNewTuteeAmount(event.target.value);
  }

  return (
    <div>
      <h2>{heading}</h2>

      <h3>How much time are you able to devote to tutoring? </h3>
      <p>We understand things may change week-by-week, so try your best to give us a good estimate. 
          Please also note that you must tutor for a minimum of 30 minutes a week to maintain active volunteer status.</p>

          <select name="timeCommitment" onChange={(event)=>changeTimeCommitment(event)} title="Student's Current Grade Level">
          <option value="Pre-K">Pre-K</option>
          <option value="30 minutes to an 1 hour">30 minutes to an 1 hour</option>
          <option value="1-2 hours">1-2 hours</option>
          <option value="2-3 hours">2-3 hours</option>
          <option value="3-4 hours">3-4 hours</option>
          <option value="4-5 hours">4-5 hours</option>
          <option value="5+ hours">5+ hours</option>
        </select>


        <h3>How many tutees would you prefer to be assigned to you?</h3>
        <p>We try to assign one consistent tutor to every tutee. However, 
          some tutors want to devote more time into LRT and thus request to 
          mentor multiple tutees. You can always start off with one and reach 
          out to livingroomtutor@gmail.com to change your preferences.</p>
          <select name="TuteeAmount" onChange={(event)=>changeTuteeAmount(event)} title="How Many Tutees?">
          <option value="1">1</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
        </select>


    </div>
  );
}

export default TutorAvailability;
