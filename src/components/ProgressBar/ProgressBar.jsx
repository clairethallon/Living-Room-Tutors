import React, { useEffect, useState  } from 'react';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import checkbox from "../../images/checkbox.png";
import doggo from "../../images/doggo.png";

function ProgressBar(props) {

  useEffect(()=>{ 
    changeProgressBarImageInfo();
    changeProgressBarImageSubjects();
    changeProgressBarImageAdditional();
    changeProgressBarImageTerms();
    }, []);
 
  const store = useSelector((store) => store);
  const newStudent = useSelector((store)=> store.newStudent.newstudentInfoReducer);
  const newStudentSubject = useSelector((store)=> store.newStudent.newstudentSubjectReducer);
  const newStudentAdditional = useSelector((store)=> store.newStudent.newstudentAdditionalReducer);

  // const newstudentInfoReducer = useSelector((store)=> store.newstudentInfoReducer);
  const [heading, setHeading] = useState('Functional Component');

  const [ProgressBarImageInfo, setProgressBarImageInfo] = useState(false);
  const [ProgressBarImageSubjects, setProgressBarImageSubjects] = useState(false);
  const [ProgressBarImageAdditional, setProgressBarImageAdditional] = useState(false);
  const [ProgressBarImageTerms, setProgressBarImageTerms] = useState(false);

  //sets student info image in progress bar
  const changeProgressBarImageInfo = () => {
    console.log("newstudent is:", newStudent.submitter)
    if (newStudent.submitter === 'Student' || newStudent.submitter === 'ParentOrGuardian'){
      setProgressBarImageInfo(true)
    }
    else (setProgressBarImageInfo(false))
  };

  //sets student subjects image in project bar
  const changeProgressBarImageSubjects = () => {
    console.log("reducer is equal to:", newStudentSubject.newPrimarySubject);
    if (newStudentSubject.newPrimarySubject != "" || newStudentSubject.newPrimarySubject != null){
      setProgressBarImageSubjects(true)
    }
    else(setProgressBarImageSubjects(false))
  };

  const changeProgressBarImageAdditional = () => {
    console.log("newStudentSubject.newStudentAdditional", newStudentSubject.newStudentAdditional);
    if (newStudentAdditional.newAdditionalInfo != "" || newStudentSubject.newAdditionalInfo != null ){
    setProgressBarImageAdditional(true)
    }
    else(setProgressBarImageAdditional(false))
  };


  const changeProgressBarImageTerms = () => {
    console.log("in changeProgressBarImage");
    setProgressBarImageTerms(ProgressBarImageTerms);
  };

  return (
    <div>

    <Container>
    <Row>

      <Col>
          {ProgressBarImageInfo ? (
              <Link className="navLink" to="/studentinfo">
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={checkbox}/></Link>
          ) : (
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={doggo}/>
          )}
          <p>Student Info</p>
      </Col>


      <Col>
          {ProgressBarImageSubjects ? (
              <Link className="navLink" to="/studentsubjects">
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={checkbox}/></Link>
          ) : (
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={doggo}/>
          )}
            <p>Subjects</p>
      </Col>

      <Col>
          {ProgressBarImageAdditional? (
              <Link className="navLink" to="/studentadditional">
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={checkbox}/></Link>
          ) : (
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={doggo}/>
          )}
            <p>Additional Info</p>
      </Col>

      <Col>
          {ProgressBarImageTerms ? (
              <Link className="navLink" to="/studentterms">
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={checkbox}/></Link>
          ) : (
                <img className="progressPic" style={{'maxWidth': '80px'}} component="img" src={doggo}/>
          )}
            <p>Terms</p>
      </Col>

      </Row>
    </Container>

    </div>
  );
}

export default ProgressBar;
