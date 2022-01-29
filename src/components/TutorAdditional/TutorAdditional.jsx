import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';


function StudentAdditional(props) {
  
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Additional Info');


  const[newutorAdditionalInfo, setNewTutorAdditionalInfo]= useState();

  const changeTutorAdditionalInfo= ()=>{
    console.log('in additional info');
    setNewTutorAdditionalInfo(event.target.value);
  }

  const AddTutorAdditionalInfo =()=>{
    //package up new info in object
    const additionalInfo = {
      tutorAdditionalInfo:newutorAdditionalInfo 
    }
    dispatch( {type:'ADD_TUTOR_ADITIONAL_INFO', payload: additionalInfo})
  }
  
  return (
    <div>
      <h2>{heading}</h2>

      <h3>Is there any additional information you would like to provide?</h3>
      <input type="text" placeholder="Additional Info" onChange={(event)=>changeTutorAdditionalInfo(event)}></input>

      <Link to="/TutorTerms"><Button onClick={AddTutorAdditionalInfo}>Save and Continue</Button></Link>

    </div>
  );
}

export default StudentAdditional;
