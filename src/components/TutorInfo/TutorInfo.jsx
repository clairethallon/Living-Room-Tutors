import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



function TutorInfo(props) {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const newtutorInfo = useSelector((store) => store.newtutorInfo);


  const [heading, setHeading] = useState('Tutor Info');

  const[newTutorFirstName, setNewTutorFirstName]= useState();
  const[newTutorLastName, setNewTutorLastName]= useState();
  const[newTutorEmail, setNewEmail]= useState();

  // ******** PRONOUN CHECK BOXES **************
  const [sheHerPronoun, setsheHerPronoun] = useState( false );
  const [heHimPronoun, setheHimPronoun] = useState( false );
  const [theyThemPronoun, settheyThemPronoun] = useState( false );
  const [IsChecked, setIsChecked] = useState( true );
  const [otherPronoun, setOtherPronoun] = useState( );
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
      console.log('she/her status:', sheHerPronoun)
    }

    const changeheHimPronoun = () => {
      setheHimPronoun(!heHimPronoun);
      console.log('he/him status:', heHimPronoun)
    }

    const changetheyThemPronoun = () => {
      settheyThemPronoun(!theyThemPronoun);
      console.log('he/him status:', theyThemPronoun)
    }

    const changeIsChecked = () => {
      setIsChecked(!IsChecked);
      console.log('is other checked?', IsChecked)
    }

    const changeOtherPronoun = () => {
      console.log('Other is:', otherPronoun)
      setOtherPronoun(event.target.value)
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
      const newTutorInfo = {
        firstName: newTutorFirstName,
        lastName: newTutorLastName,
        email: newTutorEmail,
        sheHerPronoun: sheHerPronoun,
        heHimPronoun: heHimPronoun,
        theyThemPronoun: theyThemPronoun,
        otherPronoun: otherPronoun,
        phone: newTutorPhone,
        grade: newGrade,
        school: newTutorSchool,
      }
      let pronounerrors = false;
      if( (newTutorInfo.sheHerPronoun == false ) && 
          ( newTutorInfo.heHimPronoun == false ) && 
          (newTutorInfo.theyThemPronoun == false ) && 
          (newTutorInfo.otherPronoun == '' || newTutorInfo.otherPronoun == null)){
        pronounerrors = true;
      }
      if (newTutorInfo.firstName == '' || newTutorInfo.firstName== null ||
      newTutorInfo.lastName == '' || newTutorInfo.lastName == null ||
      newTutorInfo.email== '' || newTutorInfo.email== null ||
      newTutorInfo.phone== '' || newTutorInfo.phone== null ||
      newTutorInfo.grade== '' || newTutorInfo.grade== null ||
      newTutorInfo.school== '' || newTutorInfo.school== null || pronounerrors ){alert('problem!')}

      else{dispatch( {type:'ADD_NEW_TUTOR_INFO', payload: newTutorInfo})}
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
      <p>What are your pronouns?</p>
        {/* <p>{JSON.stringify(sheHerPronoun)}</p> */}
        <div>
          <input type="checkbox" id="She/Her" name="She/Her" onChange={(event)=>changesheHerPronoun()}/>
          <label htmlFor="She/Her">She/Her</label>
        </div> 
        <div>
          <input type="checkbox" id="He/Him" name="He/Him" onChange={(event)=>changeheHimPronoun()}/>
          <label htmlFor="He/Him">He/Him</label>
        </div>
        <div>
          <input type="checkbox" id="They/Them" name="They/Them" onChange={(event)=>changetheyThemPronoun()}/>
          <label htmlFor="They/Them">They/Them</label>
        </div>

        <div>
          <input type="checkbox" id="OtherPronoun" name="OtherPronoun" onChange={(e) => changeIsChecked(event.target.checked)}/>
          <label htmlFor="Other Pronouns">Other</label>
          <input type="text" placeholder="Tutor Phone Number" disabled={IsChecked} onChange={(event)=>changeOtherPronoun()}></input>
        </div>
{/* 
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="mpCheckbox" onChange={(e) => setIsChecked(e.target.checked)} />
            <Label for="mpinput">Input Field</Label>
            <Input type="text" name="pmInput" id="pmInput" disabled={isChecked} />
          </Label>
        </FormGroup> */}
        
      </div>
      

      <h3>What is your phone number?</h3>
      <input type="text" placeholder="Tutor Phone Number" onChange={(event)=>changeTutorPhone(event)}></input>

      <div>
      <Form.Select aria-label="gradeLevel" onChange={(event)=>changeTutorGrade(event)}>
        <option>What is your current grade level?</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="College">I'm in College</option>
          </Form.Select>
        </div>

        <div>
        <Form.Select aria-label="Tutor's Current School" onChange={(event)=>changeTutorSchool(event)}>
        <option>Where do you go to school?</option>
          <option value="Mayo High School">Mayo High School</option>
          <option value="John Marshall High School">John Marshall High School</option>
          <option value="Century High School">Century High School</option>
          <option value="Lourdes High School">Lourdes High School</option>
          <option value="Byron High School">Byron High School</option>
          <option value="Dover-Eyota High School">Dover-Eyota High School</option>
          <option value="Stewertville High School">Stewertville High School</option>
          <option value="College">I'm in College</option>
          <option value="Other">Other</option>
          </Form.Select>
        </div>

        <Link to="/tutorSubjects"><Button onClick={AddNewTutorInfo}>Save and Continue</Button></Link>
    </div>
  );
}

export default TutorInfo;
