import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentTerms with the name for the new component.
function StudentTerms(props) {
  const dispatch = useDispatch();

  const tutorInfo = useSelector((store) => store.newtutor.newtutorInfoReducer);
  const tutorAdditional = useSelector(
    (store) => store.newtutor.newtutorAdditionalReducer
  );
  const tutorSubjects = useSelector(
    (store) => store.newtutor.newtutorSubjectReducer
  );
  const [heading, setHeading] = useState("Tutor Terms");

  const [tutorTerms, setTutorTerms] = useState(false);

  const changeTutorTerms = () => {
    setTutorTerms(!tutorTerms);
    console.log("in terms", tutorTerms);
  };

  //package up all collected info into object
  const newTutorObject = {
    PreK: tutorSubjects.PreK,
    FirstGrade: tutorSubjects.FirstGrade,
    SecondGrade: tutorSubjects.SecondGrade,
    ThirdGrade: tutorSubjects.ThirdGrade,
    FourthGrade: tutorSubjects.FourthGrade,
    FifthGrade: tutorSubjects.FifthGrade,
    SixthGrade: tutorSubjects.SixthGrade,
    SeventhGrade: tutorSubjects.SeventhGrade,
    EighthGrade: tutorSubjects.EighthGrade,
    NinthGrade: tutorSubjects.NinthGrade,
    TenthGrade: tutorSubjects.TenthGrade,
    EleventhGrade: tutorSubjects.EleventhGrade,
    TwelfthGrade: tutorSubjects.TwelfthGrade,
    K5Math: tutorSubjects.K5Math,
    K5Reading: tutorSubjects.K5Reading,
    K5EnglishWriting: tutorSubjects.K5EnglishWriting,
    K5SocialStudies: tutorSubjects.K5SocialStudies,
    K5Science: tutorSubjects.K5Science,
    SixToEightLanguageArts: tutorSubjects.SixToEightLanguageArts,
    SixToEightScience: tutorSubjects.SixToEightScience,
    SixToEightSocialStudies: tutorSubjects.SixToEightSocialStudies,
    MathPreAlgebra: tutorSubjects.MathPreAlgebra,
    MathLinearAlgebra: tutorSubjects.MathPreAlgebra,
    MathGeometry: tutorSubjects.MathGeometry,
    MathAlgebraII: tutorSubjects.MathAlgebraII,
    MathPrecalculusTrigonometry: tutorSubjects.MathPrecalculusTrigonometry,
    BiologyLifeSciences: tutorSubjects.BiologyLifeSciences,
    ScienceChemistry: tutorSubjects.ScienceChemistry,
    SciencePhysics: tutorSubjects.SciencePhysics,
    ComputerScience: tutorSubjects.ComputerScience,
    LanguageChinese: tutorSubjects.LanguageChinese,
    LanguageSpanish: tutorSubjects.LanguageSpanish,
    LanguageFrench: tutorSubjects.LanguageFrench,
    LanguageGerman: tutorSubjects.LanguageGerman,
    WorldHistory: tutorSubjects.WorldHistory,
    USHistory: tutorSubjects.USHistory,
    APHonorsBiology: tutorSubjects.APHonorsBiology,
    APHonorsChemistry: tutorSubjects.APHonorsChemistry,
    APHonorsPhysics: tutorSubjects.APHonorsPhysics,
    APHonorsComputerScience: tutorSubjects.APHonorsComputerScience,
    APHonorsCalculusAB: tutorSubjects.APHonorsCalculusAB,
    APHonorsCalculusBC: tutorSubjects.APHonorsCalculusBC,
    APHonorsStatistics: tutorSubjects.APHonorsStatistics,
    APHonorsEnglishLiterature: tutorSubjects.APHonorsEnglishLiterature,
    APHonorsEnglishLanguage: tutorSubjects.APHonorsEnglishLanguage,
    APHonorsMacroeconomics: tutorSubjects.APHonorsMacroeconomics,
    APHonorsMicroeconomics: tutorSubjects.APHonorsMicroeconomics,
    APHonorsUSHistory: tutorSubjects.APHonorsUSHistory,
    APHonorsGovernmentPolitics: tutorSubjects.APHonorsGovernmentPolitics,
    APHonorsHumanGeography: tutorSubjects.APHonorsHumanGeography,
    SATSubjectTests: tutorSubjects.SATSubjectTests,
    SATPrep: tutorSubjects.SATPrep,
    ACTPrep: tutorSubjects.ACTPrep,
    Other: tutorSubjects.Other,
    Spanish: tutorSubjects.Spanish,
    Somali: tutorSubjects.Somali,
    Arabic: tutorSubjects.Arabic,
    Chinese: tutorSubjects.Chinese,
    Tagalog: tutorSubjects.Tagalog,
    French: tutorSubjects.French,
    Vietnamese: tutorSubjects.Vietnamese,
    Hmong: tutorSubjects.Hmong,
    firstName: tutorInfo.firstName,
    lastName: tutorInfo.lastName,
    email: tutorInfo.email,
    pronouns: tutorInfo.pronouns,
    phone: tutorInfo.phone,
    grade: tutorInfo.grade,
    school: tutorInfo.school,
    miscInfo: tutorAdditional.tutorAdditionalInfo,
  };

  const sendNewTutor = () => {
    let termserrors = false;
    if (tutorTerms == false) {
      termserrors = true;
    }

    if (termserrors) {
      alert("Please agree to the terms to submit your application.");
    }
    dispatch({ type: "SEND_NEW_TUTOR", payload: newTutorObject });
  };

  return (
    <div>
      <Header />
      <div className="maincard">
        <h2>{heading}</h2>

        <p>
          Living Room Tutors (LRT) is supporting communities in their efforts to
          mitigate the immediate impact of school closures by facilitating the
          connections between volunteer student mentors/ tutors and students/
          mentees(tutees) who need support. This matching and tutoring service
          is offered at no cost. Once a match is made, it is the responsibility
          of the tutor and tutee to plan a tutoring session via Zoom, Google
          Hangouts, Skype or any other digital conferencing platform. By
          agreeing to become a volunteer tutor, you grant permission to allow
          LRT to share your personal information, such as a telephone number or
          email, with your tutee in order to facilitate scheduling a tutoring
          session. Once the match is made, it is the responsibility of the
          parents of the student mentee to set up and oversee any conferences
          and determine if the tutoring sessions should occur. We take safety
          very seriously and are taking all the possible precautions to
          prioritize the well-being and protection of all who use this service.
          Living Room Tutors does not perform background checks on potential
          mentors or mentees. We do not make any guarantees as to the quality of
          the mentorship/ tutoring provided by our mentors. By using this
          service, you are agreeing to assume all risks connected to the
          participation in the Living Room Tutors program match program and
          agree to not make a claim against Living Room Tutors, its directors
          and volunteers for damages that result from the use of our services,
          however caused, as a result of the student participation.
        </p>

        <div>
          <input
            type="checkbox"
            id="Tutor Terms"
            name="Tutor Terms"
            onChange={(event) => changeTutorTerms()}
          />
          <label for="Tutor Terms">I understand</label>
        </div>
        <p>{JSON.stringify(tutorInfo)}</p>
        <p>{JSON.stringify(tutorAdditional)}</p>
        <p>{JSON.stringify(tutorSubjects)}</p>
        <p>newTutorObject: {JSON.stringify(newTutorObject)}</p>

        <Link to="/TutorInfo">
          <Button onClick={sendNewTutor}>Submit</Button>
        </Link>
      </div>
    </div>
  );
}

export default StudentTerms;
