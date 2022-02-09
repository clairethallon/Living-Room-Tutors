import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFlag } from "@fortawesome/free-solid-svg-icons";

function RecordsCard(props) {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const flagIcon = <FontAwesomeIcon icon={faFlag} />;
  const [tuteeLanguages, setTuteeLanguages] = useState([]);
  const [tutorLanguages, setTutorLanguages] = useState([]);
  const [mentorChosenGrade, setMentorChosenGrade] = useState([]);
  const [tutorSubjects, setTutorSubjects] = useState([]);
  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  const specialSubjects = useSelector((store) => store.specialSubjects);

  useEffect(() => {
    tuteeLanguageFinder(languages);
    tutorLanguageFinder(languages);
    gradeFinder(grades);
    subjectFinder(tuteeSubjects);
    tutorSubjectFinder(subjects);
    makePrettyTime(props.match.match_timestamp);
  }, []);

  const languages = [
    { name: "Arabic ", status: props.match.tutee_language_arabic },
    { name: "Chinese ", status: props.match.tutee_language_chinese },
    { name: "French ", status: props.match.tutee_language_french },
    { name: "Hmong ", status: props.match.tutee_language_hmong },
    { name: "Somali ", status: props.match.tutee_language_somali },
    { name: "Tagalog ", status: props.match.tutee_language_tagalog },
    { name: "Vietnamese ", status: props.match.tutee_language_vietnamese },
    { name: "Spanish ", status: props.match.tutee_language_spanish },
  ];

  const grades = [
    {
      name: "Pre-K/Kindergarten",
      status: props.match.mentor_prek_kindergarten,
    },
    { name: "1st Grade", status: props.match.mentor_grade_1 },
    { name: "2nd Grade", status: props.match.mentor_grade_2 },
    { name: "3rd Grade", status: props.match.mentor_grade_3 },
    { name: "4th Grade", status: props.match.mentor_grade_4 },
    { name: "5th Grade", status: props.match.mentor_grade_5 },
    { name: "6th Grade", status: props.match.mentor_grade_6 },
    { name: "7th Grade", status: props.match.mentor_grade_7 },
    { name: "8th Grade", status: props.match.mentor_grade_8 },
    { name: "9th Grade", status: props.match.mentor_grade_9 },
    { name: "10th Grade", status: props.match.mentor_grade_10 },
    { name: "11th Grade", status: props.match.mentor_grade_11 },
    { name: "12th Grade", status: props.match.mentor_grade_12 },
  ];

  const tuteeSubjects = [
    { name: "K-5 Math ", dbname: "K5_Math" },
    { name: "K-5 Reading ", dbname: "K5_Reading" },
    { name: "K-5 English/Writing ", dbname: "K5_English_Writing" },
    { name: "K-5 Social Studies ", dbname: "K5_Science" },
    { name: "K-5 Science ", dbname: "K5_social_studies" },
    { name: "6-8th Language Arts ", dbname: "6th_to_8th_language_arts" },
    { name: "6-8th Science ", dbname: "6th_to_8th_science" },
    { name: "6-8th Social Studies ", dbname: "6th_to_8th_social_studies" },
    { name: "Pre-Algebra ", dbname: "math_pre_algebra" },
    { name: "Algebra I/ Linear Algebra ", dbname: "math_alg1_linear_alg" },
    { name: "Algebra II ", dbname: "math_alg2" },
    { name: "Geometry ", dbname: "math_geom" },
    { name: "Precalculus/Trigonometry ", dbname: "math_precalc_trig" },
    { name: "Biology/Life Sciences ", dbname: "sci_bio_life" },
    { name: "Chemistry ", dbname: "sci_chem" },
    { name: "Physics ", dbname: "sci_physics" },
    { name: "Computer Science ", dbname: "sci_comp_sci" },
    { name: "Chinese ", dbname: "lang_chinese" },
    { name: "Spanish ", dbname: "lang_spanish" },
    { name: "French ", dbname: "lang_french" },
    { name: "German ", dbname: "lang_german" },
    { name: "World History ", dbname: "hist_world" },
    { name: "U.S. History ", dbname: "hist_us" },
    { name: "AP/Honors Biology ", dbname: "ap_bio" },
    { name: "AP/Honors Chemistry ", dbname: "ap_chem" },
    { name: "AP/Honors Physics ", dbname: "ap_physics" },
    { name: "AP/Honors Calculus AB ", dbname: "ap_calc_AB" },
    { name: "AP/Honors Calculus BC ", dbname: "ap_calc_BC" },
    { name: "AP/Honors Statistics ", dbname: "ap_stats" },
    { name: "AP/Honors Computer Science ", dbname: "ap_comp_sci" },
    {
      name: "AP/Honors English Literature and Composition ",
      dbname: "ap_english_lit_comp",
    },
    { name: "AP/Honors Language and Composition ", dbname: "ap_lang_comp" },
    { name: "AP/Honors Macroeconomics ", dbname: "ap_macro_econ" },
    { name: "AP/Honors Microeconomics ", dbname: "ap_micro_econ" },
    { name: "AP/Honors Psychology ", dbname: "ap_psyc" },
    { name: "AP/Honors United States History ", dbname: "ap_hist_us" },
    {
      name: "AP/Honors Government and Politics (US) ",
      dbname: "ap_gov_politics_us",
    },
    { name: "AP/Honors Human Geography ", dbname: "ap_human_geog" },
    { name: "SAT Subject Tests ", dbname: "sat_subject_tests" },
    { name: "SAT Prep ", dbname: "sat_prep" },
    { name: "ACT Prep ", dbname: "act_prep" },
  ];

  const subjects = [
    { name: "K-5 Math ", status: props.match.tutor_K5_Math },
    { name: "K-5 Reading ", status: props.match.tutor_K5_Reading },
    {
      name: "K-5 English/Writing ",
      status: props.match.tutor_K5_English_Writing,
    },
    { name: "K-5 Social Studies ", status: props.match.tutor_K5_Science },
    { name: "K-5 Science ", status: props.match.tutor_K5_social_studies },
    {
      name: "6-8th Language Arts ",
      status: props.match.tutor_6th_to_8th_language_arts,
    },
    { name: "6-8th Science ", status: props.match.tutor_6th_to_8th_science },
    {
      name: "6-8th Social Studies ",
      status: props.match.tutor_6th_to_8th_social_studies,
    },
    { name: "Pre-Algebra ", status: props.match.tutor_math_pre_algebra },
    {
      name: "Algebra I/ Linear Algebra ",
      status: props.match.tutor_math_alg1_linear_alg,
    },
    { name: "Algebra II ", status: props.match.tutor_math_alg2 },
    { name: "Geometry ", status: props.match.tutor_math_geom },
    {
      name: "Precalculus/Trigonometry ",
      status: props.match.tutor_math_precalc_trig,
    },
    { name: "Biology/Life Sciences ", status: props.match.tutor_sci_bio_life },
    { name: "Chemistry ", status: props.match.tutor_sci_chem },
    { name: "Physics ", status: props.match.tutor_sci_physics },
    { name: "Computer Science ", status: props.match.tutor_sci_comp_sci },
    { name: "Chinese ", status: props.match.tutor_lang_chinese },
    { name: "Spanish ", status: props.match.tutor_lang_spanish },
    { name: "French ", status: props.match.tutor_lang_french },
    { name: "German ", status: props.match.tutor_lang_german },
    { name: "World History ", status: props.match.tutor_hist_world },
    { name: "U.S. History ", status: props.match.tutor_hist_us },
    { name: "AP/Honors Biology ", status: props.match.tutor_ap_bio },
    { name: "AP/Honors Chemistry ", status: props.match.tutor_ap_chem },
    { name: "AP/Honors Physics ", status: props.match.tutor_ap_physics },
    { name: "AP/Honors Calculus AB ", status: props.match.tutor_ap_calc_AB },
    { name: "AP/Honors Calculus BC ", status: props.match.tutor_ap_calc_BC },
    { name: "AP/Honors Statistics ", status: props.match.tutor_ap_stats },
    {
      name: "AP/Honors Computer Science ",
      status: props.match.tutor_ap_comp_sci,
    },
    {
      name: "AP/Honors English Literature and Composition ",
      status: props.match.tutor_ap_english_lit_comp,
    },
    {
      name: "AP/Honors Language and Composition ",
      status: props.match.tutor_ap_lang_comp,
    },
    {
      name: "AP/Honors Macroeconomics ",
      status: props.match.tutor_ap_macro_econ,
    },
    {
      name: "AP/Honors Microeconomics ",
      status: props.match.tutor_ap_micro_econ,
    },
    { name: "AP/Honors Psychology ", status: props.match.tutor_ap_psyc },
    {
      name: "AP/Honors United States History ",
      status: props.match.tutor_ap_hist_us,
    },
    {
      name: "AP/Honors Government and Politics (US) ",
      status: props.match.tutor_ap_gov_politics_us,
    },
    {
      name: "AP/Honors Human Geography ",
      status: props.match.tutor_ap_human_geog,
    },
    { name: "SAT Subject Tests ", status: props.match.tutor_sat_subject_tests },
    { name: "SAT Prep ", status: props.match.tutor_sat_prep },
    { name: "ACT Prep ", status: props.match.tutor_act_prep },
  ];

  const tuteeLanguageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log("CURRENT LANGUAGES", currentLanguages);
    setTuteeLanguages(currentLanguages);
    return currentLanguages;
  };

  const tutorLanguageFinder = (languages) => {
    console.log(languages);
    let currentLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].status === true) {
        currentLanguages.push(languages[i].name);
      }
    }
    console.log("CURRENT LANGUAGES", currentLanguages);
    setTutorLanguages(currentLanguages);
    return currentLanguages;
  };

  const gradeFinder = (grades) => {
    console.log(grades);
    let chosenGrade = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].status === true) {
        chosenGrade.push(grades[i].name);
      }
    }
    console.log("MENTOR GRADE", chosenGrade);
    setMentorChosenGrade(chosenGrade);
    return chosenGrade;
  };

  const tutorSubjectFinder = (subjects) => {
    // console.log(subjects);
    let mentor_subjects = [];
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].status === true) {
        mentor_subjects.push(subjects[i].name);
      }
    }
    console.log("MENTORING_SUBJECTS", mentor_subjects);
    setTutorSubjects(mentor_subjects);
    return mentor_subjects;
  };

  const makePrettyTime = (timestamp) => {
    let newTime = {
      year: "",
      month: "",
      day: "",
    };
    for (let i = 0; i < timestamp.length; i++) {
      if (i < 4) {
        newTime.year += timestamp[i];
      } else if (i > 4 && i < 7) {
        newTime.month += timestamp[i];
      } else if (i > 7 && i < 10) {
        newTime.day += timestamp[i];
      }
      setPrettyTime(newTime);
    }
  };

  const subjectFinder = (subjects) => {
    console.log("in subjectFinder");
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].dbname == props.match.subject_1) {
        setSubject1(subjects[i].name);
      }
      if (subjects[i].dbname == props.match.subject_2) {
        setSubject2(subjects[i].name);
      }
      if (subjects[i].dbname == props.match.subject_3) {
        setSubject3(subjects[i].name);
      }
    }
  };

  return (
    <div>
      {props.year == "all" || !props.year || props.year == prettyTime.year ? (
        <Accordion className="mb-3 accordionCard" defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {/* <Row> */}
              <Col xs="3">
                {props.match.tutor_first_name} {props.match.tutor_last_name}
              </Col>
              <Col xs="3">
                {props.match.tutee_firstname} {props.match.tutee_lastname}
              </Col>
              <Col xs="3">
                {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
              </Col>
              <Col className="cardButtons" xs="2"></Col>
              {/* </Row> */}
            </Accordion.Header>
            <Accordion.Body>
              <div class="tuteeInfoBackground"> </div>
              <h2 className="tuteeInfo">Tutee General Information</h2>
              <div className="tuteeGeneralInfoRecordsSection">
                <div className="profileTitle">
                  <h2 className="profileFirstLastName">
                    {props.match.tutee_firstname} {props.match.tutee_lastname}
                  </h2>
                  <p>({props.match.tutee_pronouns})</p>
                </div>
                <p className="profileQuestion">
                  {emailIcon} Parent/Guardian's email (if applicable):{" "}
                  <span className="profileAnswer">
                    {props.match.email_guardian}
                  </span>
                </p>
                <p className="profileQuestion">
                  {emailIcon} Student's email:
                  <span className="profileAnswer">
                    {" "}
                    {props.match.email_student}
                  </span>
                </p>
                <p className="profileQuestion">
                  {" "}
                  {phoneIcon} Phone number:
                  <span className="profileAnswer">
                    {" "}
                    {props.match.tutee_phone}
                  </span>
                </p>
                <p className="profileQuestion">
                  Grade Level:
                  {props.match.tutee_grade === "prek_kindergarten" ? (
                    <span className="profileAnswer"> Pre-K/Kindergarten</span>
                  ) : (
                    <span className="profileAnswer">
                      {" "}
                      {props.match.tutee_grade}
                    </span>
                  )}
                </p>

                <p className="profileQuestion">
                  School attending:{" "}
                  <span className="profileAnswer">
                    {" "}
                    {props.match.tutee_school}
                  </span>
                </p>

                <div>
                  <p className="profileQuestion">Language preference:</p>
                  <div className="languagePillContainer">
                    {tuteeLanguages.map((language) => {
                      return (
                        <div className="languagePill">
                          {" "}
                          <span className="languageFlag">{flagIcon}</span>{" "}
                          {language}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div className="tuteeSubjectBackground"></div>
                <h2 className="tuteeSubject">Tutee Subject Preference</h2>
                <div className="tuteeSubjectRecordsSection">
                  <div className="subjectContainer">
                    <p className="profileQuestion">1st subject choice:</p>
                    {subject1 === "Precalculus/Trigonometry " ||
                    subject1 === "Chemistry " ||
                    subject1 === "Physics " ||
                    subject1 === "Computer Science " ||
                    subject1 === "Chinese " ||
                    subject1 === "Spanish " ||
                    subject1 === "French " ||
                    subject1 === "German " ||
                    subject1 === "World History " ||
                    subject1 === "U.S. History " ||
                    subject1 === "AP/Honors Biology " ||
                    subject1 === "AP/Honors Chemistry " ||
                    subject1 === "AP/Honors Physics " ||
                    subject1 === "AP/Honors Calculus AB " ||
                    subject1 === "AP/Honors Calculus BC " ||
                    subject1 === "AP/Honors Statistics " ||
                    subject1 === "AP/Honors Computer Science " ||
                    subject1 ===
                      "AP/Honors English Literature and Composition " ||
                    subject1 === "AP/Honors Language and Composition " ||
                    subject1 === "AP/Honors Macroeconomics " ||
                    subject1 === "AP/Honors Microeconomics " ||
                    subject1 === "AP/Honors Psychology " ||
                    subject1 === "AP/Honors United States History " ||
                    subject1 === "AP/Honors Government and Politics (US) " ||
                    subject1 === "AP/Honors Human Geography " ||
                    subject1 === "SAT Subject Tests " ||
                    subject1 === "SAT Prep " ||
                    subject1 === "ACT Prep " ? (
                      <div className="subjectPillFlagged">
                        <span className="subjectFlag">{flagIcon}</span>{" "}
                        {subject1}
                      </div>
                    ) : (
                      <div className="subjectPill">{subject1}</div>
                    )}
                  </div>

                  <div className="subjectContainer">
                    <p className="profileQuestion">2nd subject choice:</p>
                    {subject2 === "Precalculus/Trigonometry " ||
                    subject2 === "Chemistry " ||
                    subject2 === "Physics " ||
                    subject2 === "Computer Science " ||
                    subject2 === "Chinese " ||
                    subject2 === "Spanish " ||
                    subject2 === "French " ||
                    subject2 === "German " ||
                    subject2 === "World History " ||
                    subject2 === "U.S. History " ||
                    subject2 === "AP/Honors Biology " ||
                    subject2 === "AP/Honors Chemistry " ||
                    subject2 === "AP/Honors Physics " ||
                    subject2 === "AP/Honors Calculus AB " ||
                    subject2 === "AP/Honors Calculus BC " ||
                    subject2 === "AP/Honors Statistics " ||
                    subject2 === "AP/Honors Computer Science " ||
                    subject2 ===
                      "AP/Honors English Literature and Composition " ||
                    subject2 === "AP/Honors Language and Composition " ||
                    subject2 === "AP/Honors Macroeconomics " ||
                    subject2 === "AP/Honors Microeconomics " ||
                    subject2 === "AP/Honors Psychology " ||
                    subject2 === "AP/Honors United States History " ||
                    subject2 === "AP/Honors Government and Politics (US) " ||
                    subject2 === "AP/Honors Human Geography " ||
                    subject2 === "SAT Subject Tests " ||
                    subject2 === "SAT Prep " ||
                    subject2 === "ACT Prep " ? (
                      <div className="subjectPillFlagged">
                        <span className="subjectFlag">{flagIcon}</span>{" "}
                        {subject2}
                      </div>
                    ) : (
                      <div className="subjectPill">{subject2}</div>
                    )}
                  </div>

                  <div className="subjectContainer">
                    <p className="profileQuestion">3nd subject choice:</p>
                    {subject3 === "Precalculus/Trigonometry " ||
                    subject3 === "Chemistry " ||
                    subject3 === "Physics " ||
                    subject3 === "Computer Science " ||
                    subject3 === "Chinese " ||
                    subject3 === "Spanish " ||
                    subject3 === "French " ||
                    subject3 === "German " ||
                    subject3 === "World History " ||
                    subject3 === "U.S. History " ||
                    subject3 === "AP/Honors Biology " ||
                    subject3 === "AP/Honors Chemistry " ||
                    subject3 === "AP/Honors Physics " ||
                    subject3 === "AP/Honors Calculus AB " ||
                    subject3 === "AP/Honors Calculus BC " ||
                    subject3 === "AP/Honors Statistics " ||
                    subject3 === "AP/Honors Computer Science " ||
                    subject3 ===
                      "AP/Honors English Literature and Composition " ||
                    subject3 === "AP/Honors Language and Composition " ||
                    subject3 === "AP/Honors Macroeconomics " ||
                    subject3 === "AP/Honors Microeconomics " ||
                    subject3 === "AP/Honors Psychology " ||
                    subject3 === "AP/Honors United States History " ||
                    subject3 === "AP/Honors Government and Politics (US) " ||
                    subject3 === "AP/Honors Human Geography " ||
                    subject3 === "SAT Subject Tests " ||
                    subject3 === "SAT Prep " ||
                    subject3 === "ACT Prep " ? (
                      <div className="subjectPillFlagged">
                        <span className="subjectFlag">{flagIcon}</span>{" "}
                        {subject3}
                      </div>
                    ) : (
                      <div className="subjectPill">{subject3}</div>
                    )}
                  </div>

                  <p className="profileQuestion">
                    Detail description regarding help needed:{" "}
                    <p className="profileAnswer quote">
                      "{props.match.tutee_subject_details}"
                    </p>
                  </p>
                </div>

                <div className="tuteeAdditionalInfoBackground"></div>
                <h2 className="tuteeAdditionalInfo">Additional Information</h2>
                <div className="tuteeAdditionalInfoRecordsSection">
                  <span className="profileAnswer quote">
                    "{props.match.tutee_misc_info}"
                  </span>
                </div>
                <hr></hr>
                <h2>Tutor Information:</h2>
                <h3>
                  {props.match.tutor_first_name} {props.match.tutor_last_name} (
                  {props.match.tutor_pronouns})
                </h3>
                <p className="profileQuestion">
                  {emailIcon} Tutor's email: {props.match.tutor_email}
                </p>
                <p className="profileQuestion">
                  {phoneIcon} Phone number: {props.match.tutor_phone}
                </p>
                <p className="profileQuestion">
                  Grade Level: {props.match.tutor_grade}
                </p>
                <p className="profileQuestion">
                  School attending: {props.match.tutor_school}
                </p>
                <p className="profileQuestion">
                  Grades comfortable tutoring:{" "}
                  {mentorChosenGrade.map((grade) => {
                    return <div className="gradesPill">{grade}</div>;
                  })}{" "}
                </p>

                {/* <p className="profileQuestion">
                Subjects comfortable tutoring:{" "}
                {tutorSubjects.map((subject) => {
                  return <p>{subject}</p>;
                })}
              </p> */}

                <div>
                  <p className="profileQuestion">
                    Subjects comfortable tutoring:{" "}
                  </p>
                  {tutorSubjects.map((subject) => {
                    if (
                      subject === "Precalculus/Trigonometry " ||
                      subject === "Chemistry " ||
                      subject === "Physics " ||
                      subject === "Computer Science " ||
                      subject === "Chinese " ||
                      subject === "Spanish " ||
                      subject === "French " ||
                      subject === "German " ||
                      subject === "World History " ||
                      subject === "U.S. History " ||
                      subject === "AP/Honors Biology " ||
                      subject === "AP/Honors Chemistry " ||
                      subject === "AP/Honors Physics " ||
                      subject === "AP/Honors Calculus AB " ||
                      subject === "AP/Honors Calculus BC " ||
                      subject === "AP/Honors Statistics " ||
                      subject === "AP/Honors Computer Science " ||
                      subject ===
                        "AP/Honors English Literature and Composition " ||
                      subject === "AP/Honors Language and Composition " ||
                      subject === "AP/Honors Macroeconomics " ||
                      subject === "AP/Honors Microeconomics " ||
                      subject === "AP/Honors Psychology " ||
                      subject === "AP/Honors United States History " ||
                      subject === "AP/Honors Government and Politics (US) " ||
                      subject === "AP/Honors Human Geography " ||
                      subject === "SAT Subject Tests " ||
                      subject === "SAT Prep " ||
                      subject === "ACT Prep "
                    ) {
                      return (
                        <div className="subjectPillFlagged">
                          <span className="subjectFlag">{flagIcon}</span>{" "}
                          {subject}
                        </div>
                      );
                    } else {
                      return <div className="subjectPill">{subject}</div>;
                    }
                  })}
                </div>

                <div>
                  <p className="profileQuestion">
                    Languages comfortable tutoring in:
                  </p>
                  <div className="languagePillContainer">
                    {tutorLanguages.map((language) => {
                      return (
                        <div className="languagePill">
                          <span className="languageFlag">{flagIcon}</span>{" "}
                          {language}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="profileQuestion">
                Additional information:{" "}
                <span className="profileAnswer quote">
                  "{props.match.tutor_miscinfo}"
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default RecordsCard;
