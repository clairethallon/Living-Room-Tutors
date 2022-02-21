import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

function RecordsCard(props) {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const flagIcon = <FontAwesomeIcon icon={faStar} />;
  const [tuteeLanguages, setTuteeLanguages] = useState([]);
  const [tutorLanguages, setTutorLanguages] = useState([]);
  const [mentorChosenGrade, setMentorChosenGrade] = useState([]);
  const [tutorSubjects, setTutorSubjects] = useState([]);
  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });
  const dispatch = useDispatch();


  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  const specialSubjects = useSelector((store) => store.specialSubjects);
  const currentlangs = useSelector((store) => store.currentlangs);


  useEffect(() => {
    tuteeLanguageFinder(languageTutee);
    tutorLanguageFinder(languageTutor);
    gradeFinder(grades);
    subjectFinder(tuteeSubjects);
    tutorSubjectFinder(subjects);
    makePrettyTime(props.match.match_timestamp);
  }, []);



  const languageTutee = [
    { name: "Arabic ", status: props.match.tutee_language_arabic },
    { name: "Chinese ", status: props.match.tutee_language_chinese },
    { name: "French ", status: props.match.tutee_language_french },
    { name: "Hmong ", status: props.match.tutee_language_hmong },
    { name: "Somali ", status: props.match.tutee_language_somali },
    { name: "Tagalog ", status: props.match.tutee_language_tagalog },
    { name: "Vietnamese ", status: props.match.tutee_language_vietnamese },
    { name: "Spanish ", status: props.match.tutee_language_spanish },
    { name: props.match.tutee_language_other, status: false },
  ];

  const languageTutor = [
    { name: "Arabic ", status: props.match.tutor_language_arabic },
    { name: "Chinese ", status: props.match.tutor_language_chinese },
    { name: "French ", status: props.match.tutor_language_french },
    { name: "Hmong ", status: props.match.tutor_language_hmong },
    { name: "Somali ", status: props.match.tutor_language_somali },
    { name: "Tagalog ", status: props.match.tutor_language_tagalog },
    { name: "Vietnamese ", status: props.match.tutor_language_vietnamese },
    { name: "Spanish ", status: props.match.tutor_language_spanish },
    { name: props.match.tutor_language_other, status: false },
  ];

  const grades = [
    {
      name: "Pre-K/Kindergarten",
      status: props.match.prek_kindergarten,
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
    { name: "AP/Honors Calculus AB ", status: props.match.tutor_ap_calc_ab },
    { name: "AP/Honors Calculus BC ", status: props.match.tutor_ap_calc_bc },
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
    if (props.match.tutee_language_other !== null) {
      currentLanguages.push(props.match.tutee_language_other);
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
    if (props.match.tutor_language_other !== null) {
      currentLanguages.push(props.match.tutor_language_other);
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
      {/* {JSON.stringify(props.match)} */}

      {props.year == "all" || !props.year || props.year == prettyTime.year ? (
        <Accordion className="accordionCard" defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Col xs="3">
                {props.match.tutee_firstname} {props.match.tutee_lastname}
              </Col>
              <Col xs="3">
                {props.match.tutor_first_name} {props.match.tutor_last_name}
              </Col>
              <Col xs="3">
                {prettyTime.month}.{prettyTime.day}.{prettyTime.year}
              </Col>
              <Col className="cardButtons" xs="2"></Col>
              {/* </Row> */}
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <div class="tuteeInfoBackground"> </div>
                  <h2 className="tuteeInfo">Tutee General Information</h2>

                  <div className="tuteeGeneralInfoRecordsSection">
                    <div className="profileTitle">
                      <h2 className="profileFirstLastName">
                        {props.match.tutee_firstname}{" "}
                        {props.match.tutee_lastname}
                      </h2>
                      {props.match.tutee_pronouns && (
                        <p>({props.match.tutee_pronouns})</p>
                      )}
                    </div>

                    {props.match.email_guardian && (
                      <div>
                        <p className="profileQuestion">
                          {emailIcon} Parent/Guardian's email:{" "}
                        </p>
                        <p className="profileAnswer">
                          {props.match.email_guardian}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="profileQuestion">
                        {emailIcon} Student's email:
                      </p>
                      <p className="profileAnswer">
                        {" "}
                        {props.match.email_student}
                      </p>
                    </div>

                    <div>
                      <p className="profileQuestion">
                        {" "}
                        {phoneIcon} Phone number:
                      </p>
                      <p className="profileAnswer">
                        {" "}
                        {props.match.tutee_phone}
                      </p>
                    </div>

                    <div>
                      <p className="profileQuestion">Grade Level:</p>
                      {props.match.tutee_grade === "prek_kindergarten" ? (
                        <p className="profileAnswer"> Pre-K/Kindergarten</p>
                      ) : (
                          <p className="profileAnswer">
                            {" "}
                            {props.match.tutee_grade}
                          </p>
                        )}
                    </div>

                    <div>
                      <p className="profileQuestion">School attending: </p>
                      <p className="profileAnswer">
                        {" "}
                        {props.match.tutee_school}
                      </p>
                    </div>

                    <div>
                      <p className="profileQuestion">Language preference:</p>
                      <div className="languagePillContainer">
                        {languageTutee.map((language) => {
                          if (language.status === true) {
                            return (

                              <div className="languagePill">
                                {" "}
                                <span className="languageFlag">
                                  {flagIcon}
                                </span>{" "}
                                {language.name}
                              </div>
                            );
                          }
                        })}
                        {props.match.tutee_language_other !== null ?
                          <div className="languagePill">
                            {" "}
                            <span className="languageFlag">
                              {flagIcon}
                            </span>{" "}
                            {props.match.tutee_language_other}
                          </div>
                          : <span></span>}
                      </div>
                    </div>
                  </div>

                  <div className="tuteeSubjectBackground"></div>
                  <h2 className="tuteeSubject">Tutee Subject Preference</h2>
                  <div className="tuteeSubjectRecordsSection">
                    <div className="subjectContainer">
                      <p className="profileQuestion">1st subject choice:</p>
                      {tuteeSubjects.map((tuteeSubj) => {
                        if (tuteeSubj.dbname === props.match.subject_1 && (
                          tuteeSubj.name === "Precalculus/Trigonometry " ||
                          tuteeSubj.name === "Chemistry " ||
                          tuteeSubj.name === "Biology/Life Sciences " ||
                          tuteeSubj.name === "Physics " ||
                          tuteeSubj.name === "Computer Science " ||
                          tuteeSubj.name === "Chinese " ||
                          tuteeSubj.name === "Spanish " ||
                          tuteeSubj.name === "French " ||
                          tuteeSubj.name === "German " ||
                          tuteeSubj.name === "World History " ||
                          tuteeSubj.name === "U.S. History " ||
                          tuteeSubj.name === "AP/Honors Biology " ||
                          tuteeSubj.name === "AP/Honors Chemistry " ||
                          tuteeSubj.name === "AP/Honors Physics " ||
                          tuteeSubj.name === "AP/Honors Calculus AB " ||
                          tuteeSubj.name === "AP/Honors Calculus BC " ||
                          tuteeSubj.name === "AP/Honors Statistics " ||
                          tuteeSubj.name === "AP/Honors Computer Science " ||
                          tuteeSubj.name ===
                          "AP/Honors English Literature and Composition " ||
                          tuteeSubj.name === "AP/Honors Language and Composition " ||
                          tuteeSubj.name === "AP/Honors Macroeconomics " ||
                          tuteeSubj.name === "AP/Honors Microeconomics " ||
                          tuteeSubj.name === "AP/Honors Psychology " ||
                          tuteeSubj.name === "AP/Honors United States History " ||
                          tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
                          tuteeSubj.name === "AP/Honors Human Geography " ||
                          tuteeSubj.name === "SAT Subject Tests " ||
                          tuteeSubj.name === "SAT Prep " ||
                          tuteeSubj.name === "ACT Prep ")) {
                          return (
                            <div className="subjectPillFlagged">
                              {" "}
                              <span className="subjectFlag">
                                {flagIcon}
                              </span>{" "}
                              {tuteeSubj.name}
                            </div>
                          );
                        }
                        else if (tuteeSubj.dbname === props.match.subject_1) {
                          return (
                            <div className="subjectPill">
                              {" "}
                              {tuteeSubj.name}
                            </div>
                          );
                        }
                      })}

                    </div>

                    <div className="subjectContainer">
                      <p className="profileQuestion">2nd subject choice:</p>
                      {tuteeSubjects.map((tuteeSubj) => {
                        if (tuteeSubj.dbname === props.match.subject_2 && (
                          tuteeSubj.name === "Precalculus/Trigonometry " ||
                          tuteeSubj.name === "Chemistry " ||
                          tuteeSubj.name === "Physics " ||
                          tuteeSubj.name === "Computer Science " ||
                          tuteeSubj.name === "Biology/Life Sciences " ||
                          tuteeSubj.name === "Chinese " ||
                          tuteeSubj.name === "Spanish " ||
                          tuteeSubj.name === "French " ||
                          tuteeSubj.name === "German " ||
                          tuteeSubj.name === "World History " ||
                          tuteeSubj.name === "U.S. History " ||
                          tuteeSubj.name === "AP/Honors Biology " ||
                          tuteeSubj.name === "AP/Honors Chemistry " ||
                          tuteeSubj.name === "AP/Honors Physics " ||
                          tuteeSubj.name === "AP/Honors Calculus AB " ||
                          tuteeSubj.name === "AP/Honors Calculus BC " ||
                          tuteeSubj.name === "AP/Honors Statistics " ||
                          tuteeSubj.name === "AP/Honors Computer Science " ||
                          tuteeSubj.name ===
                          "AP/Honors English Literature and Composition " ||
                          tuteeSubj.name === "AP/Honors Language and Composition " ||
                          tuteeSubj.name === "AP/Honors Macroeconomics " ||
                          tuteeSubj.name === "AP/Honors Microeconomics " ||
                          tuteeSubj.name === "AP/Honors Psychology " ||
                          tuteeSubj.name === "AP/Honors United States History " ||
                          tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
                          tuteeSubj.name === "AP/Honors Human Geography " ||
                          tuteeSubj.name === "SAT Subject Tests " ||
                          tuteeSubj.name === "SAT Prep " ||
                          tuteeSubj.name === "ACT Prep ")) {
                          return (
                            <div className="subjectPillFlagged">
                              {" "}
                              <span className="subjectFlag">
                                {flagIcon}
                              </span>{" "}
                              {tuteeSubj.name}
                            </div>
                          );
                        }
                        else if (tuteeSubj.dbname === props.match.subject_2) {
                          return (
                            <div className="subjectPill">
                              {" "}
                              {tuteeSubj.name}
                            </div>
                          );
                        }
                      })}
                    </div>

                    <div className="subjectContainer">
                      <p className="profileQuestion">3nd subject choice:</p>
                      {tuteeSubjects.map((tuteeSubj) => {
                        if (tuteeSubj.dbname === props.match.subject_3 && (
                          tuteeSubj.name === "Precalculus/Trigonometry " ||
                          tuteeSubj.name === "Chemistry " ||
                          tuteeSubj.name === "Physics " ||
                          tuteeSubj.name === "Computer Science " ||
                          tuteeSubj.dbname === "Biology/Life Sciences " ||
                          tuteeSubj.name === "Chinese " ||
                          tuteeSubj.name === "Spanish " ||
                          tuteeSubj.name === "French " ||
                          tuteeSubj.name === "German " ||
                          tuteeSubj.name === "World History " ||
                          tuteeSubj.name === "U.S. History " ||
                          tuteeSubj.name === "AP/Honors Biology " ||
                          tuteeSubj.name === "AP/Honors Chemistry " ||
                          tuteeSubj.name === "AP/Honors Physics " ||
                          tuteeSubj.name === "AP/Honors Calculus AB " ||
                          tuteeSubj.name === "AP/Honors Calculus BC " ||
                          tuteeSubj.name === "AP/Honors Statistics " ||
                          tuteeSubj.name === "AP/Honors Computer Science " ||
                          tuteeSubj.name ===
                          "AP/Honors English Literature and Composition " ||
                          tuteeSubj.name === "AP/Honors Language and Composition " ||
                          tuteeSubj.name === "AP/Honors Macroeconomics " ||
                          tuteeSubj.name === "AP/Honors Microeconomics " ||
                          tuteeSubj.name === "AP/Honors Psychology " ||
                          tuteeSubj.name === "AP/Honors United States History " ||
                          tuteeSubj.name === "AP/Honors Government and Politics (US) " ||
                          tuteeSubj.name === "AP/Honors Human Geography " ||
                          tuteeSubj.name === "SAT Subject Tests " ||
                          tuteeSubj.name === "SAT Prep " ||
                          tuteeSubj.name === "ACT Prep ")) {
                          return (
                            <div className="subjectPillFlagged">
                              {" "}
                              <span className="subjectFlag">
                                {flagIcon}
                              </span>{" "}
                              {tuteeSubj.name}
                            </div>

                          );
                        }
                        else if (tuteeSubj.dbname === props.match.subject_3) {
                          return (
                            <div className="subjectPill">
                              {" "}
                              {tuteeSubj.name}
                            </div>
                          );
                        }
                      })}
                    </div>

                    {props.match.tutee_subject_details && (
                      <div>
                        <p className="profileQuestion">
                          Detail description regarding help needed:{" "}
                        </p>
                        <p className="profileAnswer quote">
                          "{props.match.tutee_subject_details}"
                        </p>
                      </div>
                    )}
                  </div>

                  {props.match.tutee_misc_info && (
                    <div>
                      <div className="tuteeAdditionalInfoBackground"></div>
                      <h2 className="tuteeAdditionalInfo">
                        Additional Information
                      </h2>
                      <div className="tuteeAdditionalInfoRecordsSection">
                        <span className="profileAnswer quote">
                          "{props.match.tutee_misc_info}"
                        </span>
                      </div>
                    </div>
                  )}
                </Col>

                {/* -----------tutor info starts---------- */}
                <Col className="tutorTuteeBorder">
                  <div className="tutorContainer">
                    <div className="tutorAdditionalInfoBackground"></div>
                    <h2 className="tutorGeneralInfo">
                      Tutor General Information
                    </h2>
                    <div className="tutorGeneralInfoSection">
                      <div className="profileTitle">
                        <h2 className="profileFirstLastName">
                          {props.match.tutor_first_name}{" "}
                          {props.match.tutor_last_name}
                        </h2>
                        {props.match.tutor_pronouns && (
                          <p>({props.match.tutor_pronouns})</p>
                        )}
                      </div>

                      <div>
                        <p className="profileQuestion">
                          {emailIcon} Tutor's email:{" "}
                        </p>
                        <p className="profileAnswer">
                          {props.match.tutor_email}
                        </p>
                      </div>

                      <div>
                        <p className="profileQuestion">
                          {phoneIcon} Phone number:{" "}
                        </p>
                        <p className="profileAnswer">
                          {props.match.tutor_phone}
                        </p>
                      </div>

                      <div>
                        <p className="profileQuestion">Grade Level:</p>
                        <p className="profileAnswer">
                          {props.match.tutor_grade}
                        </p>
                      </div>

                      <div>
                        <p className="profileQuestion">School attending:</p>
                        <p className="profileAnswer">
                          {" "}
                          {props.match.tutor_school}
                        </p>
                      </div>

                      <div>
                        <p className="profileQuestion">
                          Languages comfortable tutoring in:
                        </p>
                        <div className="languagePillContainer">
                          {languageTutor.map((language) => {
                            if (language.status === true) {
                              return (

                                <div className="languagePill">
                                  {" "}
                                  <span className="languageFlag">
                                    {flagIcon}
                                  </span>{" "}
                                  {language.name}
                                </div>
                              );
                            }
                          })}
                          {props.match.tutor_language_other !== null ?
                            <div className="languagePill">
                              {" "}
                              <span className="languageFlag">
                                {flagIcon}
                              </span>{" "}
                              {props.match.tutor_language_other}
                            </div>
                            : <span></span>}
                        </div>

                      </div>
                    </div>

                    <div className="tutorSubjectGradePreferenceBackground"></div>
                    <h2 className="tutorSubjectGradePreference">
                      Tutor Subject & Grade Preference
                    </h2>
                    <div className="tutorSubjectGradePreferenceSection">
                      <div>
                        <p className="profileQuestion">
                          Grades comfortable tutoring:{" "}
                        </p>
                        <div className="gradesPillContainer">
                          {grades.map((grade) => {
                            if (grade.status === true) {
                              return (

                                <div className="gradesPill">
                                  {" "}

                                  {grade.name}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>

                      <div>
                        <p className="profileQuestion">
                          Subjects comfortable tutoring:{" "}
                        </p>
                        <div className="subjectPillContainer">
                          {subjects.map((subject) => {
                            if (subject.status === true && (
                              subject.name === "Precalculus/Trigonometry " ||
                              subject.name === "Biology/Life Sciences " ||
                              subject.name === "Chemistry " ||
                              subject.name === "Physics " ||
                              subject === "Computer Science " ||
                              subject.name === "Chinese " ||
                              subject.name === "Spanish " ||
                              subject.name === "French " ||
                              subject.name === "German " ||
                              subject.name === "World History " ||
                              subject.name === "U.S. History " ||
                              subject.name === "AP/Honors Biology " ||
                              subject.name === "AP/Honors Chemistry " ||
                              subject.name === "AP/Honors Physics " ||
                              subject.name === "AP/Honors Calculus AB " ||
                              subject.name === "AP/Honors Calculus BC " ||
                              subject.name === "AP/Honors Statistics " ||
                              subject.name === "AP/Honors Computer Science " ||
                              subject.name ===
                              "AP/Honors English Literature and Composition " ||
                              subject.name ===
                              "AP/Honors Language and Composition " ||
                              subject.name === "AP/Honors Macroeconomics " ||
                              subject.name === "AP/Honors Microeconomics " ||
                              subject.name === "AP/Honors Psychology " ||
                              subject.name === "AP/Honors United States History " ||
                              subject.name ===
                              "AP/Honors Government and Politics (US) " ||
                              subject.name === "AP/Honors Human Geography " ||
                              subject.name === "SAT Subject Tests " ||
                              subject.name === "SAT Prep " ||
                              subject.name === "ACT Prep "
                            )) {
                              return (
                                <div className="subjectPillFlagged">
                                  <span className="subjectFlag">
                                    {flagIcon}
                                  </span>{" "}
                                  {subject.name}
                                </div>
                              );
                            } else if (subject.status === true) {
                              return (
                                <div className="subjectPill">{subject.name}</div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                    {props.match.tutor_miscinfo && (
                      <div>
                        <div className="tuteeAdditionalInfoBackground"></div>
                        <h2 className="tuteeAdditionalInfo">
                          Additional Information
                        </h2>
                        <div className="tuteeAdditionalInfoRecordsSection">
                          <span className="profileAnswer quote">
                            "{props.match.tutor_miscinfo}"
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
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
