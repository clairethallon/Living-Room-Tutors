import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentAdditional with the name for the new component.
function StudentAdditional(props) {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Additional Info');

  const[newAdditionalInfo, setNewAdditionalInfo]= useState();

  const changeAdditionalInfo= ()=>{
    console.log('in any additional info');
    setNewAdditionalInfo(event.target.value);
  }

  const AddNewStudentAdditional =()=>{
    //package up new info in object
    const newStudentAdditional = {
      newAdditionalInfo: newAdditionalInfo,
    }
    dispatch( {type:'ADD_NEW_STUDENT_ADDITIONAL', payload: newStudentAdditional})
  }
  


  return (
    <div>
      
     <Header/>

      <div className= 'maincard'>
      <h2>{heading}</h2>

      <div>
        <h3>Is there anything else you want us to know about the student?</h3>
        <input type="text" placeholder="AdditionalInfo" onChange={(event)=>changeAdditionalInfo(event)}></input>
      </div>

      <Link to="/StudentTerms"><Button onClick={AddNewStudentAdditional}>Save and Continue</Button></Link>
      </div>
    </div>
  );
}

export default StudentAdditional;
