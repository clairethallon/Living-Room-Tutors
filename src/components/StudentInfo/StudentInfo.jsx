import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorInfo with the name for the new component.
function TutorInfo(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Info');

  const[newSubmitter, setSubmitter]= useState();
  const[newFirstName, setNewFirstName]= useState();
  const[newLastName, setNewLastName]= useState();
  const[newParentEmail, setNewParentEmail]= useState();
  const[newEmail, setNewEmail]= useState();

  // ******** PRONOUN CHECK BOXES **************
  const [sheHerPronoun, setsheHerPronoun] = useState( 'true' );
  const [heHimPronoun, setheHimPronoun] = useState( 'true' );
  const [theyThemPronoun, settheyThemPronoun] = useState( 'true' );

  const[newPhone, setNewPhone]= useState();
  const[newSchool, setNewSchool]= useState();
  const[newGrade, setNewGrade]= useState();

    const changeSubmitter= ()=>{
    console.log('in new submitter');
    setSubmitter(event.target.value);
}
  
    const changefirstName= ()=>{
        console.log('in new name');
        setNewFirstName(event.target.value);
    }

    const changelastName= ()=>{
      console.log('in new name');
      setNewLastName(event.target.value);
  }

    const changeParentEmail= ()=>{
      console.log('in new parent email');
      setNewParentEmail(event.target.value);
    }

    const changeEmail= ()=>{
      console.log('in new email');
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

    

    const changePhone= ()=>{
      console.log('in new phone');
      setNewPhone(event.target.value);
    }

    const changeSchool= ()=>{
      console.log('in new school');
      setNewSchool(event.target.value);
    }

    const changeGrade= ()=>{
      console.log('in new grade');
      setNewGrade(event.target.value);
    }


    const AddNewTutorInfo =()=>{
      //package up new info in object
      const newTutorInfo = {
        submitter: newSubmitter,
        firstName: newFirstName,
        lastName: newLastName,
        parentEmail: newParentEmail,
        email: newEmail,
        phone: newPhone,
        school: newSchool,
        grade: newGrade,
      }
      dispatch( {type:'ADD_NEW_STUDENT_INFO', payload: newTutorInfo})

    }


  return (
    <div>
      <h2>{heading}</h2>

      <div>
        <p>Are you a Student or a parent/guardian/teacher registering on behalf of a student?</p>
        <input type="radio" id="student" name="studentOrParent" value="Student" onChange={(event)=>changeSubmitter(event)}/>
          <label for="Student">I am a student</label>
          <input type="radio" id="parentGuardian" name="studentOrParent" value="ParentOrGuardian" onChange={(event)=>changeSubmitter(event)}/>
          <label for="ParentOrGuardian">I am a Parent or Guardian registering a Student</label>
      </div>

      <div>
      <input type="text" placeholder="Parent/Guardian's Email" onChange={(event)=>changeParentEmail(event)}></input>
      </div>

      <div>
      <input type="text" placeholder="Student Email" onChange={(event)=>changeEmail(event)}></input>
      </div>

      <div>
      <input type="text" placeholder="Student firstName" onChange={(event)=>changefirstName(event)}></input>
      <input type="text" placeholder="Student lastName" onChange={(event)=>changelastName(event)}></input>
      </div>

      <p>What are the Student's preferred pronouns?</p>
        {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR LANGUAGE onChange={(event)=>changeGrade(event)} */}
        <div>
          <input type="checkbox" id="She/Her" name="She/Her" onChange={(event)=>changesheHerPronoun(event.target.value)}/>
          <label for="She/Her">She/Her</label>
        </div> 
        <div>
          <input type="checkbox" id="He/Him" name="He/Him" onChange={(event)=>changeheHimPronoun(event.target.value)}/>
          <label for="He/Him">He/Him</label>
        </div>
        <div>
          <input type="checkbox" id="They/Them" name="They/Them" onChange={(event)=>changetheyThemPronoun(event.target.value)}/>
          <label for="They/Them">They/Them</label>
        </div>


      <div>
      <input type="text" placeholder="Student Phone Number" onChange={(event)=>changePhone(event)}></input>
      </div>

      <div>
      <input type="text" placeholder="Student School" onChange={(event)=>changeSchool(event)}></input>
      </div>

      <label for="gradeLevel">Choose a Grade Level:</label>

        <select name="gradeLevel" onChange={(event)=>changeGrade(event)} title="Student's Current Grade Level">
          <option value="Pre-K">Pre-K</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
          <option value="6th Grade">6th Grade</option>
          <option value="7th Grade">7th Grade</option>
          <option value="8th Grade">8th Grade</option>
          <option value="9th Grade">9th Grade</option>
          <option value="10th Grade">10th Grade</option>
          <option value="11th Grade">11th Grade</option>
          <option value="12th Grade">12th Grade</option>
        </select>

        <p>Is the student an English language learner? If so, what is their preferred language?</p>
        {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR LANGUAGE onChange={(event)=>changeGrade(event)} */}
        <div>
          <input type="checkbox" id="Spanish" name="Spanish"/>
          <label for="Spanish">Spanish</label>
        </div>

        <div>
          <input type="checkbox" id="Somali" name="Somali"/>
          <label for="Somali">Somali</label>
        </div>

        <div>
          <input type="checkbox" id="Arabic" name="Arabic"/>
          <label for="Arabic">Arabic</label>
        </div>

        <div>
          <input type="checkbox" id="Chinese" name="Chinese"/>
          <label for="Chinese">Chinese</label>
        </div>

        <div>
          <input type="checkbox" id="Tagalog" name="Tagalog"/>
          <label for="Tagalog">Tagalog</label>
        </div>

        <div>
          <input type="checkbox" id="French" name="French"/>
          <label for="French">French</label>
        </div>

        <div>
          <input type="checkbox" id="Vietnamese" name="Vietnamese"/>
          <label for="Vietnamese">Vietnamese</label>
        </div>

        <div>
          <input type="checkbox" id="English" name="English"/>
          <label for="English">English</label>
        </div>

      <button onClick={AddNewTutorInfo}>Add A New Student Info</button>
      
    </div>
  );
}

export default TutorInfo;
