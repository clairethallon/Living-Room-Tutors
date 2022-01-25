import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentAdditional with the name for the new component.
function StudentAdditional(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Additional Info');

  const[newAdditionalInfo, setNewAdditionalInfo]= useState();

  const changeAdditionalInfo= ()=>{
    console.log('in any additional info');
    setNewAdditionalInfo(event.target.value);
  }


  return (
    <div>
      <h2>{heading}</h2>

      <div>
        <h3>Is there anything else you want us to know about the student?</h3>
        <input type="text" placeholder="AdditionalInfo" onChange={(event)=>changeAdditionalInfo(event)}></input>
        </div>
    </div>
  );
}

export default StudentAdditional;
