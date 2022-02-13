import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import checkbox from "../../images/checkbox.png";
import doggo from "../../images/doggo.png";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ProgressBar(props) {
  useEffect(() => {
    changeProgressBarImageInfo();
    changeProgressBarImageSubjects();
    changeProgressBarImageAdditional();
    changeProgressBarImageTerms();
  }, []);

  const store = useSelector((store) => store);
  const newStudent = useSelector(
    (store) => store.newStudent.newstudentInfoReducer
  );

  const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  const newStudentSubject = useSelector(
    (store) => store.newStudent.newstudentSubjectReducer
  );
  const newStudentAdditional = useSelector(
    (store) => store.newStudent.newstudentAdditionalReducer
  );

  // const newstudentInfoReducer = useSelector((store)=> store.newstudentInfoReducer);
  const [heading, setHeading] = useState("Functional Component");

  const [ProgressBarImageInfo, setProgressBarImageInfo] = useState(false);
  const [ProgressBarImageSubjects, setProgressBarImageSubjects] =
    useState(false);
  const [ProgressBarImageAdditional, setProgressBarImageAdditional] =
    useState(false);
  const [ProgressBarImageTerms, setProgressBarImageTerms] = useState(false);

  //sets student info image in progress bar
  const changeProgressBarImageInfo = () => {
    console.log("newstudent is:", newStudent.submitter);
    if (
      newStudent.submitter === "Student" ||
      newStudent.submitter === "ParentOrGuardian"
    ) {
      setProgressBarImageInfo(true);
    } else setProgressBarImageInfo(false);
  };

  //sets student subjects image in project bar
  const changeProgressBarImageSubjects = () => {
    console.log(
      "newStudentSubject.newPrimarySubject reducer is equal to:",
      newStudentSubject.newPrimarySubject
    );
    if (
      newStudentSubject.newPrimarySubject === "" ||
      newStudentSubject.newPrimarySubject === null ||
      newStudentSubject.newPrimarySubject === undefined
    ) {
      setProgressBarImageSubjects(false);
    } else setProgressBarImageSubjects(true);
  };

  const changeProgressBarImageAdditional = () => {
    console.log(
      "newStudentAdditional.newStudentAdditional",
      newStudentAdditional.newAdditionalInfo
    );
    if (
      newStudentAdditional.newAdditionalInfo === "" ||
      newStudentAdditional.newAdditionalInfo === null ||
      newStudentAdditional.newAdditionalInfo === undefined
    ) {
      setProgressBarImageAdditional(false);
    } else setProgressBarImageAdditional(true);
  };

  const changeProgressBarImageTerms = () => {
    console.log("in changeProgressBarImage");
    setProgressBarImageTerms(ProgressBarImageTerms);
  };

  return (
    <div>
      <Container>
        <Nav className="navBarContainer formContent">
          <div className="navLineTwo"></div>
          <Nav.Item className="navCol">
            {ProgressBarImageInfo ? (
              <div className="NavItem">
                <Nav.Link
                  className="checkedNavLink navContent"
                  href="#studentinfo"
                >
                  <div className="ProgressStepDiv">{checkIcon}</div>
                  <p>Student Info</p>
                </Nav.Link>
                {/* <div className="navLine"></div> */}
              </div>
            ) : (
              // <div className="NavItem">
              <Nav.Link className="navContent" href="#" disabled>
                <div className="ProgressStepDiv">1</div>
                <p className="navText">Student Info</p>
              </Nav.Link>
              // </div>
            )}
          </Nav.Item>

          <Nav.Item className="navCol">
            {ProgressBarImageSubjects ? (
              <div className="NavItem">
                <Nav.Link
                  className="checkedNavLink navContent"
                  href="#studentsubjects"
                >
                  <div className="ProgressStepDiv">{checkIcon}</div>
                  <p>Subjects</p>
                </Nav.Link>
                {/* <div className="navLine"></div> */}
              </div>
            ) : (
              <div className="NavItem">
                <Nav.Link className="navContent" href="#" disabled>
                  <div className="ProgressStepDiv">2</div>
                  <p>Subjects</p>
                </Nav.Link>
                {/* <div className="navLine"></div> */}
              </div>
            )}
          </Nav.Item>

          <Nav.Item>
            {ProgressBarImageAdditional ? (
              <div className="NavItem">
                <Nav.Link
                  className="checkedNavLink navContent"
                  href="#studentadditional"
                >
                  <div className="ProgressStepDiv">{checkIcon}</div>
                  <p>Additional Info</p>
                </Nav.Link>
                {/* <div className="navLine"></div> */}
              </div>
            ) : (
              <div className="NavItem">
                <Nav.Link className="navContent" to="#" disabled>
                  <div className="ProgressStepDiv">3</div>
                  <p>Additional Info</p>
                </Nav.Link>
                {/* <div className="navLine"></div> */}
              </div>
            )}
          </Nav.Item>

          <Nav.Item>
            {ProgressBarImageTerms ? (
              <Nav.Link
                className="checkedNavLink navContent"
                href="#studentterms"
              >
                <div className="ProgressStepDiv">{checkIcon}</div>
                <p>Terms</p>
              </Nav.Link>
            ) : (
              <Nav.Link className="navContent" to="#" disabled>
                <div className="ProgressStepDiv">4</div>
                <p>Terms</p>
              </Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default ProgressBar;
