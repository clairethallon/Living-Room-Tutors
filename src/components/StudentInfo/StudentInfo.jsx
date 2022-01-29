import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorInfo with the name for the new component.
function TutorInfo(props) {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Info');

  const[newSubmitter, setSubmitter]= useState();
  const[newFirstName, setNewFirstName]= useState();
  const[newLastName, setNewLastName]= useState();
  const[newParentEmail, setNewParentEmail]= useState();
  const[newEmail, setNewEmail]= useState();

  // ******** PRONOUN CHECK BOXES **************
  const [sheHerPronoun, setsheHerPronoun] = useState( false );
  const [heHimPronoun, setheHimPronoun] = useState( false );
  const [theyThemPronoun, settheyThemPronoun] = useState( false );
  const [IsChecked, setIsChecked] = useState( true );
  const [otherPronoun, setOtherPronoun] = useState();
   // ******** PRONOUN CHECK BOXES **************

  const[newPhone, setNewPhone]= useState();
  const[newSchool, setNewSchool]= useState();
  const[newGrade, setNewGrade]= useState();

  // ******** LANGUAGE CHECK BOXES **************
  const [Spanish, setSpanish] = useState( false );
  const [Somali, setSomali] = useState( false );
  const [Arabic, setArabic] = useState( false );
  const [Chinese, setChinese] = useState( false );
  const [Tagalog, setTagalog] = useState( false );
  const [French, setFrench] = useState( false );
  const [Vietnamese, setVietnamese] = useState( false );
  const [Hmong, setHmong] = useState( false );
  const [IsLangChecked, setIsLangChecked] = useState( true );
  const [otherLanguage, setotherLanguage] = useState();
  // ******** LANGUAGE CHECK BOXES **************

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

    const changeIsChecked = () => {
      setIsChecked(!IsChecked);
      console.log('is other checked?', IsChecked)
    }

    const changeOtherPronoun = () => {
      console.log('Other is:', otherPronoun)
      setOtherPronoun(event.target.value)
    }

    // ******** END END END END END**************
    

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

    // ******** LANGUAGE CHECK BOXES **************
    const changeSpanish = () => {
      setSpanish(!Spanish);
      console.log('Spanish', Spanish)
    }

    const changeSomali = () => {
      setSomali(!Somali);
      console.log('Somali', Somali)
    }

    const changeArabic = () => {
      setArabic(!Arabic);
      console.log('Arabic', Arabic)
    }

    const changeChinese = () => {
      setChinese(!Chinese);
      console.log('Chinese', Chinese)
    }

    const changeTagalog = () => {
      setTagalog(!Tagalog);
      console.log('Tagalog:', Tagalog)
    }

    const changeFrench = () => {
      setFrench(!French);
      console.log('French', French)
    }

    const changeVietnamese = () => {
      setVietnamese(!Vietnamese);
      console.log('Vietnamese', Vietnamese)
    }

    const changeHmong = () => {
      setHmong(!Hmong);
      console.log('Hmong', Hmong)
    }

    const changeIsLangChecked = () => {
      setIsLangChecked(!IsLangChecked);
      console.log('is other checked?', IsLangChecked)
    }

    const changeotherLangauge = () =>{
      console.log("in other langauge", otherLanguage)
      setotherLanguage(event.target.value);
    }
    // ******** END END END END END **************
   

    const AddNewTutorInfo =()=>{
      //package up new info in object
      const newStudentInfo = {
        submitter: newSubmitter,
        firstName: newFirstName,
        lastName: newLastName,
        parentEmail: newParentEmail,
        email: newEmail,
        sheHerPronoun: sheHerPronoun,
        heHimPronoun: heHimPronoun,
        theyThemPronoun: theyThemPronoun,
        otherPronoun: otherPronoun,
        phone: newPhone,
        school: newSchool,
        grade: newGrade,
        Spanish: Spanish,
        Somali: Somali, 
        Arabic: Arabic,
        Chinese: Chinese,
        Tagalog: Tagalog,
        French: French,
        Vietnamese: Vietnamese,
        Hmong: Hmong,
        otherLanguage: otherLanguage,
      }

      let pronounerrors = false;
      if( (newStudentInfo.sheHerPronoun == false ) && 
          ( newStudentInfo.heHimPronoun == false ) && 
          (newStudentInfo.theyThemPronoun == false ) && 
          (newStudentInfo.otherPronoun == '' || newStudentInfo.otherPronoun == null)){
            pronounerrors = true;
          }

      if (newStudentInfo.submitter== '' || newStudentInfo.submitter== null ||
      newStudentInfo.firstName == '' || newStudentInfo.firstName== null ||
      newStudentInfo.lastName == '' || newStudentInfo.lastName == null ||
      newStudentInfo.email== '' || newStudentInfo.email== null ||
      newStudentInfo.phone== '' || newStudentInfo.phone== null ||
      newStudentInfo.school== '' || newStudentInfo.school== null ||
      newStudentInfo.grade== '' || newStudentInfo.grade== null ||
      pronounerrors || languageErrors ){alert('Please complete all required fields.')}
      dispatch( {type:'ADD_NEW_STUDENT_INFO', payload: newStudentInfo})
    }


  return (
    <div>
      <div className= 'maincard'>
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
        <input type="text" placeholder="Student First Name" onChange={(event)=>changefirstName(event)}></input>
        <input type="text" placeholder="Student Last Name" onChange={(event)=>changelastName(event)}></input>
      </div>

      <div>
        <input type="text" placeholder="Student Email" onChange={(event)=>changeEmail(event)}></input>
      </div>

      <div>
      <p>What are the Student's pronouns?</p>
        {/* <p>{JSON.stringify(sheHerPronoun)}</p> */}
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
        <div>
          <input type="checkbox" id="OtherPronoun" name="OtherPronoun" onChange={(e) => changeIsChecked(event.target.checked)}/>
          <label htmlFor="Other Pronouns">Other</label>
          <input type="text" placeholder="What are your Pronouns" disabled={IsChecked} onChange={(event)=>changeOtherPronoun()}></input>
        </div>
      </div>

      <div>
      <input type="text" placeholder="Student Phone Number" onChange={(event)=>changePhone(event)}></input>
      </div>

      <div>
      <input type="text" placeholder="Student School" onChange={(event)=>changeSchool(event)}></input>
      </div>


      <div>
      <Form.Select aria-label="gradeLevel" onChange={(event)=>changeGrade(event)}>
          <option>Select Student's Current Grade Level:</option>
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
          </Form.Select>
        </div>


        <div>
          <p>Is the student an English language learner? If so, what is their preferred language?</p>
          {/* <p>{JSON.stringify(Spanish)}</p> */}
          
          <div>
            <input type="checkbox" id="Spanish" name="Spanish" onChange={(event)=>changeSpanish()}/>
            <label for="Spanish">Spanish</label>
          </div>

          <div>
            <input type="checkbox" id="Somali" name="Somali" onChange={(event)=>changeSomali()}/>
            <label for="Somali">Somali</label>
          </div>

          <div>
            <input type="checkbox" id="Arabic" name="Arabic" onChange={(event)=>changeArabic()}/>
            <label for="Arabic">Arabic</label>
          </div>

          <div>
            <input type="checkbox" id="Chinese" name="Chinese" onChange={(event)=>changeChinese()}/>
            <label for="Chinese">Chinese</label>
          </div>

          <div>
            <input type="checkbox" id="Tagalog" name="Tagalog" onChange={(event)=>changeTagalog()}/>
            <label for="Tagalog">Tagalog</label>
          </div>

          <div>
            <input type="checkbox" id="French" name="French" onChange={(event)=>changeFrench()}/>
            <label for="French">French</label>
          </div>

          <div>
            <input type="checkbox" id="Vietnamese" name="Vietnamese" onChange={(event)=>changeVietnamese()}/>
            <label for="Vietnamese">Vietnamese</label>
          </div>

          <div>
            <input type="checkbox" id="Hmong" name="Hmong" onChange={(event)=>changeHmong()}/>
            <label for="Hmong">Hmong</label>
          </div>

          <div>
          <input type="checkbox" id="OtherLanguage" name="OtherLanguage" onChange={(e) => changeIsLangChecked(event.target.checked)}/>
          <label htmlFor="Other Pronouns">Other</label>
          <input type="text" placeholder="Other Language" disabled={IsLangChecked} onChange={(event)=>changeotherLangauge(event)}></input>
        </div>

      </div>


      <Link to="/StudentSubjects"><Button onClick={AddNewTutorInfo}>Save and Continue</Button></Link>
      </div>
    </div>
  );
}

export default TutorInfo;
