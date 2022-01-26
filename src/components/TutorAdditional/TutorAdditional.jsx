import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 

function StudentAdditional(props) {
 
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Additional Info');


  const[newutorAdditionalInfo, setNewTutorAdditionalInfo]= useState();

  const changeTutorAdditionalInfo= ()=>{
    console.log('in additional info');
    setNewTutorAdditionalInfo(event.target.value);
  }

  return (
    <div>
      <h2>{heading}</h2>

      <h3>Is there any additional information you would like to provide?</h3>
      <input type="text" placeholder="Additional Info" onChange={(event)=>changeTutorAdditionalInfo(event)}></input>

      <Link to="/TutorTerms" ><button>Save and Continue</button></Link>

    </div>
  );
}

export default StudentAdditional;
