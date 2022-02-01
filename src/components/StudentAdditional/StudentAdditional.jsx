import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function StudentAdditional(props) {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);

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

      <>
        <h3>Is there anything else you want us to know about the Student?</h3>
        <FloatingLabel controlId="AdditionalInfo" label="Additional Info" className="AdditionalInfo" onChange={(event)=>changeAdditionalInfo(event)}>
          <Form.Control as="textarea" placeholder="Additional Info" style={{height: '100px'}}/>
        </FloatingLabel>
      </>

      <Link to="/StudentTerms"><Button onClick={AddNewStudentAdditional}>Save and Continue</Button></Link>
      </div>
    </div>
  );
}

export default StudentAdditional;
