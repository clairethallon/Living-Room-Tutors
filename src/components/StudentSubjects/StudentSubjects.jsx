import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Header from '../Header/Header';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentSubjects with the name for the new component.
function StudentSubjects(props) {
  
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Subjects');

  const[newPrimarySubject, setNewPrimarySubject]= useState();
  const[newSecondarySubject, setNewSecondarySubject]= useState();
  const[newTertiarySubject, setNewTertiarySubject]= useState();
  const[newOtherInfo, setNewOtherInfo]= useState();
  const[newDetailedNeeds, setNewDetailedNeeds]= useState();


  const changePrimarySubject= ()=>{
    console.log('in new primary');
    setNewPrimarySubject(event.target.value);
  }

  const changeSecondarySubject= ()=>{
    console.log('in new secondary');
    setNewSecondarySubject(event.target.value);
  }

  const changeTertiarySubject= ()=>{
    console.log('in new tertiary');
    setNewTertiarySubject(event.target.value);
  }

  const changeOtherInfo= ()=>{
    console.log('in new other info');
    setNewOtherInfo(event.target.value);
  }

  const changeDetailedNeeds= ()=>{
    console.log('in new detailed needs');
    setNewDetailedNeeds(event.target.value);
  }


  const AddNewStudentSubjects =()=>{
    //package up new info in object
    const newStudentSubjects = {
      newPrimarySubject: newPrimarySubject,
      newSecondarySubject: newSecondarySubject,
      newTertiarySubject: newTertiarySubject,
      newOtherInfo: newOtherInfo,
      newDetailedNeeds: newDetailedNeeds,
    }

    if (newStudentSubjects.newPrimarySubject == null ||
        newStudentSubjects.newSecondarySubject == null ||
        newStudentSubjects.newTertiarySubject == null ||
        newStudentSubjects.newDetailedNeeds == "" || 
        newStudentSubjects.newDetailedNeeds == null)
    {alert('Please complete all required fields.')}

    dispatch( {type:'ADD_NEW_STUDENT_SUBJECTS', payload: newStudentSubjects})
  }


  return (
    <div>

      <Header/>

      <div className= 'maincard'>
      <p>details equals: {JSON.stringify(newDetailedNeeds)}</p>
      <h2>{heading}</h2>

      <div>
      <Form.Select aria-label="studentSubjects" onChange={(event)=>changePrimarySubject(event)}>
      <option>In what subjects does the student need the most support? (1st Choice)</option>
          <option value="K-5 Math">K-5 Math</option>
          <option value="K-5 Reading">K-5 Reading</option>
          <option value="K-5 English/Writing">K-5 English/Writing</option>
          <option value="K-5 Social Studies">K-5 Social Studies</option>
          <option value="K-5 Science">K-5 Science</option>
          <option value="6-8th Language Arts">6-8th Language Arts</option>
          <option value="6-8th Science">6-8th Science</option>
          <option value="6-8th Social Studies">6-8th Social Studies</option>
          <option value="Math: Pre-Algebra">Math: Pre-Algebra</option>
          <option value="Math: Algebra 1/Linear Algebra">Math: Algebra I/Linear Algebra</option>
          <option value="Math: Algebra II">Math: Algebra II</option>
          <option value="Math: Geometry">Math: Geometry</option>
          <option value="Math: Precalculus/Trigonometry">Math: Precalculus/Trigonometry</option>
          <option value="Science: Biology/Life Sciences">Science: Biology/Life Sciences</option>
          <option value="Science: Chemistry">Science: Chemistry</option>
          <option value="Science: Physics">Science: Physics</option>
          <option value="Science: Computer Science">Science: Computer Science</option>
          <option value="Language: Chinese">Language: Chinese </option>
          <option value="Language: Spanish">Language: Spanish</option>
          <option value="Language: French">Language: French</option>
          <option value="Language: German">Language: German</option>
          <option value="History: World History">History: World History</option>
          <option value="History: U.S. History">History: U.S. History</option>
          <option value="AP Honors Biology">AP Honors Biology</option>
          <option value="AP Honors Chemistry">AP Honors Chemistry</option>
          <option value="AP Honors Physics">AP Honors Physics</option>
          <option value="AP Honors Calculus AB">AP Honors Calculus AB</option>
          <option value="AP Honors Calculus BC">AP Honors Calculus BC</option>
          <option value="AP Honors Statistics">AP Honors Statistics</option>
          <option value="AP Honors Computer Science">AP Honors Computer Science</option>
          <option value="AP Honors English Literature and Composition">AP Honors English Literature and Composition</option>
          <option value="AP Honors English Language and Composition">AP Honors English Language and Composition</option>
          <option value="AP Honors Macroeconomics">AP Honors Macroeconomics</option>
          <option value="AP Honors Microeconomics">AP Honors Microeconomics</option>
          <option value="AP Honors Psychology">AP Honors Psychology</option>
          <option value="AP Honors United States History">AP Honors United States History</option>
          <option value="AP Honors Government and Politics">AP Honors Government and Politics</option>
          <option value="AP Honors Human Geography">AP Honors Human Geography</option>
          <option value="SAT Subject Tests">SAT Subject Tests</option>
          <option value="SAT Prep">SAT Prep</option>
          <option value="ACT Prep">ACT Prep</option>
          <option value="Other">Other</option>
          </Form.Select>
        </div>

        <div>
        <Form.Select aria-label="studentSubjects secondary" onChange={(event)=>changeSecondarySubject(event)}>
        <option>In what subjects does the student need the most support?</option>
          <option value="K-5 Math">K-5 Math</option>
          <option value="K-5 Reading">K-5 Reading</option>
          <option value="K-5 English/Writing">K-5 English/Writing</option>
          <option value="K-5 Social Studies">K-5 Social Studies</option>
          <option value="K-5 Science">K-5 Science</option>
          <option value="6-8th Language Arts">6-8th Language Arts</option>
          <option value="6-8th Science">6-8th Science</option>
          <option value="6-8th Social Studies">6-8th Social Studies</option>
          <option value="Math: Pre-Algebra">Math: Pre-Algebra</option>
          <option value="Math: Algebra 1/Linear Algebra">Math: Algebra I/Linear Algebra</option>
          <option value="Math: Algebra II">Math: Algebra II</option>
          <option value="Math: Geometry">Math: Geometry</option>
          <option value="Math: Precalculus/Trigonometry">Math: Precalculus/Trigonometry</option>
          <option value="Science: Biology/Life Sciences">Science: Biology/Life Sciences</option>
          <option value="Science: Chemistry">Science: Chemistry</option>
          <option value="Science: Physics">Science: Physics</option>
          <option value="Science: Computer Science">Science: Computer Science</option>
          <option value="Language: Chinese">Language: Chinese </option>
          <option value="Language: Spanish">Language: Spanish</option>
          <option value="Language: French">Language: French</option>
          <option value="Language: German">Language: German</option>
          <option value="History: World History">History: World History</option>
          <option value="History: U.S. History">History: U.S. History</option>
          <option value="AP Honors Biology">AP Honors Biology</option>
          <option value="AP Honors Chemistry">AP Honors Chemistry</option>
          <option value="AP Honors Physics">AP Honors Physics</option>
          <option value="AP Honors Calculus AB">AP Honors Calculus AB</option>
          <option value="AP Honors Calculus BC">AP Honors Calculus BC</option>
          <option value="AP Honors Statistics">AP Honors Statistics</option>
          <option value="AP Honors Computer Science">AP Honors Computer Science</option>
          <option value="AP Honors English Literature and Composition">AP Honors English Literature and Composition</option>
          <option value="AP Honors English Language and Composition">AP Honors English Language and Composition</option>
          <option value="AP Honors Macroeconomics">AP Honors Macroeconomics</option>
          <option value="AP Honors Microeconomics">AP Honors Microeconomics</option>
          <option value="AP Honors Psychology">AP Honors Psychology</option>
          <option value="AP Honors United States History">AP Honors United States History</option>
          <option value="AP Honors Government and Politics">AP Honors Government and Politics</option>
          <option value="AP Honors Human Geography">AP Honors Human Geography</option>
          <option value="SAT Subject Tests">SAT Subject Tests</option>
          <option value="SAT Prep">SAT Prep</option>
          <option value="ACT Prep">ACT Prep</option>
          <option value="Other">Other</option>
          </Form.Select>
        </div>

        <div>
        <Form.Select aria-label="studentSubjects tertiary" onChange={(event)=>changeTertiarySubject(event)}>
        <option>In what subjects does the student need the most support? (3rd Choice)</option>
          <option value="K-5 Math">K-5 Math</option>
          <option value="K-5 Reading">K-5 Reading</option>
          <option value="K-5 English/Writing">K-5 English/Writing</option>
          <option value="K-5 Social Studies">K-5 Social Studies</option>
          <option value="K-5 Science">K-5 Science</option>
          <option value="6-8th Language Arts">6-8th Language Arts</option>
          <option value="6-8th Science">6-8th Science</option>
          <option value="6-8th Social Studies">6-8th Social Studies</option>
          <option value="Math: Pre-Algebra">Math: Pre-Algebra</option>
          <option value="Math: Algebra 1/Linear Algebra">Math: Algebra I/Linear Algebra</option>
          <option value="Math: Algebra II">Math: Algebra II</option>
          <option value="Math: Geometry">Math: Geometry</option>
          <option value="Math: Precalculus/Trigonometry">Math: Precalculus/Trigonometry</option>
          <option value="Science: Biology/Life Sciences">Science: Biology/Life Sciences</option>
          <option value="Science: Chemistry">Science: Chemistry</option>
          <option value="Science: Physics">Science: Physics</option>
          <option value="Science: Computer Science">Science: Computer Science</option>
          <option value="Language: Chinese">Language: Chinese </option>
          <option value="Language: Spanish">Language: Spanish</option>
          <option value="Language: French">Language: French</option>
          <option value="Language: German">Language: German</option>
          <option value="History: World History">History: World History</option>
          <option value="History: U.S. History">History: U.S. History</option>
          <option value="AP Honors Biology">AP Honors Biology</option>
          <option value="AP Honors Chemistry">AP Honors Chemistry</option>
          <option value="AP Honors Physics">AP Honors Physics</option>
          <option value="AP Honors Calculus AB">AP Honors Calculus AB</option>
          <option value="AP Honors Calculus BC">AP Honors Calculus BC</option>
          <option value="AP Honors Statistics">AP Honors Statistics</option>
          <option value="AP Honors Computer Science">AP Honors Computer Science</option>
          <option value="AP Honors English Literature and Composition">AP Honors English Literature and Composition</option>
          <option value="AP Honors English Language and Composition">AP Honors English Language and Composition</option>
          <option value="AP Honors Macroeconomics">AP Honors Macroeconomics</option>
          <option value="AP Honors Microeconomics">AP Honors Microeconomics</option>
          <option value="AP Honors Psychology">AP Honors Psychology</option>
          <option value="AP Honors United States History">AP Honors United States History</option>
          <option value="AP Honors Government and Politics">AP Honors Government and Politics</option>
          <option value="AP Honors Human Geography">AP Honors Human Geography</option>
          <option value="SAT Subject Tests">SAT Subject Tests</option>
          <option value="SAT Prep">SAT Prep</option>
          <option value="ACT Prep">ACT Prep</option>
          <option value="Other">Other</option>
          </Form.Select>
        </div>

      <div>
        <h3>If you stated "other" for any one of your choices, please describe what support is needed:</h3>
        <input type="text" placeholder="OtherInfo" onChange={(event)=>changeOtherInfo(event)}></input>
        </div>

        <div>
        <h3>Please describe your needs in detail regarding the subject(s) you selected above:</h3>
        <p>The more detailed you are, the better we can find a tutor to fit your needs! For example: (AP Macroeconomics) I need help understanding Fiscal Policy; (K-5 math) I need help with understanding long division.</p>
        <input type="text" placeholder="Details of tutoring needs" onChange={(event)=>changeDetailedNeeds(event)}></input>
        </div>

        <Link to="/StudentAdditional" ><Button onClick={AddNewStudentSubjects}>Save and Continue</Button></Link>
        </div>
    </div>
  );
}

export default StudentSubjects;
