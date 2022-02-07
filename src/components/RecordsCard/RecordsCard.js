import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";

function RecordsCard(props) {
  const [tuteeLanguages, setTuteeLanguages] = useState([]);
  const [tutorLanguages, setTutorLanguages] = useState([]);
  const [mentorChosenGrade, setMentorChosenGrade] = useState([]);
  const [tutorSubjects, setTutorSubjects] = useState([]);
  const [prettyTime, setPrettyTime] = useState({
    year: "",
    month: "",
    day: "",
  });

  useEffect(() => {
    tuteeLanguageFinder(languages);
    tutorLanguageFinder(languages);
    gradeFinder(grades);
    subjectFinder(subjects);
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

  const subjectFinder = (subjects) => {
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

  return (
    <div>
      {props.year == "all" || !props.year || props.year == prettyTime.year ?
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
              <h2>Tutee Information:</h2>
              <h3>
                {props.match.tutee_firstname} {props.match.tutee_lastname} (
              {props.match.tutee_pronouns})
            </h3>
              <p>
                Parent/Guardian's email (if applicable):{" "}
                {props.match.email_guardian}
              </p>
              <p>Student's email: {props.match.email_student}</p>
              <p>Phone number: {props.match.tutee_phone}</p>
              {props.match.tutee_grade === "prek_kindergarten" ?
                <p className="profileAnswer">Grade Level: Pre-K / Kindergarten</p> :
                <p className="profileAnswer"> Grade Level: {props.match.tutee_grade}</p>}

              <p>School attending: {props.match.tutee_school}</p>
              <p>
                Language preference (if not English):{" "}
                {tuteeLanguages.map((language) => {
                  return <p>{language}</p>;
                })}
              </p>
              <p>1st subject choice: {props.match.subject_1}</p>
              <p>2st subject choice: {props.match.subject_2}</p>
              <p>3st subject choice: {props.match.subject_3}</p>
              <p>
                other subject (if applicable): {props.match.tutee_subject_other}
              </p>
              <p>
                Detail description regarding help needed:{" "}
                {props.match.tutee_subject_details}
              </p>
              <p>Addition information: {props.match.tutee_misc_info}</p>
              <hr></hr>
              <h2>Tutor Information:</h2>
              <h3>
                {props.match.tutor_first_name} {props.match.tutor_last_name} (
              {props.match.tutor_pronouns})
            </h3>
              <p>Tutor's email: {props.match.tutor_email}</p>
              <p>Phone number: {props.match.tutor_phone}</p>
              <p>Grade Level: {props.match.tutor_grade}</p>
              <p>School attending: {props.match.tutor_school}</p>
              <p>
                Grades comfortable tutoring:
              {mentorChosenGrade.map((grade) => {
                return <p>{grade}</p>;
              })}
              </p>
              <p>
                Subjects comfortable tutoring:{" "}
                {tutorSubjects.map((subject) => {
                  return <p>{subject}</p>;
                })}
              </p>
              <p>
                Languages comfortable tutoring in:{" "}
                {tutorLanguages.map((language) => {
                  return <p>{language}</p>;
                })}
              </p>
              <p>Additional information:{props.match.tutor_miscinfo}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        : <span></span>}
    </div>
  );
}

export default RecordsCard;
