import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Header from '../Header/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function StudentSubjects(props) {
  
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const[newPrimarySubject, setNewPrimarySubject]= useState();
  const[changeOtherField, setOtherPrimaryField]= useState(false);
  
  const[newSecondarySubject, setNewSecondarySubject]= useState();
  const[changeOtherSecondaryField, setOtherSecondaryField]= useState(false);

  const[newTertiarySubject, setNewTertiarySubject]= useState();
  const[changeOtherTertiaryField, setOtherTertiaryField]= useState(false);
  
  const[newOtherInfo, setNewOtherInfo]= useState();
  const[newDetailedNeeds, setNewDetailedNeeds]= useState();

// ************ Primary Subject Change ************
  const changePrimarySubject= ()=>{
    console.log('in new primary');

    if(event.target.value == 'Other')
    {setOtherPrimaryField(true)}
    else{setOtherPrimaryField(false)}

    setNewPrimarySubject(event.target.value);
  }

  const changeOtherPrimarySubject= ()=>{
    console.log('in other school');
    setNewPrimarySubject(event.target.value);
  }

// ************ Secondary Subject Change ************
  const changeSecondarySubject= ()=>{
    console.log('in new secondary');

    if(event.target.value == 'Other')
    {setOtherSecondaryField(true)}
    else{setOtherSecondaryField(false)}

    setNewSecondarySubject(event.target.value);
  }

  const changeOtherSecondarySubject= ()=>{
    console.log('in other school');
    setNewSecondarySubject(event.target.value);
  }

  // ************ Tertiary Subject Change ************
  const changeTertiarySubject= ()=>{
    console.log('in new tertiary');

    if(event.target.value == 'Other')
    {setOtherTertiaryField(true)}
    else{setOtherTertiaryField(false)}

    setNewTertiarySubject(event.target.value);
  }

  const changeOtherTertiarySubject= ()=>{
    console.log('in other school');
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
      <div className= 'maincard'>
        <Header/>

      <>
      <FloatingLabel controlId="primarySubject" label="Student's 1st Choice" onChange={(event)=>changePrimarySubject(event)}>
        <Form.Select aria-label="Student's 1st Choice">
        <option>In what subject does the student need the most support? (1st Choice)</option>
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
      </FloatingLabel>
        { changeOtherField? 
          <>
            <FloatingLabel controlID="OtherSchool" label="Other Subject" className="OtherSubject" onChange={(event)=>changeOtherPrimarySubject(event)}>
              <Form.Control type="OtherSubject" placeholder="OtherSubject"/>
            </FloatingLabel> 
          </>
          : 
          <> </>
        }
      </>


      <>
      <FloatingLabel controlId="secondarySubject" label="Student's 2nd Choice" onChange={(event)=>changeSecondarySubject(event)}>
        <Form.Select aria-label="Student's 2nd Choice">
          <option>In what additional subject does the student need support? (2nd Choice)</option>
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
      </FloatingLabel>
        { changeOtherSecondaryField? 
          <>
            <FloatingLabel controlID="OtherSecondarySchool" label="Other Subject (2nd Choice)" className="OtherSecondarySchool" onChange={(event)=>changeOtherSecondarySubject(event)}>
              <Form.Control type="OtherSecondarySchool" placeholder="Other Subject (2nd Choice)"/>
            </FloatingLabel> 
          </>
          : 
          <> </>
        }
      </>


     <>
      <FloatingLabel controlId="tertiarySubject" label="Student's 3rd Choice" onChange={(event)=>changeTertiarySubject(event)}>
        <Form.Select aria-label="Student's 3rd Choice">
          <option>In what additional subject does the student need support? (3rd Choice)</option>
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
      </FloatingLabel>
        { changeOtherTertiaryField? 
          <>
            <FloatingLabel controlID="OtherTertiarySchool" label="Other Subject (3rd Choice)" className="OtherTertiarySchool" onChange={(event)=>changeOtherTertiarySubject(event)}>
              <Form.Control type="OtherTertiarySchool" placeholder="Other Subject (3rd Choice)"/>
            </FloatingLabel> 
          </>
          : 
          <> </>
        }
      </>
        
        <>
          <h3>If you stated "other" for any of your choices, please describe what support is needed:</h3>
            <FloatingLabel controlID="OtherInfo" label="Support Needed" className="OtherInfo" onChange={(event)=>changeOtherInfo(event)}>
              <Form.Control type="OtherInfo" placeholder="Support Needed"/>
            </FloatingLabel>
        </>

        <>
          <h3>Please describe your needs in detail regarding the subject(s) you selected above:</h3>
          <p>The more detailed you are, the better we can find a tutor to fit your needs! For example: (AP Macroeconomics) I need help understanding Fiscal Policy; (K-5 math) I need help with understanding long division.</p>
            <FloatingLabel controlId="DetailedNeeds" label="Details of tutoring needs" className="DetailedNeeds" onChange={(event)=>changeDetailedNeeds(event)}>
              <Form.Control as="textarea" placeholder="Details of tutoring needs" style={{height: '100px'}}/>
            </FloatingLabel>
        </>

        <Link to="/StudentAdditional" ><Button onClick={AddNewStudentSubjects}>Save and Continue</Button></Link>
        </div>
    </div>
  );
}

export default StudentSubjects;
