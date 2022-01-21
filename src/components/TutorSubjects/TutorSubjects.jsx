import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorSubjects with the name for the new component.
function TutorSubjects(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Terms');

  const[newTutorGrade, setNewTutorGrade]= useState();
  const[newTutorSubjects, setNewTutorSubjects]= useState();
  const[newTutorTime, setNewTutorTime]= useState();
 

  const changeTutorGrade= ()=>{
    console.log('in new grade');
    setNewTutorGrade(event.target.value);
  }

  const changeTutorSubjects= ()=>{
    console.log('in new grade');
    setNewTutorSubjects(event.target.value);
  }

  const changeTutorTime= ()=>{
    console.log('in new grade');
    setNewTutorTime(event.target.value);
  }

 

  return (
    <div>
      <h2>{heading}</h2>

      <h3>What grade levels are you comfortable tutoring/mentoring?</h3>
      {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR GRADE onChange={(event)=>changeTutorGrade(event)} */}
        <div>
          <input type="checkbox" id="Pre-K/Kindergarten" name="Pre-K/Kindergarten"/>
          <label for="Pre-K/Kindergarten">Pre-K/Kindergarten</label>
        </div>

        <div>
          <input type="checkbox" id="1st Grade" name="1st Grade"/>
          <label for="1st Grade">1st Grade</label>
        </div>

        <div>
          <input type="checkbox" id="2nd Grade" name="2nd Grade"/>
          <label for="2nd Grade">2nd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="3rd Grade" name="3rd Grade"/>
          <label for="3rd Grade">3rd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="4th Grade" name="4th Grade"/>
          <label for="4th Grade">4th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="5th Grade" name="5th Grade"/>
          <label for="5th Grade">5th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="6th Grade" name="6th Grade"/>
          <label for="6th Grade">6th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="7th Grade" name="7th Grade"/>
          <label for="7th Grade">7th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="8th Grade" name="8th Grade"/>
          <label for="8th Grade">8th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="9th Grade" name="9th Grade"/>
          <label for="9th Grade">9th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="10th Grade" name="10th Grade"/>
          <label for="10th Grade">10th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="11th Grade" name="11th Grade"/>
          <label for="11th Grade">11th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="12th Grade" name="12th Grade"/>
          <label for="12th Grade">12th Grade</label>
        </div>


        <h3>What subjects are you comfortable tutoring?</h3>
        {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR GRADE onChange={(event)=>changeTutorSujects(event)} */}


        



    </div>
  ); 
}

export default TutorSubjects;
