import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    changeImageTutorInfo();
    changeImageTutorSubjects();
    changeImageTutorAdditional();
    changeImageTutorTerms();
  }, []);

  const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  const store = useSelector((store) => store);
  const newTutorInfo = useSelector(
    (store) => store.newtutor.newtutorInfoReducer
  );
  const newTutorSubject = useSelector(
    (store) => store.newtutor.newtutorSubjectReducer
  );
  const newTutorAdditional = useSelector(
    (store) => store.newtutor.newtutorAdditionalReducer
  );

  // const newstudentInfoReducer = useSelector((store)=> store.newstudentInfoReducer);
  const [heading, setHeading] = useState("Functional Component");

  const [ImageTutorInfo, setImageTutorInfo] = useState(false);
  const [ProgressBarImageSubjects, setProgressBarImageSubjects] =
    useState(false);
  const [ProgressBarImageAdditional, setProgressBarImageAdditional] =
    useState(false);
  const [ProgressBarImageTerms, setProgressBarImageTerms] = useState(false);

  //sets student info image in progress bar
  const changeImageTutorInfo = () => {
    console.log("newTutorInfo is:", newTutorInfo.firstName);
    if (
      newTutorInfo.firstName === "" ||
      newTutorInfo.firstName === null ||
      newTutorInfo.firstName === undefined
    ) {
      setImageTutorInfo(false);
    } else setImageTutorInfo(true);
  };

  //sets student subjects image in project bar
  const changeImageTutorSubjects = () => {
    // console.log("this is:", ProgressBarImageSubjects.ACTPrep);
    if (
      newTutorSubject.ACTPrep === true ||
      newTutorSubject.APHonorsBiology === true ||
      newTutorSubject.APHonorsCalculusAB === true ||
      newTutorSubject.APHonorsCalculusBC === true ||
      newTutorSubject.APHonorsChemistry === true ||
      newTutorSubject.APHonorsComputerScience === true ||
      newTutorSubject.APHonorsEnglishLanguage === true ||
      newTutorSubject.APHonorsEnglishLiterature === true ||
      newTutorSubject.APHonorsGovernmentPolitics === true ||
      newTutorSubject.APHonorsHumanGeography === true ||
      newTutorSubject.APHonorsMacroeconomics === true ||
      newTutorSubject.APHonorsMicroeconomics === true ||
      newTutorSubject.APHonorsPhysics === true ||
      newTutorSubject.APHonorsPsychology === true ||
      newTutorSubject.APHonorsStatistics === true ||
      newTutorSubject.APHonorsUSHistory === true ||
      newTutorSubject.Arabic === true ||
      newTutorSubject.BiologyLifeSciences === true ||
      newTutorSubject.Chinese === true ||
      newTutorSubject.EighthGrade === true ||
      newTutorSubject.EleventhGrade === true ||
      newTutorSubject.FifthGrade === true ||
      newTutorSubject.FirstGrade === true ||
      newTutorSubject.FourthGrade === true ||
      newTutorSubject.French === true ||
      newTutorSubject.Hmong === true ||
      newTutorSubject.K5EnglishWriting === true ||
      newTutorSubject.K5Math === true ||
      newTutorSubject.K5Reading === true ||
      newTutorSubject.K5Science === true ||
      newTutorSubject.K5SocialStudies === true ||
      newTutorSubject.LanguageChinese === true ||
      newTutorSubject.LanguageFrench === true ||
      newTutorSubject.LanguageGerman === true ||
      newTutorSubject.LanguageSpanish === true ||
      newTutorSubject.MathAlgebraII === true ||
      newTutorSubject.MathGeometry === true ||
      newTutorSubject.MathLinearAlgebra === true ||
      newTutorSubject.MathPreAlgebra === true ||
      newTutorSubject.MathPrecalculusTrigonometry === true ||
      newTutorSubject.NinthGrade === true ||
      newTutorSubject.PreK === true ||
      newTutorSubject.SATPrep === true ||
      newTutorSubject.SATSubjectTests === true ||
      newTutorSubject.ScienceChemistry === true ||
      newTutorSubject.SciencePhysics === true ||
      newTutorSubject.SecondGrade === true ||
      newTutorSubject.SeventhGrade === true ||
      newTutorSubject.SixToEightLanguageArts === true ||
      newTutorSubject.SixToEightScience === true ||
      newTutorSubject.SixToEightSocialStudies === true ||
      newTutorSubject.SixthGrade === true ||
      newTutorSubject.Somali === true ||
      newTutorSubject.Spanish === true ||
      newTutorSubject.Tagalog === true ||
      newTutorSubject.TenthGrade === true ||
      newTutorSubject.ThirdGrade === true ||
      newTutorSubject.TwelfthGrade === true ||
      newTutorSubject.USHistory === true ||
      newTutorSubject.Vietnamese === true ||
      newTutorSubject.WorldHistory === true
    ) {
      setProgressBarImageSubjects(true);
    } else setProgressBarImageSubjects(false);
  };

  const changeImageTutorAdditional = () => {
    console.log(
      "newTutorAdditional.tutorAdditionalInfo",
      newTutorAdditional.tutorAdditionalInfo
    );
    if (
      newTutorAdditional.tutorAdditionalInfo === "" ||
      newTutorAdditional.tutorAdditionalInfo === null ||
      newTutorAdditional.tutorAdditionalInfo === undefined
    ) {
      setProgressBarImageAdditional(false);
    } else setProgressBarImageAdditional(true);
  };

  const changeImageTutorTerms = () => {
    console.log("in changeProgressBarImage");
    setProgressBarImageTerms(ProgressBarImageTerms);
  };

  return (
    <div>
      <Container>
        <Nav className="navBarContainer formContent">
          <div className="navLineTwo"></div>
          <Nav.Item className="navCol">
            {ImageTutorInfo ? (
              <div className="NavItem">
                <Nav.Link
                  className="checkedNavLink navContent"
                  href="#tutorinfo"
                >
                  <div className="ProgressStepDiv">{checkIcon}</div>
                  <p>Tutor Info</p>
                </Nav.Link>
              </div>
            ) : (
              <Nav.Link className="navContent" href="#" disabled>
                <div className="ProgressStepDiv">1</div>
                <p className="navText">Tutor Info</p>
              </Nav.Link>
            )}
          </Nav.Item>

          <Nav.Item className="navCol">
            {ProgressBarImageSubjects ? (
              <div className="NavItem">
                <Nav.Link
                  className="checkedNavLink navContent"
                  href="#tutorsubjects"
                >
                  <div className="ProgressStepDiv">{checkIcon}</div>
                  <p>Subjects</p>
                </Nav.Link>
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
              </div>
            ) : (
              <div className="NavItem">
                <Nav.Link className="navContent" href="#" disabled>
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
