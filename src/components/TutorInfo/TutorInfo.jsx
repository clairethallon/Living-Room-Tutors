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

  const[newTutorName, setNewTutorName]= useState();
  const[newTutorEmail, setNewEmail]= useState();
  const[newTutorPhone, setNewTutorPhone]= useState();
  const[newGrade, setNewGrade]= useState();
  const[newTutorSchool, setNewTutorSchool]= useState();

      const changeTutorName= ()=>{
        console.log('in new tutor name');
        setNewTutorName(event.target.value);
    }

    const changeTutorEmail= ()=>{
      console.log('in new tutor email');
      setNewEmail(event.target.value);
    }

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
        name: newTutorName,
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


      <h3>What is your name? (First and Last)</h3>
      <input type="text" placeholder="Tutor Name" onChange={(event)=>changeTutorName(event)}></input>


      <h3>What is your email address?</h3>
      <p>Please confirm the email address you enter is correct. Email is our primary way of communicating with our tutors and tutees, so it is crucial that the email address that you provide is correct.</p>
      <input type="text" placeholder="Tutor Email" onChange={(event)=>changeTutorEmail(event)}></input>
      

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
