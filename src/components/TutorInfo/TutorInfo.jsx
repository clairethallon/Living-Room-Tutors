import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentInfo with the name for the new component.
function StudentInfo(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Info');

  const[newTutorFirstName, setNewTutorFirstName]= useState();
  const[newTutorLastName, setNewTutorLastName]= useState();
  const[newTutorEmail, setNewEmail]= useState();

  // ******** PRONOUN CHECK BOXES **************
  const [sheHerPronoun, setsheHerPronoun] = useState( false );
  const [heHimPronoun, setheHimPronoun] = useState( false );
  const [theyThemPronoun, settheyThemPronoun] = useState( false );
   // ******** PRONOUN CHECK BOXES **************

  const[newTutorPhone, setNewTutorPhone]= useState();
  const[newGrade, setNewGrade]= useState();
  const[newTutorSchool, setNewTutorSchool]= useState();

      const changeTutorFirstName= ()=>{
        console.log('in new tutor first name');
        setNewTutorFirstName(event.target.value);
    }

    const changeTutorLastName= ()=>{
      console.log('in new tutor last name');
      setNewTutorLastName(event.target.value);
  }

    const changeTutorEmail= ()=>{
      console.log('in new tutor email');
      setNewEmail(event.target.value);
    }

    // ******** PRONOUN CHECK BOXES **************
    const changesheHerPronoun = () => {
      setsheHerPronoun(!sheHerPronoun);
      console.log('she/her statues:', sheHerPronoun)
    }

    const changeheHimPronoun = () => {
      setheHimPronoun(!heHimPronoun);
      console.log('he/him statues:', heHimPronoun)
    }

    const changetheyThemPronoun = () => {
      settheyThemPronoun(!theyThemPronoun);
      console.log('he/him statues:', theyThemPronoun)
    }
    // ******** END END END END END**************

    const changeTutorPhone= ()=>{
      console.log('in new tutor phone');
      setNewTutorPhone(event.target.value);
    }

    const changeTutorGrade= ()=>{ 
      console.log('in new tutor grade');
      setNewGrade(event.target.value);
    }

    const changeTutorSchool= ()=>{ 
      console.log('in new tutor school');
      setNewTutorSchool(event.target.value);
    }


    const AddNewTutorInfo =()=>{
      //package up new info in object
      const newStudentInfo = {
        firstName: newTutorFirstName,
        lastName: newTutorLastName,
        email: newTutorEmail,
        phone: newTutorPhone,
        grade: newGrade,
        school: newTutorSchool,
      }
      dispatch( {type:'ADD_NEW_STUDENT_INFO', payload: newStudentInfo})

    }


  return (
    <div>
      <h2>{heading}</h2>

      <div>
        <h3>What is your name? (First and Last)</h3>
        <input type="text" placeholder="Tutor First Name" onChange={(event)=>changeTutorFirstName(event)}></input>
        <input type="text" placeholder="Tutor Last Name" onChange={(event)=>changeTutorLastName(event)}></input>
      </div>

      <div>
      <h3>What is your email address?</h3>
      <p>Please confirm the email address you enter is correct. Email is our primary way of communicating with our tutors and tutees, so it is crucial that the email address that you provide is correct.</p>
      <input type="text" placeholder="Tutor Email" onChange={(event)=>changeTutorEmail(event)}></input>
      </div>

      <div>
      <p>What are your preferred pronouns?</p>
        <p>{JSON.stringify(sheHerPronoun)}</p>
        <div>
          <input type="checkbox" id="She/Her" name="She/Her" onChange={(event)=>changesheHerPronoun()}/>
          <label for="She/Her">She/Her</label>
        </div> 
        <div>
          <input type="checkbox" id="He/Him" name="He/Him" onChange={(event)=>changeheHimPronoun()}/>
          <label for="He/Him">He/Him</label>
        </div>
        <div>
          <input type="checkbox" id="They/Them" name="They/Them" onChange={(event)=>changetheyThemPronoun()}/>
          <label for="They/Them">They/Them</label>
        </div>
      </div>
      

      <h3>What is your phone number?</h3>
      <input type="text" placeholder="Tutor Phone Number" onChange={(event)=>changeTutorPhone(event)}></input>

      <div>
      <label for="gradeLevel">What is your current grade level?</label>
        <select name="tutorGradeLevel" onChange={(event)=>changeTutorGrade(event)} title="Tutor's Current Grade Level">
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="College">I'm in College</option>
        </select>
        </div>

        <div>
        <label for="tutorSchool">Where do you go to school?</label>
        <select name="tutorSchool" onChange={(event)=>changeTutorSchool(event)} title="Tutor's Current School">
          <option value="Mayo High School">Mayo High School</option>
          <option value="John Marshall High School">John Marshall High School</option>
          <option value="Century High School">Century High School</option>
          <option value="Lourdes High School">Lourdes High School</option>
          <option value="Byron High School">Byron High School</option>
          <option value="Dover-Eyota High School">Dover-Eyota High School</option>
          <option value="Stewertville High School">Stewertville High School</option>
          <option value="College">I'm in College</option>
          <option value="Other">Other</option>
        </select>
        </div>

      <button onClick={AddNewTutorInfo}>Add A New Tutor Info</button>
    </div>
  );
}

export default StudentInfo;
